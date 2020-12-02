import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {OfferBookmarkBtn} from "./offer-bookmark-btn";
import {mockOffer} from "../../utils";
import {AuthStatus} from "../../constants";

configure({adapter: new Adapter()});

describe(`OfferBookmarkBtn e2e tests`, () => {
  test(`Click on OfferBookmarkBtn if AuthStatus.NO_AUTH`, () => {
    const bookmarkBtnClickAction = jest.fn();
    const redirectToRouteAction = jest.fn();

    const wrapper = shallow(
        <OfferBookmarkBtn
          offer={mockOffer}
          bookmarkType={`MAIN`}
          bookmarkBtnClickAction={bookmarkBtnClickAction}
          authStatus={AuthStatus.NO_AUTH}
          redirectToRouteAction={redirectToRouteAction}
        />
    );

    wrapper.find(`.button`).simulate(`click`, {preventDefault() {}});
    expect(bookmarkBtnClickAction).toHaveBeenCalledTimes(0);
  });

  test(`Click on OfferBookmarkBtn if AuthStatus.AUTH`, () => {
    const bookmarkBtnClickAction = jest.fn();
    const redirectToRouteAction = jest.fn();

    const wrapper = shallow(
        <OfferBookmarkBtn
          offer={mockOffer}
          bookmarkType={`MAIN`}
          bookmarkBtnClickAction={bookmarkBtnClickAction}
          authStatus={AuthStatus.AUTH}
          redirectToRouteAction={redirectToRouteAction}
        />
    );

    wrapper.find(`.button`).simulate(`click`, {preventDefault() {}});
    expect(bookmarkBtnClickAction).toHaveBeenCalledTimes(1);
  });
});
