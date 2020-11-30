import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import PrivateRoute from "./private-route";
import {makeInitialStateMock} from "../../utils";

describe(`Should PrivateRoute render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());

  it(`Should PrivateRoute render correctly if loginStatus true`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <PrivateRoute
                loginStatus={true}
                redirectToURL={`/`}
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

  it(`Should PrivateRoute render correctly if loginStatus false`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <PrivateRoute
                loginStatus={false}
                redirectToURL={`/`}
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
