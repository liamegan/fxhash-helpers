/**
 * Basic usage for this library is to import the FXInit function and then any of the other functions you might need.
 * eg:
 * ```
 * import { FXInit, FXRandomBetween } from 'fx-helpers';
 * 
 * FXInit(fxhash); // Always init the helpers with the hash provided by the boilerplate.
 * 
 * const randomAngle = FXRandomBetween(-Math.PI, Math.PI);
 * 
 * ```
 */


let fxrand;

/**
 * Initialises the library with a PRNG function. Most functions expect the PRNG to return 0-1 exclusive.
 * @param prng - The PRNG function to use for subsequent calls
 */
export const FXInit = function(prng) {
  if(typeof(prng) === 'function') fxrand = prng;
}

/**
 * Checks for the existance of the FXHash PRNG and throws an error if it doesn't exist.
 */
const check = function() {
  if (typeof fxrand !== "function")
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
  return min + (max - min) * fxrand();
};

/**
 * Returns a random integer between two numbers.
 * ```
 * FXRandomBetween(-10, 10); // 2
 * ```
 * @param min - The minimum value
 * @param max - The maximum value
 */
export const FXRandomIntBetween = (min, max) => {
  check();
  return Math.floor(FXRandomBetween(min, max));
};

/**
 * Returns a vec2, expressed as an array, populated with random numbers 
 * ```
 * FXRandVec2(); // [.1234, .57351]
 * ```
 */
export const FXRandVec2 = () => {
  check();
  return [fxrand(), fxrand()];
};
/**
 * Returns a vec3, expressed as an array, populated with random numbers 
 * ```
 * FXRandVec3(); // [.1234, .57351, .01234]
 * ```
 */
export const FXRandVec3 = () => {
  check();
  return [fxrand(), fxrand(), fxrand()];
};
/**
 * Returns a vec4, expressed as an array, populated with random numbers 
 * ```
 * FXRandVec4(); // [.1234, .57351, .01234, .9634]
 * ```
 */
export const FXRandVec4 = () => {
  check();
  return [fxrand(), fxrand(), fxrand(), fxrand()];
};

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
const pick = (arr) => arr[(fxrand() * arr.length) | 0];
export const getWeightedOption = function (options) {
  check();
  let choices = [];
  for (let i in options)
    choices = choices.concat(new Array(options[i][1]).fill(options[i][0]));
  return pick(choices);
};