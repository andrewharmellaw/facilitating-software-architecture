# SPIKE-001 - Can we have shorter, human-readable inventory ID ids?

# Timebox:
One developer pair for three days.

# Context:
Our current inventory IDs across the company for buildings, spaces, and providers are generated from UUIDs. Sometimes, humans have to read, share, or even manually enter these IDs, and it’s painful due to their length and characters.

We want to investigate whether it’s feasible to move to shorter, human-readable inventory IDs.

# Options Considered:
Random generated letters and numbers with [Nanoid](https://github.com/ai/nanoid) or [UUID 4](https://www.uuidgenerator.net/version4)

Automatically generated sequence ID (e.g., 1234, 1235, 1236, etc.) from code or from a data store

Manually generated

Human-readable generated 

# Consequences:

Nanoid: JavaScript JS-native, no new infra needed, works with serverless, lower chance of ID collision than UUID. ([Link to code example]()).

UUIDU: same benefits as Nanoid, but higher chance of UUID collision . ([Link to code example]()).

Auto-generated sequence ID in code: Impossible to ensure uniqueness in a serverless environment without adding extra infrastructure.

Auto-generated sequence ID from data store: We don’t currently have data stores that would support this.

Manually-generated: Too much manual intervention. ([Link to quick sums showing how often this would happen]).

Human-readable generated: No library found. Too much effort to build ourselves.

