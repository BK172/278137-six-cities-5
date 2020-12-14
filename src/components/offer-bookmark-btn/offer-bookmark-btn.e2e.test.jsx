import React from "react";
import {shallow} from "enzyme";
import {OfferBookmarkBtn} from "./offer-bookmark-btn";
import {mockOffer} from "../../utils";

describe(`OfferBookmarkBtn e2e tests`, () => {
  test(`Click on OfferBookmarkBtn if NO_AUTH`, () => {
    const bookmarkBtnClickAction = jest.fn();
    const wrapper = shallow(
        <OfferBookmarkBtn
          offer={mockOffer}
          bookmarkType={`MAIN`}
          authStatus={`NO_AUTH`}
          bookmarkBtnClickAction={bookmarkBtnClickAction}
          redirectToRouteAction={jest.fn()}
        />
    );

    wrapper.find(`.button`).simulate(`click`, {
      preventDefault: jest.fn(),
    });

    expect(bookmarkBtnClickAction).toHaveBeenCalledTimes(0);
  });

  test(`Click on OfferBookmarkBtn if AUTH`, () => {
    const bookmarkBtnClickAction = jest.fn();
    const wrapper = shallow(
        <OfferBookmarkBtn
          offer={mockOffer}
          bookmarkType={`MAIN`}
          authStatus={`AUTH`}
          bookmarkBtnClickAction={bookmarkBtnClickAction}
          redirectToRouteAction={jest.fn()}
        />
    );

    wrapper.find(`.button`).simulate(`click`, {
      preventDefault: jest.fn(),
    });

    expect(bookmarkBtnClickAction).toHaveBeenCalledTimes(1);
  });
});
