function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch(() => {
      console.error('Got an error from the API');
      return new Error(); // Empty Error object
    });
}

export default handleResponseFromAPI;
