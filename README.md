## Running TailwindCSS in Restricted Environment Reproduction

This repository demonstrates an issue with running TailwindCSS in restricted environments where file system read access is not available.

## Setup

This reproduction uses Deno for simplicity.

1. Clone the repository.
2. Make sure you have Deno installed.
3. Run `npm start` or `deno run -A --unstable-worker-options main.js`(to simulate a restricted environment).
4. Deno is going to ask for permissions. You can dany all of them, and it still work, except for the `--read` permission required for performing `process.cwd()`, which breaks the application .

## Expected Behavior

TailwindCSS should process the in-memory HTML without requiring file system read access.

## Observed Behavior

The process fails due to a `fast-glob` dependency that unnecessarily attempts to access the file system.
