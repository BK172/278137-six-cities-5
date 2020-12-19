import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import Header from "./header";
import {makeInitialStateMock, mockAuthInfo} from "../../utils";

describe(`Header component test`, () => {
  const store = configureStore()(makeInitialStateMock());

  it(`Should render Header correctly if NO_AUTH`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <Header
                authStatus={`NO_AUTH`}
                authInfo={mockAuthInfo}
                onSignOutAction={()=>{}}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Should render Header correctly if AUTH`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <Header
                authStatus={`AUTH`}
                authInfo={mockAuthInfo}
                onSignOutAction={()=>{}}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
