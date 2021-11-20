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

## Members

<dl>
<dt><a href="#fxrand">fxrand</a></dt>
<dd><p>Basic usage for this library is to import the FXInit function and then any of the other functions you might need.
eg:</p>
<pre><code>import { FXInit, FXRandomBetween } from &#39;fx-helpers&#39;;

FXInit(fxhash); // Always init the helpers with the hash provided by the boilerplate.

const randomAngle = FXRandomBetween(-Math.PI, Math.PI);
</code></pre>
</dd>
</dl>

## Constants

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
<dd><p>Returns a random integer between two numbers.</p>
<pre><code>FXRandomBetween(-10, 10); // 2
</code></pre>
</dd>
<dt><a href="#FXRandomOption">FXRandomOption</a></dt>
<dd><p>Returns a random integer between two numbers.</p>
<pre><code>FXRandomOption([&quot;I&quot;, &quot;are&quot;, &quot;weasel&quot;]); // &quot;weasel&quot;
</code></pre>
</dd>
<dt><a href="#FXRandomBool">FXRandomBool</a></dt>
<dd><p>Returns a random boolean given a weight.</p>
<pre><code>FXRandomBool(.2); // false
</code></pre>
</dd>
<dt><a href="#FXRandVec2">FXRandVec2</a></dt>
<dd><p>Returns a vec2, expressed as an array, populated with random numbers </p>
<pre><code>FXRandVec2(); // [.1234, .57351]
</code></pre>
</dd>
<dt><a href="#FXRandVec3">FXRandVec3</a></dt>
<dd><p>Returns a vec3, expressed as an array, populated with random numbers </p>
<pre><code>FXRandVec3(); // [.1234, .57351, .01234]
</code></pre>
</dd>
<dt><a href="#FXRandVec4">FXRandVec4</a></dt>
<dd><p>Returns a vec4, expressed as an array, populated with random numbers </p>
<pre><code>FXRandVec4(); // [.1234, .57351, .01234, .9634]
</code></pre>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#check">check()</a></dt>
<dd><p>Checks for the existance of the FXHash PRNG and throws an error if it doesn&#39;t exist.</p>
</dd>
<dt><a href="#pick">pick(options)</a></dt>
<dd><p>Returns a weighted random option, given an array of options with weights.</p>
<pre><code>let color = getWeightedOption([
  [&quot;red&quot;, 10],
  [&quot;green&quot;, 30],
  [&quot;blue&quot;, 50],
]);
</code></pre>
<p>Curtesy Mark Knol, T: @mknol</p>
</dd>
</dl>

<a name="fxrand"></a>

## fxrand
Basic usage for this library is to import the FXInit function and then any of the other functions you might need.
eg:
```
import { FXInit, FXRandomBetween } from 'fx-helpers';

FXInit(fxhash); // Always init the helpers with the hash provided by the boilerplate.

const randomAngle = FXRandomBetween(-Math.PI, Math.PI);

```

**Kind**: global variable  
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
Returns a random integer between two numbers.
```
FXRandomBetween(-10, 10); // 2
```

**Kind**: global constant  

| Param | Description |
| --- | --- |
| min | The minimum value |
| max | The maximum value |

<a name="FXRandomOption"></a>

## FXRandomOption
Returns a random integer between two numbers.
```
FXRandomOption(["I", "are", "weasel"]); // "weasel"
```

**Kind**: global constant  

| Param | Description |
| --- | --- |
| options | An array of options to choose from |

<a name="FXRandomBool"></a>

## FXRandomBool
Returns a random boolean given a weight.
```
FXRandomBool(.2); // false
```

**Kind**: global constant  

| Param | Default | Description |
| --- | --- | --- |
| weight | <code>.5</code> | A weight to test the boolean against, if fxrand is less than this number, true is returned. Defaults to 0.5 |

<a name="FXRandVec2"></a>

## FXRandVec2
Returns a vec2, expressed as an array, populated with random numbers 
```
FXRandVec2(); // [.1234, .57351]
```

**Kind**: global constant  
<a name="FXRandVec3"></a>

## FXRandVec3
Returns a vec3, expressed as an array, populated with random numbers 
```
FXRandVec3(); // [.1234, .57351, .01234]
```

**Kind**: global constant  
<a name="FXRandVec4"></a>

## FXRandVec4
Returns a vec4, expressed as an array, populated with random numbers 
```
FXRandVec4(); // [.1234, .57351, .01234, .9634]
```

**Kind**: global constant  
<a name="check"></a>

## check()
Checks for the existance of the FXHash PRNG and throws an error if it doesn't exist.

**Kind**: global function  
<a name="pick"></a>

## pick(options)
Returns a weighted random option, given an array of options with weights.
```
let color = getWeightedOption([
  ["red", 10],
  ["green", 30],
  ["blue", 50],
]);
```
Curtesy Mark Knol, T: @mknol

**Kind**: global function  

| Param | Description |
| --- | --- |
| options | options in the format of [ [ string: optionName, int: optionNumber ] ] |

