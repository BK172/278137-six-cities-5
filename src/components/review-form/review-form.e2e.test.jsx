import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {ReviewForm} from "./review-form";

configure({adapter: new Adapter()});

it(`Click on submit button ReviewForm`, () => {
  const onFormSubmit = jest.fn();
  const onInputChange = jest.fn();

  const wrapper = shallow(
      <ReviewForm
        offerId={`1`}
        rating={``}
        review={``}
        isFormValid={true}
        isFormWaitingResponse={false}
        reviewPostingError={``}
        onFormSubmit={onFormSubmit}
        onInputChange={onInputChange}
      />
  );

  wrapper.find(`form`).simulate(`submit`, {preventDefault() {}});
  expect(onFormSubmit).toHaveBeenCalledTimes(1);
  expect(onInputChange).toHaveBeenCalledTimes(0);
});
