import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import PageMainEmpty from "./page-main-empty";
import {makeInitialStateMock, mockCity} from "../../../utils";

describe(`PageMainEmpty component test`, () => {
  it(`Should render PageMainEmpty correctly`, () => {
  const store = configureStore()(makeInitialStateMock());
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <PageMainEmpty
                activeCity={mockCity}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
