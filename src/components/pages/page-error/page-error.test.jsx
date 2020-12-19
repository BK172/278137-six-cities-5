import React from "react";
import renderer from "react-test-renderer";
import PageError from "./page-error";

describe(`PageError component test`, () => {
  it(`Should render PageError correctly`, () => {
    const tree = renderer
      .create(
          <PageError />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
