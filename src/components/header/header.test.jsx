import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {Header} from "./header";
import {AuthStatus} from "../../constants";

it(`Should Header render correctly if authStatus={AuthStatus.NO_AUTH}`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Header
            authStatus={AuthStatus.NO_AUTH}
            avatar={``}
            email={``}
          />
        </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it(`Should Header render correctly if authStatus={AuthStatus.AUTH}`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Header
            authStatus={AuthStatus.AUTH}
            avatar={``}
            email={``}
          />
        </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
