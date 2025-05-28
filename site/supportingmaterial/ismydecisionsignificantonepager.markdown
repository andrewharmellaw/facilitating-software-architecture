---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
redirect_from: /is-my-decision-significant-one-pager/
---
# "Is My Decision Architecturally Significant?" One-Pager
Over and over I end up creating a page that helps folks figure out if they are about to make an architecturally significant decision (and hence, write an ADR). The following is content I've evolved over the years that you can cut and paste.

# One-Pager - Use this as Inspiration
It is vitally important to document architecturally significant decisions, but when is your decision significant enough to start an Architectural Decision Record (ADR)? 

This page lists the criteria that indiate if your decision is architecurally significant (and must be captured as an ADR).

## What makes a Decision Architecturally Significant?
If a decision meets _one or more_ of the following critertia, it is architecturally significant and therefore must be recorded as an ADR.

Significant "Architectural" decisions are decisions that affect one or more of the following five criteria: 
* **structure**: the arrangement of the parts of a software system, what each part does, and how those parts interact (or not)
* **non-functional characteristics**: the ways that the overall system must operate, and qualities it must embody, 
* **dependencies**: the systems and services that you rely on to offer your service that you do not control,
* **interfaces**: the services you offer to others,
* **construction techniques**: the ways you deliver, run, and evolve your systems.

These criteria are covered in more detail in the following sections.

Note: A decison is significant if it meets one or more of the criteria, irrespective if the decision is in a new area, or if it re-visits a previous decision. Revisits can arise because of changing circumstances or because a certain period of time has passed and a previous decision requires reconsideration. Remember, it is always fine to decide "we'll just leave it as is, for now". This deciding not to do anything is good practice. These should also be documented.

### Structurally Significant Decisions
A decision is significant if it relates to either:
* the placement of function (where some logic or responsibility for something is located)
* OR the decision to start (or stop) using a new design pattern or a higher-level architectural pattern

For simplicity's sake, "design pattern" here means the widely known and reusable solutions for commonly observed problems in software structure in the following books: 
* Design Patterns by Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides (O’Reilly) ([Pattern list](https://en.wikipedia.org/wiki/Design_Patterns#Patterns_by_type))
* Further works built on this, namely the Pattern-Oriented Software Architecture series (Wiley) ([Pattern list](https://en.wikipedia.org/wiki/Pattern-Oriented_Software_Architecture))
* Martin Fowler’s Patterns of Enterprise Application Architecture (Pearson Education) ([Pattern list](https://martinfowler.com/eaaCatalog/))
* Eric Evans’s Domain-Driven Design: Tackling the Complexity at the Heart of Software (Addison-Wesley) ([Pattern catalogue](https://www.domainlanguage.com/wp-content/uploads/2016/05/DDD_Reference_2015-03.pdf) in the DDD Reference)
* Gregor Hohpe and Bobby Woolf’s Enterprise Integration Patterns (Addison-Wesley) ([Pattern list](https://www.enterpriseintegrationpatterns.com/patterns/messaging/toc.html))
* Bill Wilder’s Cloud Architecture Patterns (O’Reilly) (Pattern list not available)

If additional pattern catalogues need to be added to this list, please comment here so everyone can see them.

### Non-Functionally Significant Decisions
An architectural decision is significant if it alters our ability to meet one or more Non-Functional Requirements.

### Dependency-Significant Decisions
A decision is significant if there will be either:
* a completely new dependency,
* OR (for an existing dependency) you upgrade by a major version with the same vendor,
* OR there is a complete vendor change (even if they are offering the same dependency)

### Interface-Significant Decisions
A decision is significant if you offer:
* a new API on your interface, 
* OR you make any change in your API that would constitute a major version upgrade for your consumers

### Construction Technique-Significant Decisions
A decision is significant if you bring:
* a new construction technique to a production environment (such as canary releases or blue-green deployments) or as a step in the pipeline(s)
* OR to a production-like environnent (one that others rely on to get their work done efficiently)
