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
import { FXInit, FXRandomBetween } from "@liamegan1/fxhash-helpers"

// Make sure you call FXInit before using any of the helpers!
FXInit( fxrand );

// Good to go!
const randomAngle = FXRandomBetween(-Math.PI, Math.PI);

```

[Click here](https://codesandbox.io/s/peaceful-clarke-vu99h?file=/src/index.js) for a codesandbox demonstrating how this all works.

## Details## Constants

<dl>
<dt><a href="#FXInit">FXInit</a></dt>
<dd><p>Initialises the library with a PRNG function. Most functions expect the PRNG to return 0-1 exclusive.</p>
</dd>
<dt><a href="#FXRandomBetween">FXRandomBetween</a></dt>
<dd><p>Returns a random float between two numbers.</p>
<pre><code>FXRandomBetween(-10, 10); // -1.234576
</code></pre>
</dd>
<dt><a href="#FXRandomIntBetween">FXRandomIntBetween</a></dt>
<dd><p>Returns a random integer between two numbers - min, and max exclusive of max.
If you want it to be inclusive of max, set the upper number to a floating point number like 10.99</p>
<pre><code>FXRandomIntBetween(-10, 10); // 2
</code></pre>
</dd>
<dt><a href="#FXRandomOption">FXRandomOption</a></dt>
<dd><p>Returns a random option from a provided list of options.</p>
<pre><code>FXRandomOption([&quot;I&quot;, &quot;are&quot;, &quot;weasel&quot;]); // &quot;weasel&quot;
</code></pre>
</dd>
<dt><a href="#FXRandomBool">FXRandomBool</a></dt>
<dd><p>Returns a random boolean given a weight (optional).</p>
<pre><code>FXRandomBool(.2); // false
</code></pre>
</dd>
<dt><a href="#FXRandVec2">FXRandVec2</a></dt>
<dd><p>Returns a 2-dimensional vector, expressed as an array, populated with random numbers </p>
<pre><code>FXRandVec2(); // [.1234, .57351]
</code></pre>
</dd>
<dt><a href="#FXRandVec3">FXRandVec3</a></dt>
<dd><p>Returns a 3-dimensional vector, expressed as an array, populated with random numbers </p>
<pre><code>FXRandVec3(); // [.1234, .57351, .01234]
</code></pre>
</dd>
<dt><a href="#FXRandVec4">FXRandVec4</a></dt>
<dd><p>Returns a 4-dimensional vector, expressed as an array, populated with random numbers </p>
<pre><code>FXRandVec4(); // [.1234, .57351, .01234, .9634]
</code></pre>
</dd>
<dt><a href="#FXGetWeightedOption">FXGetWeightedOption</a></dt>
<dd><p>Returns a weighted random option, given an array of options with weights.</p>
<pre><code>let color = getWeightedOption([
  [&quot;red&quot;, 10],
  [&quot;green&quot;, 30],
  [&quot;blue&quot;, 50],
]);
</code></pre>
<p>Curtesy Mark Knol, T: @mknol</p>
</dd>
<dt><a href="#FXRandomGaussian">FXRandomGaussian</a></dt>
<dd><p>Returns a gaussian distributed random number. Bear in mind that calling <code>FXRandomGaussian(5)</code> will result in 5 calls to fxrand();</p>
<pre><code>let gr = FXRandomGaussian(5);
</code></pre>
</dd>
<dt><a href="#FXRandomReset">FXRandomReset</a></dt>
<dd><p>Resets the fxhash prng either to a new, random hash, or to a supplied hash.
Use this if you want to reset the prng to its original state by calling:</p>
<pre><code>FXRandomReset(fxhash);
</code></pre>
<p>or to a new, random hash simply by calling </p>
<pre><code>FXRandomReset();
</code></pre>
<p>Note that resetting to a random hash uses the existing fxhash prng, which means that random hashes are also deterministic.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#check">check()</a></dt>
<dd><p>Checks for the existance of the FXHash PRNG and throws an error if it doesn&#39;t exist.</p>
</dd>
</dl>

<a name="FXInit"></a>

## FXInit
Initialises the library with a PRNG function. Most functions expect the PRNG to return 0-1 exclusive.

**Kind**: global constant  

| Param | Description |
| --- | --- |
| prng | The PRNG function to use for subsequent calls |

<a name="FXRandomBetween"></a>

## FXRandomBetween
Returns a random float between two numbers.
```
FXRandomBetween(-10, 10); // -1.234576
```

**Kind**: global constant  

| Param | Description |
| --- | --- |
| min | The minimum value |
| max | The maximum value |

<a name="FXRandomIntBetween"></a>

## FXRandomIntBetween
Returns a random integer between two numbers - min, and max exclusive of max.
If you want it to be inclusive of max, set the upper number to a floating point number like 10.99
```
FXRandomIntBetween(-10, 10); // 2
```

**Kind**: global constant  

| Param | Description |
| --- | --- |
| min | The minimum value |
| max | The maximum value |

<a name="FXRandomOption"></a>

## FXRandomOption
Returns a random option from a provided list of options.
```
FXRandomOption(["I", "are", "weasel"]); // "weasel"
```

**Kind**: global constant  

| Param | Description |
| --- | --- |
| options | An array of options to choose from |

<a name="FXRandomBool"></a>

## FXRandomBool
Returns a random boolean given a weight (optional).
```
FXRandomBool(.2); // false
```

**Kind**: global constant  

| Param | Default | Description |
| --- | --- | --- |
| weight | <code>.5</code> | A weight to test the boolean against, if fxrand is less than this number, true is returned. Defaults to 0.5 |

<a name="FXRandVec2"></a>

## FXRandVec2
Returns a 2-dimensional vector, expressed as an array, populated with random numbers 
```
FXRandVec2(); // [.1234, .57351]
```

**Kind**: global constant  
<a name="FXRandVec3"></a>

## FXRandVec3
Returns a 3-dimensional vector, expressed as an array, populated with random numbers 
```
FXRandVec3(); // [.1234, .57351, .01234]
```

**Kind**: global constant  
<a name="FXRandVec4"></a>

## FXRandVec4
Returns a 4-dimensional vector, expressed as an array, populated with random numbers 
```
FXRandVec4(); // [.1234, .57351, .01234, .9634]
```

**Kind**: global constant  
<a name="FXGetWeightedOption"></a>

## FXGetWeightedOption
Returns a weighted random option, given an array of options with weights.
```
let color = getWeightedOption([
  ["red", 10],
  ["green", 30],
  ["blue", 50],
]);
```
Curtesy Mark Knol, T: @mknol

**Kind**: global constant  

| Param | Description |
| --- | --- |
| options | options in the format of [ [ string: optionName, int: optionNumber ] ] |

<a name="FXRandomGaussian"></a>

## FXRandomGaussian
Returns a gaussian distributed random number. Bear in mind that calling `FXRandomGaussian(5)` will result in 5 calls to fxrand();
```
let gr = FXRandomGaussian(5);
```

**Kind**: global constant  

| Param | Description |
| --- | --- |
| samples | The number of samples to use in the distribution. A higher sample number will result in a tighter bell-curve |

<a name="FXRandomReset"></a>

## FXRandomReset
Resets the fxhash prng either to a new, random hash, or to a supplied hash.
Use this if you want to reset the prng to its original state by calling:
```
FXRandomReset(fxhash);
```
or to a new, random hash simply by calling 
```
FXRandomReset();
```
Note that resetting to a random hash uses the existing fxhash prng, which means that random hashes are also deterministic.

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| newhash | <code>string</code> | [undefined] - A string value of the new hash to use. Mostly this parameter is used to reset the hash to the original. |

<a name="check"></a>

## check()
Checks for the existance of the FXHash PRNG and throws an error if it doesn't exist.

**Kind**: global function  
