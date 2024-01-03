import getResponseFromAPI from '../0-promise';

jest.useFakeTimers();

describe('getResponseFromAPI', () => {
  it('should resolve with correct data after 1 second', async () => {
    expect.assertions(1);

    const promise = getResponseFromAPI();

    jest.advanceTimersByTime(1000);

    await expect(promise).toStrictEqual({
      status: 200,
      data: 'Some data from API',
    });
  });
});
