import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PageSignIn} from "./page-sign-in";

configure({adapter: new Adapter()});

test(`Click on submit button PageSingIn`, () => {
  const onSubmitAction = jest.fn();

  const wrapper = shallow(
      <PageSignIn
        onSubmitAction={onSubmitAction}
      />
  );

  wrapper.find(`.login__form`).simulate(`click`, {preventDefault() {}});
  expect(onSubmitAction).toHaveBeenCalledTimes(0);
});
