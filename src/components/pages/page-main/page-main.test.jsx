import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import PageMain from "./page-main";
import {makeInitialStateMock, mockOffers, mockCity} from "../../../utils";

describe(`PageMain  component test`, () => {
  const store = configureStore()(makeInitialStateMock());
  it(`Should render PageMain correctly if offers is not empty`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <PageMain
                offers={mockOffers}
                activeCity={mockCity}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Should render PageMain correctly if offers is empty`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <PageMain
                offers={[]}
                activeCity={mockCity}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
