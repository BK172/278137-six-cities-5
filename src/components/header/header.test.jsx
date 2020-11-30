import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {BrowserRouter} from "react-router-dom";
import {Header} from "./header";
import {makeInitialStateMock, mockAuthInfo} from "../../utils";
import {AuthStatus} from "../../constants";

describe(`Should Header render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());
  it(`Should Header render correctly if AuthStatus.NO_AUTH`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Header
                authStatus={AuthStatus.NO_AUTH}
                authInfo={mockAuthInfo}
                onSignOutAction={()=>{}}
              />
            </BrowserRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Should Header render correctly if AuthStatus.AUTH`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <Header
                authStatus={AuthStatus.AUTH}
                authInfo={mockAuthInfo}
                onSignOutAction={()=>{}}
              />
            </BrowserRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
