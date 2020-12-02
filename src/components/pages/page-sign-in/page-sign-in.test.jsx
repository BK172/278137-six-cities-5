import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {PageSignIn} from "./page-sign-in";
import {makeInitialStateMock} from "../../../utils";

it(`Should PageSignIn render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <PageSignIn
              email={``}
              password={``}
              isFormValid={true}
              onFormSubmit={()=>{}}
              onInputChange={()=>{}}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
