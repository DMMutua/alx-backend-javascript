/**
 * Runs a Program that prompts a CMD User to input their name
 * @returns {str} that prompts user interactively
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.once('data', (data) => {
	const name = data.toString().trim();
	process.stdout.write(`Your name is: ${name}\n`);

	process.stdin.destroy();
});

process.on('SIGINT', () => {
	process.stdout.write('\nThis important software is now closing\n');
	process.exit();
});
