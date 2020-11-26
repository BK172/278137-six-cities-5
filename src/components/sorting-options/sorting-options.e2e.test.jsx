import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {SortingOptions} from "./sorting-options";
import {INITIAL_SORTING_TYPE} from "../../constants";

configure({adapter: new Adapter()});

describe(`SortingOptions e2e tests`, () => {
  test(`Click on sort menu item`, () => {
    const changeSortingTypeAction = jest.fn();
    const onToggleChange = jest.fn();

    const wrapper = shallow(
        <SortingOptions
          sortingType={INITIAL_SORTING_TYPE}
          changeSortingTypeAction={changeSortingTypeAction}
          isToggleActive={true}
          onToggleChange={onToggleChange}
        />
    );

    const sortMenuBtns = wrapper.find(`li`);

    sortMenuBtns.forEach((button) => button.simulate(`click`));
    expect(changeSortingTypeAction).toHaveBeenCalledTimes(sortMenuBtns.length);
  });

  test(`Open sort menu`, () => {
    const changeSortingTypeAction = jest.fn();
    const onToggleChange = jest.fn();

    const wrapper = shallow(
        <SortingOptions
          sortingType={INITIAL_SORTING_TYPE}
          changeSortingTypeAction={changeSortingTypeAction}
          isToggleActive={true}
          onToggleChange={onToggleChange}
        />
    );

    wrapper.find(`form`).simulate(`click`);
    expect(onToggleChange).toHaveBeenCalledTimes(0);
  });
});
