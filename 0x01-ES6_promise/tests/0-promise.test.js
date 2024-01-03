import getResponseFromAPI from '../0-promise';

jest.useFakeTimers();

describe('getResponseFromAPI', () => {
  it('should resolve with correct data after 1 second', async () => {
    const promise = getResponseFromAPI();

    jest.advanceTimersByTime(1000);

    // Await the promise before using expect
    await expect(promise).resolves.toStrictEqual({
      status: 200,
      data: 'Some data from API',
    });
  });
});
