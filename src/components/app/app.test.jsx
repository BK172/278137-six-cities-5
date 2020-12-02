import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import App from "./app";
import {makeInitialStateMock} from "../../utils";

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

jest.mock(`../map/map`);

beforeAll(() => {
  jest.fn().mockImplementation(() => {
    return {
      markers: mockedMethodImpl
    };
  });
});

it(`Should App render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
