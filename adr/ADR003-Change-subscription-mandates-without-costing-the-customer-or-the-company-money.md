# ADR-003 — Change subscription mandates without costing the customer or the company money

* Status: Accepted
* Date: 2023-11-04
* Authors: Andrew Harmel-Law and Gayathri Thiyagarajan

## Decision
Mandate changes will be handled by Payment Gateway calls in the following order: (1) create new, (2) cancel existing, and (3) activate new (Option 1).

Failures in mandate creation will immediately be flagged to the customer. Failures in mandate cancellation or activation will be retried asynchronously, backing off exponentially to balance the time out of sync with the cost of API calls to the Payment Gateway. Customers will be informed by email when this completes. All mandate change steps will be logged for monitoring.

A single “change subscription mandate” endpoint will be exposed to Subscription service consumers.

## Context
![CONTEXT-DIAGRAM-2-0](https://github.com/user-attachments/assets/fbe1e089-3e83-4275-a576-cd0580db4f62)
Context diagram, v2.0: “Context map” showing the three bounded contexts in play, key entities, and interactions. Note the single integration with the Order Management systems and the trio of integrations with the Payment Gateway.

We are creating a new set of payment and subscription pProcessing services to enhance our market offering. Our only consumer at the moment is the in-house Order Management System, though there may be other consumers in the future. All consumers will provide their own frontends. The new services must hide the complexity of the Payment Gateway API.

To avoid having to be PCI compliant, we consume a third-party Payment Services Provider, but they don’t meet their SLAs. Conversations are currently underway with alternative suppliers.

The riskiest part of subscriptions is when bank details are changed: the Payment Provider API requires separate REST calls to cancel, create, and activate mandates. It’s essential that clients are never double-billed for subscriptions but also that we don’t give products away for free.

## Options Considered
  1. (SELECTED) Create, then cancel, then activate mandates. Async retries if “cancel” or “activate” fails.
  1. Cancel, then create and activate mandates. Async retries if “activate” fails.
  1. Cancel, then create and activate mandates.
  1. Create and activate, then cancel mandates.

## Consequences
  1. (SELECTED) Create, then cancel, then activate mandates. Async retries if “cancel” or “activate” fails.
![CANCEL-THEN-CREATE-ASYNC-RETRIES-1-0](https://github.com/user-attachments/assets/b43f8368-6210-4a21-ab6d-6c1794bc3554)
Sequence diagram, v1.0: Create, then cancel, then activate

      1. Selected because the “create” call is the only one that contains PCI data, and if this fails, we can tell the customer immediately.
      1. Selected because failures in “cancel” and “activate” calls can be retried async without any PCI data, ensuring there is always an active mandate.
      1. Selected becasuse async retries can exponentially back off, reducing API usage costs without making the customer wait.
      1. Selected because all these key transactions can be monitored.
      1. Selected despite the risk of having no active mandate when a payment isn’t entirely eliminated. Mandate creation failure can be flagged to customers immediately.
      1. Selected because it doesn’t lose the company money.
  1. Cancel, then create and activate mandates — async retries if “activate” fails.
![CANCEL-THEN-CREATE-ASYNC-RETRIES-1-0](https://github.com/user-attachments/assets/12c2a78b-4631-4d5b-a5f0-8eea776c9d37)
Sequence diagram, v1.0: Cancel, then create (with async retries)

      1. Blocks for first few (configurable) attempts at activation, then returns to client.
      1. Async retries ensure activation after the fact.
      1. Risk of having no mandate is virtually eliminated.
  1. Cancel, then create and activate mandates.
      1. Same as option 2, but without the async “activate” retries.
      1. Blocks returning to the client until all requests complete.
      1. Risk of having no mandate if the creation or activation fails. This is “fail in favor of the customer” but might cost the company money. Chances of Payment Provider failure based on previous experience are not insignificant.
      1. Missing mandates would be fixed with a customer support process as we can’t store bank details.
  1. Create and activate, then cancel mandates.
![CREATE-AND-ACTIVATE-THEN-CANCEL-1-0](https://github.com/user-attachments/assets/4444cc85-3819-4792-9b81-a1fb49b67435)
Sequence diagram, v1.0: Create and activate, then cancel

      1. Blocks returning to the client until all three requests succeed.
      1. Doesn’t lose the company money.
      1. This is not “fail in favor of the customer.” Risk of having two active mandates (old and new) if the cancellation fails. Chances of failure based on previous experience are not insignificant.

## Advice
* How quickly will we be able to respond to the customer when there is a failure at the Payment Provider? How confident can we be that they will never be double-charged? (Monira R., Product Manager)
* We have some uptime stats on the third-party Payment Provider’s service. It’s not great. They have at least one failure a month, frequently losing service for more than five minutes at a time. (Hanna A., Infra team)
* How much will we be able to tell the customer about what’s going on when Payment Provider failures happen? What information will we be able to share with them, and can we reassure them that their experience (and bank balance) will not be impacted? (Rebecca F., UX)
* Will this complicate our team’s integration with your payment and subscription processing service? Will you be able to hide this from us? Also, have you thought about the retry schedule for the async retries? (Vanessa F., Tech Lead from the Order Management team)
* We need to ensure that we don’t store any PCI data (card details, etc.). See this [CFR]. (Pete H., Infosec)
* Can you update the diagram in the Context section to show there are three separate calls to the Payment Gateway? Does the order of API calls always have to be “create,” then “activate”? Can you “cancel” in the middle? Being able to rely less on chained API calls makes us more robust. Also, we pay per API call to the third-party Payment Provider, and they are very good at collecting this fee, whether their service works or not. Exponential backoff schedules are good for this. Also think about observability (see this [CFR]) and make it easy to keep track of failed (and hopefully auto-recovered) subscription changes. (Alina B., Architect)

