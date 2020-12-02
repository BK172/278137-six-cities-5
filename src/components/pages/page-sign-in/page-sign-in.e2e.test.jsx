import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PageSignIn} from "./page-sign-in";

configure({adapter: new Adapter()});

test(`Click on submit button PageSingIn`, () => {
  const onFormSubmit = jest.fn();
  const onInputChange = jest.fn();

  const wrapper = shallow(
      <PageSignIn
        email={``}
        password={``}
        isFormValid={true}
        onFormSubmit={onFormSubmit}
        onInputChange={onInputChange}
      />
  );

  wrapper.find(`.login__form`).simulate(`click`, {preventDefault() {}});
  expect(onFormSubmit).toHaveBeenCalledTimes(0);
  expect(onInputChange).toHaveBeenCalledTimes(0);
});
