# SPIKE-001 - Can we have shorter, human-readable inventory ID ids?

# Timebox:
One developer pair for three days.

# Context:
Our current inventory IDs across the company for buildings, spaces, and providers are generated from UUIDs. Sometimes, humans have to read, share, or even manually enter these IDs, and it’s painful due to their length and characters.

We want to investigate whether it’s feasible to move to shorter, human-readable inventory IDs.

# Options Considered
Random generated letters and numbers (some tool or library?)

Automatically generated sequence ID? (e.g., 1234, 1235, 1236, etc.)
