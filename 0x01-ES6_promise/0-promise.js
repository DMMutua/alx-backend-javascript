export default function getResponseFromAPI() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
		resolve("some data")
		}, 100);
	});
}
