const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Read the database file asynchronously
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        // If there's an error, reject the promise with the appropriate message
        reject(new Error('Cannot load the database'));
      } else {
        // Split the data into lines
        const lines = data.split('\n');

        // Filter out empty lines and header
        const students = lines.filter(line => line.trim() !== '' && !line.startsWith('firstname'));

        // Count the number of students
        const studentCount = students.length;
        console.log(`Number of students: ${studentCount}`);

        // Object to store the count of students in each field
        const fields = {};

        // Iterate over each student
        students.forEach(student => {
          // Split the student data into individual fields
          const [firstname, lastname, age, field] = student.split(',');

          // If the field doesn't exist in the fields object, initialize an empty array
          if (!fields[field]) {
            fields[field] = [];
          }

          // Push the first name of the student into the corresponding field array
          fields[field].push(firstname);
        });

        // Iterate over each field and log the count and list of students
        Object.entries(fields).forEach(([field, students]) => {
          const studentCountInField = students.length;
          const studentList = students.join(', ');
          console.log(`Number of students in ${field}: ${studentCountInField}. List: ${studentList}`);
        });

        // Resolve the promise
        resolve();
      }
    });
  });
}

module.exports = countStudents;

