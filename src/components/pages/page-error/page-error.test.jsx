import React from "react";
import renderer from "react-test-renderer";
import PageError from "./page-error";

it(`Should PageError render correctly`, () => {
  const tree = renderer
    .create(
        <PageError />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
