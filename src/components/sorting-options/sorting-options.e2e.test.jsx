import React from "react";
import {shallow} from "enzyme";
import {SortingOptions} from "./sorting-options";

describe(`SortingOptions e2e tests`, () => {
  test(`Click on sort menu item`, () => {
    const changeSortingTypeAction = jest.fn();
    const wrapper = shallow(
        <SortingOptions
          sortingType={`popular`}
          isToggleActive={true}
          onToggleChange={jest.fn()}
          changeSortingTypeAction={changeSortingTypeAction}
        />
    );

    const sortMenuBtns = wrapper.find(`.places__option`);

    sortMenuBtns.forEach((button) => button.simulate(`click`));
    expect(changeSortingTypeAction).toHaveBeenCalledTimes(sortMenuBtns.length);
  });

  test(`Opening sort menu`, () => {
    const onToggleChange = jest.fn();
    const wrapper = shallow(
        <SortingOptions
          sortingType={`popular`}
          isToggleActive={true}
          onToggleChange={onToggleChange}
          changeSortingTypeAction={jest.fn()}
        />
    );

    wrapper.find(`.places__sorting-type`).simulate(`click`);
    expect(onToggleChange).toHaveBeenCalledTimes(1);
  });
});
