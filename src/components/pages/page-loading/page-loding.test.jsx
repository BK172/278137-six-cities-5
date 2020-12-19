import React from "react";
import renderer from "react-test-renderer";
import PageLoading from "./page-loading";

describe(`PageLoading component test`, () => {
  it(`Should render PageLoading correctly`, () => {
    const tree = renderer
      .create(
          <PageLoading />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
