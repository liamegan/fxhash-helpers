/**
 * @ignore
 */
let fxr;

/**
 * Initialises the library with a PRNG function. Most functions expect the PRNG to return 0-1 exclusive.
 * @param prng - The PRNG function to use for subsequent calls
 */
export const FXInit = function(prng) {
  if(typeof prng === 'function') fxr = prng;
}

/**
 * Checks for the existance of the FXHash PRNG and throws an error if it doesn't exist.
 */
const check = function() {
  if (typeof fxr !== "function")
    throw new Error("fxhash has not been defined, did you call FXInit?");
}

/**
 * Returns a random float between two numbers.
 * ```
 * FXRandomBetween(-10, 10); // -1.234576
 * ```
 * @param min - The minimum value
 * @param max - The maximum value
 */
export const FXRandomBetween = (min, max) => {
  check();
  return min + (max - min) * fxr();
};

/**
 * Returns a random integer between two numbers - min, and max exclusive of max.
 * If you want it to be inclusive of max, set the upper number to a floating point number like 10.99
 * ```
 * FXRandomIntBetween(-10, 10); // 2
 * ```
 * @param min - The minimum value
 * @param max - The maximum value
 */
export const FXRandomIntBetween = (min, max) => {
  check();
  return Math.floor(FXRandomBetween(min, max));
};


/**
 * Returns a random option from a provided list of options.
 * ```
 * FXRandomOption(["I", "are", "weasel"]); // "weasel"
 * ```
 * @param options - An array of options to choose from
 */
export const FXRandomOption = function (options) {
  check();
  return options[Math.floor(fxr() * options.length)];
};


/**
 * Returns a random boolean given a weight (optional).
 * ```
 * FXRandomBool(.2); // false
 * ```
 * @param weight=.5 - A weight to test the boolean against, if fxrand is less than this number, true is returned. Defaults to 0.5
 */
export const FXRandomBool = function(weight) {
  check();
  if (isNaN(weight)) weight = .5;
  return fxr() < weight;
};

/**
 * Returns a 2-dimensional vector, expressed as an array, populated with random numbers 
 * ```
 * FXRandVec2(); // [.1234, .57351]
 * ```
 */
export const FXRandVec2 = () => {
  check();
  return [fxr(), fxr()];
};
/**
 * Returns a 3-dimensional vector, expressed as an array, populated with random numbers 
 * ```
 * FXRandVec3(); // [.1234, .57351, .01234]
 * ```
 */
export const FXRandVec3 = () => {
  check();
  return [fxr(), fxr(), fxr()];
};
/**
 * Returns a 4-dimensional vector, expressed as an array, populated with random numbers 
 * ```
 * FXRandVec4(); // [.1234, .57351, .01234, .9634]
 * ```
 */
export const FXRandVec4 = () => {
  check();
  return [fxr(), fxr(), fxr(), fxr()];
};

const pick = (arr) => arr[(fxr() * arr.length) | 0];
/**
 * Returns a weighted random option, given an array of options with weights.
 * ```
 * let color = getWeightedOption([
 *   ["red", 10],
 *   ["green", 30],
 *   ["blue", 50],
 * ]);
 * ```
 * Curtesy Mark Knol, T: @mknol
 * @param options - options in the format of [ [ string: optionName, int: optionNumber ] ]
 */
export const FXGetWeightedOption = (options) => {
  return getWeightedOption(options);
}
export const getWeightedOption = function (options) {
  check();
  let choices = [];
  for (let i in options)
    choices = choices.concat(new Array(options[i][1]).fill(options[i][0]));
  return pick(choices);
};

/**
 * Returns a gaussian distributed random number. Bear in mind that calling `FXRandomGaussian(5)` will result in 5 calls to fxrand();
 * ```
 * let gr = FXRandomGaussian(5);
 * ```
 * @param samples - The number of samples to use in the distribution. A higher sample number will result in a tighter bell-curve
 */
export const FXRandomGaussian = (samples) => { 
  check()
  if(samples < 1 || isNaN(samples)) throw new Error('Samples should be a number greater than zero');
  var rn = 0;
  for (let i = 0; i < samples; i++) {
    rn += fxr()
  }
  return rn / samples
}

/**
 * Resets the fxhash prng either to a new, random hash, or to a supplied hash.
 * Use this if you want to reset the prng to its original state by calling:
 * ```
 * FXRandomReset(fxhash);
 * ```
 * or to a new, random hash simply by calling 
 * ```
 * FXRandomReset();
 * ```
 * Note that resetting to a random hash uses the existing fxhash prng, which means that random hashes are also deterministic.
 *
 * @param newhash {string} [undefined] - A string value of the new hash to use. Mostly this parameter is used to reset the hash to the original.
 */
export const FXRandomReset = (newhash) => {
  check()
  // If a new hash is supplied, use that, otherwise generate a new one.
  fxhash = newhash ? newhash : "oo" + Array(49).fill(0).map(_=>alphabet[(fxr()*alphabet.length)|0]).join('');
  fxhashTrunc = fxhash.slice(2);
  regex = new RegExp(".{" + ((fxhashTrunc.length/4)|0) + "}", 'g');
  hashes = fxhashTrunc.match(regex).map(h => b58dec(h));
  fxrand = sfc32(...hashes);
  // Initialise the library with this reset
  FXInit(fxrand);
}