import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {PageMain} from "./page-main";
import {makeInitialStateMock, mockOffers, mockCity} from "../../../utils";

const mockedMethodImpl = jest.fn().mockReturnValue([{
  _offerId: jest.fn(() => `1`),
  on: jest.fn(() => {}),
}]);

jest.mock(`../../map/map`);

beforeAll(() => {
  jest.fn().mockImplementation(() => {
    return {
      markers: mockedMethodImpl
    };
  });
});

describe(`Should PageMain render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());

  it(`Should PageMain render correctly if offers is not empty`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <PageMain
                offers={mockOffers}
                activeCity={mockCity}
              />
            </BrowserRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Should PageMain render correctly if offers is empty`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <PageMain
                offers={[]}
                activeCity={mockCity}
              />
            </BrowserRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
