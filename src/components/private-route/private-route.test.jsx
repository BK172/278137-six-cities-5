import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import PrivateRoute from "./private-route";
import {makeInitialStateMock} from "../../utils";

describe(`Should PrivateRoute render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());

  it(`Should PrivateRoute render correctly if isAuth true`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <PrivateRoute
                isAuth={true}
                redirectURL={`/`}
                exact={true}
                path={``}
                render={()=>{}}
              />
            </BrowserRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Should PrivateRoute render correctly if isAuth false`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <PrivateRoute
                isAuth={false}
                redirectURL={`/`}
                exact={true}
                path={``}
                render={()=>{}}
              />
            </BrowserRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
