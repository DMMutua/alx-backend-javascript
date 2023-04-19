/*
 * Function demonstrating spread syntax and spread operator concatenation
 * @return {array} of concatenated two arrays and strings
 */

export default function concatArrays(array1, array2, string) {
	return [...array1, ...array2, ...string];
}
