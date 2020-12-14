import React from "react";
import {shallow} from "enzyme";
import {PageSignIn} from "./page-sign-in";

describe(`PageSingIn e2e tests`, () => {
  test(`Form submit`, () => {
    const onSubmitAction = jest.fn();
    const wrapper = shallow(
        <PageSignIn
          onSubmitAction={onSubmitAction}
        />
    );

    wrapper.find(`.login__form`).simulate(`submit`, {
      preventDefault: jest.fn(),
    });

    expect(onSubmitAction).toHaveBeenCalledTimes(0);
  });

  test(`Click on submit button`, () => {
    const onSubmitButtonClick = jest.fn();
    const wrapper = shallow(
        <PageSignIn
          onSubmitAction={jest.fn()}
        />
    );

    wrapper.find(`.login__submit`).simulate(`click`, {
      preventDefault: jest.fn(),
    });

    expect(onSubmitButtonClick).toHaveBeenCalledTimes(0);
  });
});
