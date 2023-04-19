/**
 * Using `let` and `const` for block scopping
 * @returns {array} of output for task and task2
 */
export default function taskBlock(trueOrFalse) {
	let task = false;
	const task2 = true;

	if (trueOrFalse) {
		task = false;
		// const var task2 cannot be re-assigned
	}


	return [task, task2];
}
