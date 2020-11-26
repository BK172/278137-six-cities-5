import React from "react";
import renderer from "react-test-renderer";
import {SortingOptions} from "./sorting-options";
import {INITIAL_SORTING_TYPE} from "../../constants";

describe(`Should SortingOptions render correctly`, () => {
  it(`Should SortingOptions render correctly if isToggleActive true`, () => {
    const tree = renderer
      .create(
          <SortingOptions
            sortingType={INITIAL_SORTING_TYPE}
            changeSortingTypeAction={()=>{}}
            isToggleActive={true}
            onToggleChange={()=>{}}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Should SortingOptions render correctly if isToggleActive false`, () => {
    const tree = renderer
      .create(
          <SortingOptions
            sortingType={INITIAL_SORTING_TYPE}
            changeSortingTypeAction={()=>{}}
            isToggleActive={false}
            onToggleChange={()=>{}}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
