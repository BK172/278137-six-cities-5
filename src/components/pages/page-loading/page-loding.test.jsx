import React from "react";
import renderer from "react-test-renderer";
import PageLoading from "./page-loading";

it(`Should PageLoading render correctly`, () => {
  const tree = renderer
    .create(
        <PageLoading />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
