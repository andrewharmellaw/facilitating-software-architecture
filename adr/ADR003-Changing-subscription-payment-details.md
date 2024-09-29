# ADR-003— Changing subscription payment details

* Status: Draft
* Date: 2023-10-28
* Authors: Andrew Harmel-Law and Gayathri Thiyagarajan

## Decision
TBC

## Context
These are new service(s).

Existing services are Spring Boot Microservices architecture running on Java 1.8 and Linux (Red Hat Enterprise Linux) VMs.

We support one-off payments AND recurring payments/subscriptions.	

We don’t want to be PCI compliant—don’t handle financial information.

Actual payment services (debit/credit transactions and setup of recurring payments) will be provided by a third-party payment services provider.

Services are “white-labelable.” Shared Payment Services will be backend only—screens to be provided by companies consuming the services, e.g., ecommerce checkout journeys or from the payment gateway itself.

This third-party payment services provider might change in the future.

Shared Payment Services store, manage, and publish payment and subscription info to other business systems (CRM, data warehouse, etc.).

We don’t want the customer to have to worry about the fact there is a third-party payment provider; that’s our internal decision.

Fail in favor of the customer.

How do we ensure we never have two active mandates in place at the same time for a single customer?

How do we ensure the customer always has a valid subscription mandate in place?

## Options Considered

## Advice
