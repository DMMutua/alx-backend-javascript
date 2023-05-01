/**
 * Handles a response from an API Promise by adding resolution and rejection handlers
 * @param {Promise} promise - The Promise to handle
 * @returns {Object} - An object with status and body attributes on resolution, or an empty Error object on rejection
 */

export default function handleResponseFromAPI(promise) {
  promise
    .then(result => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch(error => {
      console.error(error);
      return new Error();
    });
}

