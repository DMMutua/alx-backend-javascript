/**
 * Handles the response from an API Promise.
 * @param {Promise} promise - The Promise to handle.
 * @returns {Promise} - A Promise that resolves with an object containing status and body attributes if the input Promise resolves, or rejects with an empty Error object if the input Promise rejects.
 */
export default function handleResponseFromAPI(promise) {
  return promise.then((response) => {
    console.log('Got a response from the API');
    return { status: 200, body: 'success' };
  })
  .catch((error) => {
    console.log('Got a response from the API');
    return new Error();
  })
  .finally(() => {
    console.log('Got a response from the API');
  });
}

