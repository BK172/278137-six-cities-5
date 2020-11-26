import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {CitiesList} from "./cities-list";
import {mockCities, mockCity} from "../../utils";

configure({adapter: new Adapter()});

test(`Click on city button`, () => {
  const setActiveCityAction = jest.fn();

  const wrapper = shallow(
      <CitiesList
        cities={mockCities}
        activeCity={mockCity}
        setActiveCityAction={setActiveCityAction}
      />
  );

  const buttons = wrapper.find(`.locations__item-link`);

  buttons.forEach((button) => button.simulate(`click`, {preventDefault() {}}));
  expect(setActiveCityAction).toHaveBeenCalledTimes(buttons.length);
});
