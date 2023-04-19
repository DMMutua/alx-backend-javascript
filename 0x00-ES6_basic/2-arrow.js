/**
 * arrow function - anonymous function that uses `this` from around its lexical context.
 * @return {array} of neighborhoods.
 */
export default function getNeighborhoodsList() {
	this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

	this.addNeighborhood = (newNeighborhood) => {
		this.sanFranciscoNeighborhoods.push(newNeighborhood);
		return this.sanFranciscoNeighborhoods;
	};
}
