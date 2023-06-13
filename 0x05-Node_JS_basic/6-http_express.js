/**
 * A Minimal HTTP Server using Express
 * @returns {str} of type rawtext
 */
const express = require('express');

const app = express();
const port = 1245

app.get('/', (req, res) => {
	res.send('Hello Holberton School!');
});

// Listen to Port 1245...
app.listen(port);

// Exporting the app server
module.exports = app;
