import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import PrivateRoute from "./private-route";
import {makeInitialStateMock} from "../../utils";

describe(`PrivateRoute component test`, () => {
  const store = configureStore()(makeInitialStateMock());

  it(`Should render PrivateRoute correctly if isAuth true`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <PrivateRoute
                isAuth={true}
                redirectURL={`/`}
                exact={true}
                path={``}
                render={()=>{}}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Should render PrivateRoute correctly if isAuth false`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <PrivateRoute
                isAuth={false}
                redirectURL={`/`}
                exact={true}
                path={``}
                render={()=>{}}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
