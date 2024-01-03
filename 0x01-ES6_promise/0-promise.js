export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const responseData = { status: 200, data: 'Some data from API' };
      resolve(responseData);
    }, 1000);
  });
}
