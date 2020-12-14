import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PageSignIn} from "./page-sign-in";

configure({adapter: new Adapter()});

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
