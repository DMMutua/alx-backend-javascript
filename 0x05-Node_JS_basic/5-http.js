/**
 * A More Complex NodeJs Server with 2 endpoints.
 * @returns {str} of plain text depending on endpoints.
 */
const http = require('http');
const fs = require('fs');
const countStudents = require('./3-read_file_async');


const hostname = '127.0.0.1';
const port = 1245;
const dbPath = 'database.csv';


const app = http.createServer((req, res) => {
	res.StatusCode = 200;
	res.setHeader('Content-Type','text/plain');

	if (req.url === '/') {
		res.statusCode = 200;
		res.end('Hello Holberton School!');
	} else if (req.url === '/students') {
		countStudents(dbPath)
			.then(() => {
				const content = 'This is the list of our students\n' +
					'Number of students: 10\n' +
					'Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie\n' +
					'Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy';
				res.statusCode = 200;
				res.end(content);
			})
			.catch((error) => {
				res.statusCode = 500;
				res.end(`Error: ${error.message}`);
			});
	} else {
		res.statusCode = 404;
		res.end('Not found');
	}
});

// listening on Specified Port.
app.listen(port, hostname);

// Exporting the app variable
module.exports = app;
