/*
 * Calculates the sum of student ids in array of objects
 * @param {array} of student objects
 * @return {int} of the sum of all student id properties
 */
export default function getStudentIdsSum(students) {
	if (!Array.isArray(students)) {
		return 0;
	}

	let sum = students.reduce(function (total, student) {
		return total + student.id;
	}, 0);

	return sum;
}
