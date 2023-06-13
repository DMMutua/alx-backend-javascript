/**
 * A Simple Web Server
 * @returns {str} of plain text
 */
const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello Holberton School!');
});

// Making Server Litsen on port 1245.
app.listen(port, hostname);
