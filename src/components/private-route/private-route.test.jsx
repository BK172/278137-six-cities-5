import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {PrivateRoute} from "./private-route";
import {makeInitialStateMock} from "../../utils";
import {AuthStatus} from "../../const";

describe(`Should PrivateRoute render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());

  it(`Should PrivateRoute render correctly authStatus={AuthStatus.NO_AUTH}`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <PrivateRoute
              authStatus={AuthStatus.NO_AUTH}
              exact={true}
              path={``}
              render={()=>{}}
            />
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Should PrivateRoute render correctly authStatus={AuthStatus.AUTH}`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <PrivateRoute
              authStatus={AuthStatus.AUTH}
              exact={true}
              path={``}
              render={()=>{}}
            />
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
