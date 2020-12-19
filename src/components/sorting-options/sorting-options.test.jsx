import React from "react";
import renderer from "react-test-renderer";
import {SortingOptions} from "./sorting-options";

describe(`SortingOptions component test`, () => {
  it(`Should render SortingOptions correctly if isToggleActive true`, () => {
    const tree = renderer
      .create(
          <SortingOptions
            sortingType={`popular`}
            isToggleActive={true}
            onToggleChange={()=>{}}
            changeSortingTypeAction={()=>{}}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Should render SortingOptions correctly if isToggleActive false`, () => {
    const tree = renderer
      .create(
          <SortingOptions
            sortingType={`popular`}
            isToggleActive={false}
            onToggleChange={()=>{}}
            changeSortingTypeAction={()=>{}}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
