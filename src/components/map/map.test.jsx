import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Map from "./map";
import {makeInitialStateMock, mockOffers, mockOffer, mockCity} from "../../utils";

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

const mockedMethodImpl = jest.fn().mockReturnValue([{
  _offerId: jest.fn(() => `1`),
  on: jest.fn(() => {}),
}]);

jest.mock(`./map`);

beforeAll(() => {
  jest.fn().mockImplementation(() => {
    return {
      markers: mockedMethodImpl
    };
  });
});

it(`Should Map render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());
  const tree = renderer
    .create(
        <Provider store={store}>
          <Map
            mapType={`main`}
            offers={mockOffers}
            currentOffer={mockOffer}
            activeCity={mockCity}
            activeOffer={mockOffer}
            markedOffer={mockOffer}
            setActiveOfferAction={()=>{}}
            setMarkedOfferAction={()=>{}}
          />
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
