import React from "react";
import renderer from "react-test-renderer";
import {CitiesList} from "./cities-list";
import {mockCities, mockCity} from "../../utils";

describe(`CitiesList component test`, () => {
  it(`Should render CitiesList correctly`, () => {
    const tree = renderer
      .create(
          <CitiesList
            cities={mockCities}
            activeCity={mockCity}
            setActiveCityAction={()=>{}}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
