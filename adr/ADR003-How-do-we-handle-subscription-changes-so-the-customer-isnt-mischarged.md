# ADR-003 — How do we handle subscription changes so the customer isn’t mischarged?

* Status: Proposed
* Date: 2023-11-01
* Authors: Andrew Harmel-Law and Gayathri Thiyagarajan

## Decision
TBC

## Context
![CONTEXT-DIAGRAM-1-0](https://github.com/user-attachments/assets/caf09843-8348-4471-bfa4-18ee1f2c9ac5)
Context diagram, v1.0: A “context map” showing the three bounded contexts in play, key entities, and relationships

We are creating a new set of payment and subscription processing services to enhance our market offering. Our only consumer at the moment is the in-house Order Management System, though we hope there will be other consumers in the future. 

To avoid PCI compliance, we consume a third-party Payment Services Provider. 
Our new services are backend only. All consumers will provide their own screens leading up to the payment. Payment screens come from the Payment Gateway. 

The riskiest part of subscriptions is when bank details are changed: the Payment Provider API requires separate REST calls to cancel, create, and activate mandates. It is essential that clients are never double-billed for subscriptions but also that we don’t give products away for free unnecessarily.

## Options Considered
NOTE: How will we recover from failures? Manually or automatically?
  1. (PROVISIONALLY SELECTED) Cancel, then create and activate mandates — async retries if “activate” fails.
![CANCEL-THEN-CREATE-ASYNC-RETRIES-1-0](https://github.com/user-attachments/assets/12c2a78b-4631-4d5b-a5f0-8eea776c9d37)
Cancel, then create (with async retries) sequence diagram, v1.0

      1. Blocks for first few attempts at activation, then returns to client.
      1. Risk of having no mandate is virtually eliminated.
  1. Cancel, then create and activate mandates.
      1. Same as option 1, but without the async “activate” retries.
      1. Blocks returning to the client until all three requests succeed.
      1. Risk of having no mandate if the creation fails. This is “fail in favor of the customer” but might cost the company money.
      1. Missing or inactive mandates could be fixed with manual support processes.
  1. Create and activate, then cancel mandates.
![CREATE-AND-ACTIVATE-THEN-CANCEL-1-0](https://github.com/user-attachments/assets/4444cc85-3819-4792-9b81-a1fb49b67435)
Create and activate, then cancel sequence diagram, v1.0

      1. Blocks returning to the client until all three requests succeed.
      1. Doesn’t lose the company money.
      1. Risks having two active mandates (old and new) if the cancellation fails. This is “fail in favor of the company.” How frequently do we think this will happen?

## Advice
* How quickly will we be able to respond to the customer when there is a failure at the Payment Provider? How confident can we be that they will never be double-charged? (Monira R., Product Manager)
* We have some uptime stats on the third-party Payment Provider’s service. It’s not great. They have at least one failure a month, frequently losing service for more than five minutes at a time. (Hanna A., Infra team)
* How much will we be able to tell the customer about what’s going on when Payment Provider failures happen? What information will we be able to share with them, and can we reassure them that their experience (and bank balance) will not be impacted? (Rebecca F., UX)
* Will this complicate our team’s integration with your payment and subscription processing service? Will you be able to hide this from us? Also, have you thought about the retry schedule for the async retries? (Vanessa F., Tech Lead from the Order Management team)
* We need to ensure that we don’t store any PCI data (card details, etc.). See this [CFR]. (Pete H., Infosec)
* Can you update the diagram in the Context section to show there are three separate calls to the Payment Gateway? Does the order of API calls always have to be “create,” then “activate”? Can you “cancel” in the middle? Being able to rely less on chained API calls makes us more robust. Also, we pay per API call to the third-party Payment Provider, and they are very good at collecting this fee, whether their service works or not. Exponential backoff schedules are good for this. Also think about observability (see this [CFR]) and make it easy to keep track of failed (and hopefully auto-recovered) subscription changes. (Alina B., Architect)

