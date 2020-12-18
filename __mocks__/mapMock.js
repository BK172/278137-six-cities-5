const mockedMethodImpl = jest.fn().mockReturnValue([{
  _offerId: jest.fn(),
  on: jest.fn(),
}]);

jest.mock(`../src/components/map/map`);

beforeAll(() => {
  jest.fn().mockImplementation(() => {
    return {
      markers: mockedMethodImpl
    };
  });
});
