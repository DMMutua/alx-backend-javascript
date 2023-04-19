/*
 * function that returns number of arguments passed in a rest parameter syntax
 * @return {int} of the number of arg count
 */

export default function returnHowManyArguments(...args) {
	return args.length;
}
