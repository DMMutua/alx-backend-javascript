export default function appendToEachArrayValue(array, appendString) {

	const my_array = [];

	for (const value of array) {
		my_array.push(appendString + value);
	}

	return my_array;
}
