import React from "react";
import {shallow} from "enzyme";
import {CitiesList} from "./cities-list";
import {mockCities, mockCity} from "../../utils";

describe(`CitiesList e2e tests`, () => {
  test(`Click on city button`, () => {
    const setActiveCityAction = jest.fn();
    const wrapper = shallow(
        <CitiesList
          cities={mockCities}
          activeCity={mockCity}
          scrollContainerId={`scroll-container`}
          scrollContainerName={`scroll-container`}
          onChangeSelectedOfferId={jest.fn()}
          setActiveCityAction={setActiveCityAction}
        />
    );

    const buttons = wrapper.find(`.locations__item-link`);

    buttons.forEach((button) => button.simulate(`click`, {
      preventDefault: jest.fn(),
    }));

    expect(setActiveCityAction).toHaveBeenCalledTimes(buttons.length);
  });
});
