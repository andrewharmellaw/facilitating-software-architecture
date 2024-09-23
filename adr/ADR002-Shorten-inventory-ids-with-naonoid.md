# ADR002 — Shorten Inventory IDs with Nanoid

* Status: Accepted
* Date: 2020-03-25
* Author: Wisen Tanasa

## Decision
We will create shorter inventory IDs with random generated letters and numbers (option 1). This will involve Nanoid with the following configuration:
 * Building ID:
   * ID Length: 6
   * Characters: 23456789ABCDEFGHJKMNPQRSTUVWXYZ
 * Space ID:
   * ID Length: 8
   * Characters: 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
 * Provider ID:
   * ID Length: 5
   * Characters: 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
  
## Context
Our inventory IDs are currently generated. For example, our Building IDs look like:

    22cadcb6-00e5-4baa-a701-785854fc2a9e. 

As we scale our inventory, the length of these ID strings will increase. They are already too long. We would like our IDs shorter so the seekers' UX is better:

 * They can type the ID into the browser if they are printing the building page.
 * They can share the URL easily without a URL shortener.

These are the decision criteria:
 * Short
 * Low collision probability (see: https://zelark.github.io/nano-id-cc/)
 * Unambiguity - 0 (zero) and O (capital o) must not be confused
 * Cost of implementation

## Options
 1. (SELECTED) A4VHAOFG: Random generated letters and numbers with Nanoid
 1. 123456: Automatically generated sequence ID
 1. Canvas: Manually generated ID
 1. BBBB2221: Pretty generated letters and numbers
 1. Canvas-A4VH: Combination of building name and generated ID

## Consequences
### Option 1: (SELECTED) Random generated letters and numbers with Nnanoid
 * Selected because we don't have to provision any infrastructure, as the ID can be generated with the Nanoid library
 * Selected because we can use it in our serverless architecture
 * Selected because the chance of an ID collision is low. - Even if we generate one1 building ID per hour, we have only a 0.001% probability of a collision. This is acceptable, and we don't think that we'll have one1 building ID per hour.
 * Selected despite the fact that we may produce profanity words, but the likelihood of this seems incredibly low, and IDids will clearly have been randomly generated to external consumers.

### Option 2: Automatically generated sequence ID
 * Rejected because it will be too costly to implement. It requires new infrastructure to be provisioned as we're adopting serverless architecture.

### Option 3: Manually generated ID
 * Rejected because it requires too much human intervention.
 * Rejected despite this being able to guarantee both no collisions and no profanity words.

### Option 4: Pretty generated letters and numbers
 * Rejected because we couldn’t find a free and appropriately -licensced open -source library thatwhich supported this.

### Option 5:  Combination of building name and generated ID
 * Rejected because we can prepend a slug if we’re concerned about the URL.

## Advice
* Have we thought about the possibility of auto-generated profanity in the auto-generated text? It could be bad for our reputation if this happened. _(Monira R., Product Manager, 25 Aug, 2024)_
* What’s the possibility of ID collisions with each option? Have we looked at generating them in a database? It’s a good way to offload the responsibility of making sure IDs are unique. _(Hanna A., Infra team, 24 Aug, 2024)_
* Does making it human-meaningful matter, or just human-readable? _(Rebecca F., UX, 25 Aug, 2024)_
* Can we list out all the places where we’ll need to use this ID? _(Izzy H., Tech Lead from another team: Site Search, 28 Aug, 2024)_
* Will the IDs be exposed publicly? We must think about leakage of internal data models and generation modes as it might broaden our attack surface. _(Pete H., Infosec, 25 Aug, 2024)_
* What are the licensing concerns with the various options? Will any of them cost us more money as we scale? If they’re open source, what license are they under and are they actively maintained? I ask because I once got bitten by this at a previous company. We have a [CFR (linked)]() that states which licenses are allowed. _(Alina B., Architect, 24 Aug, 2024)_
