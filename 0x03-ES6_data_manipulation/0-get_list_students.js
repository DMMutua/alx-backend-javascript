/**
 * Returning an array of objects
 * @returns {array} an array with several objects
 */
export default function getListStudents () {
	const objOne = { id: 1, firstName: 'Guillaume', location: 'San Francisco' };
	const objTwo = { id: 2, firstName: 'James', location: 'Columbia'};
	const objThree = { id: 5, firstName: 'Serena', location: 'San Francisco'};

	const arrayOne = [
		objOne,
		objTwo,
		objThree
	];

	return arrayOne;
}
