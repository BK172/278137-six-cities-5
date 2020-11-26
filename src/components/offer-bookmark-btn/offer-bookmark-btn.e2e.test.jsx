import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {OfferBookmarkBtn} from "./offer-bookmark";
import {mockOffer} from "../../utils";
import {AuthStatus} from "../../constants";

configure({adapter: new Adapter()});

test(`Click on OfferBookmarkBtn`, () => {
  const bookmarkBtnClickAction = jest.fn();

  const wrapper = shallow(
      <OfferBookmarkBtn
        offer={mockOffer}
        bookmarkType={`MAIN`}
        bookmarkBtnClickAction={bookmarkBtnClickAction}
        authStatus={AuthStatus.NO_AUTH}
      />
  );

  wrapper.find(`.button`).simulate(`click`, {preventDefault() {}});
  expect(bookmarkBtnClickAction).toHaveBeenCalledTimes(1);
});
