import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {SignInPage} from "./sign-in-page";
import {makeInitialStateMock} from "../../../utils";

it(`Should SignInPage render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <SignInPage
              onSubmitAction={()=>{}}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
