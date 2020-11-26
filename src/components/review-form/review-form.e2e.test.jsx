import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {ReviewForm} from "./review-form";

configure({adapter: new Adapter()});

it(`Click on submit button`, () => {
  const postReviewAction = jest.fn();

  const wrapper = shallow(
      <ReviewForm
        offerId={1}
        postReviewAction={postReviewAction}
      />
  );

  wrapper.find(`form`).simulate(`submit`, {preventDefault() {}});
  expect(postReviewAction).toHaveBeenCalledTimes(1);
});
