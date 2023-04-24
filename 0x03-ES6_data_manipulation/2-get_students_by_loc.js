/*
 * Filtering array of Objects
 * @param {array} of objects representing students
 * @param {string} that represents filter condition
 * @retyrb {array} shallow copy of filtered original array
 */
export default function getStudentsByLocation (students, city) {
	if (!Array.isArray(students)) {
		return [];
	}

	return students.filter(function (student) {
		if (student.location === city) {
			return true;
		} else {
			return false;
		}
	});
}
