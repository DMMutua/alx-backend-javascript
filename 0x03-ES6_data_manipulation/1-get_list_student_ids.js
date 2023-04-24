/*
 * Returning an array of ids from a list of objects
 * @param {array} an array of objects
 * @returns {array} of ids from objects list
 */
export default function getListStudentsIds(students) {
	if (!Array.isArray(students)) {
		return [];
	}

	return students.map(student => student.id);
}
