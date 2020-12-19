import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import App from "./app";
import {makeInitialStateMock} from "../../utils";

describe(`App component test`, () => {
  it(`Should render App correctly`, () => {
    const store = configureStore()(makeInitialStateMock());
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <App />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
