import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferCard from "./offer-card";
import {mockOffer} from "../../utils";

configure({adapter: new Adapter()});

describe(`OfferCard e2e tests`, () => {
  test(`OfferCard mouse over`, () => {
    const onOfferCardMouseOver = jest.fn();
    const onOfferCardMouseOut = jest.fn();

    const wrapper = shallow(
        <OfferCard
          offer={mockOffer}
          offerType={`MAIN`}
          onOfferCardMouseOver={onOfferCardMouseOver}
          onOfferCardMouseOut={onOfferCardMouseOut}
        />
    );

    wrapper.find(`article`).simulate(`mouseover`);
    expect(onOfferCardMouseOver).toHaveBeenCalledTimes(1);
  });

  test(`OfferCard mouse out`, () => {
    const onOfferCardMouseOver = jest.fn();
    const onOfferCardMouseOut = jest.fn();

    const wrapper = shallow(
        <OfferCard
          offer={mockOffer}
          offerType={`MAIN`}
          onOfferCardMouseOver={onOfferCardMouseOver}
          onOfferCardMouseOut={onOfferCardMouseOut}
        />
    );

    wrapper.find(`article`).simulate(`mouseout`);
    expect(onOfferCardMouseOut).toHaveBeenCalledTimes(1);
  });

  test(`click on OfferCard image`, () => {
    const onOfferCardMouseOver = jest.fn();
    const onOfferCardMouseOut = jest.fn();
    const onOfferCardClick = jest.fn();

    const wrapper = shallow(
        <OfferCard
          offer={mockOffer}
          offerType={`MAIN`}
          onOfferCardMouseOver={onOfferCardMouseOver}
          onOfferCardMouseOut={onOfferCardMouseOut}
        />
    );

    wrapper.find(`.place-card__image-wrapper`).simulate(`click`);
    expect(onOfferCardClick).toHaveBeenCalledTimes(0);
  });

  test(`click on OfferCard link`, () => {
    const onOfferCardMouseOver = jest.fn();
    const onOfferCardMouseOut = jest.fn();
    const onOfferCardClick = jest.fn();

    const wrapper = shallow(
        <OfferCard
          offer={mockOffer}
          offerType={`MAIN`}
          onOfferCardMouseOver={onOfferCardMouseOver}
          onOfferCardMouseOut={onOfferCardMouseOut}
        />
    );

    wrapper.find(`.place-card__name`).simulate(`click`);
    expect(onOfferCardClick).toHaveBeenCalledTimes(0);
  });
});
