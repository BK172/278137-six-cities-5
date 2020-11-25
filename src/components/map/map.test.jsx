import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {makeInitialStateMock, mockOffers, mockOffer, mockCity} from "../../utils";
import {Map} from "./map";

jest.mock(`leaflet`, () => ({
  icon: jest.fn(),
  map: jest.fn().mockReturnValue({
    setView: jest.fn(),
    remove: jest.fn()
  }),
  tileLayer: jest.fn().mockReturnValue({
    addTo: jest.fn()
  }),
  marker: jest.fn().mockReturnValue({
    addTo: jest.fn()
  }),
}));

it(`Should Map render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());
  const tree = renderer
    .create(
        <Provider store={store}>
          <Map
            mapType={`main`}
            offers={mockOffers}
            activeCity={mockCity}
            activeOffer={mockOffer}
          />
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
