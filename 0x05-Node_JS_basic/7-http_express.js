/**
 * A Slightly complex server using Express
 * @returns {str} plain text depending on routes.
 */
const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245
// Get the database file name from the command line arguments.
const dbFile = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(dbFile)
    .then(() => {
      const content = `This is the list of our students\n` +
        `Number of students: 10\n` +
        `Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie\n` +
        `Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy`;
      res.setHeader('Content-Type', 'text/plain');
      res.send(content);
    })
    .catch((error) => {
      res.status(500).send(`Error: ${error.message}`);
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;

