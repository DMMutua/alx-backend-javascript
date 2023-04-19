/**
 * Uses `const` and `let` to prevent variable overwritting inside blocks.
 * @returns {array} of booleans of task and task2 output.
 */
export default function taskBlock(trueOrFalse) {
	const task = false;
	let task2 = true;

	if (trueOrFalse) {
		const task = true;
		task2 = false;
	}

	return [task, task2];`
}
