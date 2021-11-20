# FX-Hash Helpers

## Installation

Install the package using NPM:
```
npm install @liamegan1/fxhash-helpers
```
## Quick-start

To get started with the library:
- Import what you need as well as the FXInit function;
- Initialise the library by passing the fxhash function to FXInit;
- Use your helpers!

```
// import
import { FXInit, FXRandomBetween } from @liamegan1/fxhash-helpers

// Make sure you call FXInit before using any of the helpers!
FXInit( fxhash );

// Good to go!
const randomAngle = FXRandomBetween(-Math.PI, Math.PI);

```

## Details