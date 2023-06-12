/**
 * Function to Read a csv database.
 * Returns the number of students.
 */
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    const students = lines.filter(line => line.trim() !== '' && !line.startsWith('firstname')); // Filter out empty lines and header
    const studentCount = students.length;
    console.log(`Number of students: ${studentCount}`);

    const fields = {};
    students.forEach(student => {
      const [firstname, lastname, age, field] = student.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    Object.entries(fields).forEach(([field, students]) => {
      const studentCountInField = students.length;
      const studentList = students.join(', ');
      console.log(`Number of students in ${field}: ${studentCountInField}. List: ${studentList}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
