/*
 * Returns array of students for a specific city with new grade
 * @param {array} of student objects.
 * @param {string} City that student hail from
 * @param {array} newGrades for student
 * @return {array} of students for a specific city with their new grades
 */
export default function updateStudentGradeByCity (students, city, newGrades) {
	if (!Array.isArray(students)) {
		return [];
	}

	return students
	.filter(student => student.location === city)
	.map(student => {
		const gradeObj = newGrades.find(grade => grade.studentId === student.id);

		if (gradeObj) {
			return {...student, grade: gradeObj.grade};
		} else {
			return {...student, grade: 'N/A'};
		}
	});
}
