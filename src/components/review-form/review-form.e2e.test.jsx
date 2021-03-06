import React from "react";
import {shallow} from "enzyme";
import {ReviewForm} from "./review-form";

describe(`ReviewForm e2e tests`, () => {
  test(`Form submit`, () => {
    const postReviewAction = jest.fn();
    const wrapper = shallow(
        <ReviewForm
          offerId={`1`}
          postReviewAction={postReviewAction}
        />
    );

    wrapper.find(`.reviews__form`).simulate(`submit`, {
      preventDefault: jest.fn(),
    });

    expect(postReviewAction).toHaveBeenCalledTimes(1);
  });

  test(`Click on submit button`, () => {
    const onSubmitButtonClick = jest.fn();
    const wrapper = shallow(
        <ReviewForm
          offerId={`1`}
          postReviewAction={jest.fn()}
        />
    );

    wrapper.find(`.reviews__submit`).simulate(`click`, {
      preventDefault: jest.fn(),
    });

    expect(onSubmitButtonClick).toHaveBeenCalledTimes(0);
  });
});
