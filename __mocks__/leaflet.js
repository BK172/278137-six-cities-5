jest.mock(`leaflet`, () => ({
  icon: jest.fn(),
  map: jest.fn().mockReturnValue({
    flyTo: jest.fn(),
    remove: jest.fn(),
    on: jest.fn(() => {}),
  }),
  tileLayer: jest.fn().mockReturnValue({
    addTo: jest.fn(),
  }),
  marker: jest.fn().mockReturnValue({
    _offerId: jest.fn(() => `1`),
    addTo: jest.fn(),
    removeFrom: jest.fn(),
    on: jest.fn(() => {}),
  }),
}));
