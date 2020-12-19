import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import PageNotFound from "./page-not-found";
import {makeInitialStateMock} from "../../../utils";

describe(`PageNotFound component test`, () => {
  it(`Should render PageNotFound correctly`, () => {
    const store = configureStore()(makeInitialStateMock());
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <PageNotFound />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
