import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferCard from "./offer-card";
import {mockOffer} from "../../utils";

configure({adapter: new Adapter()});

describe(`OfferCard e2e tests`, () => {
  test(`OfferCard mouse over`, () => {
    const onOfferCardMouseOver = jest.fn();
    const wrapper = shallow(
        <OfferCard
          offer={mockOffer}
          offerType={`MAIN`}
          onOfferCardMouseOver={onOfferCardMouseOver}
          onOfferCardMouseOut={jest.fn()}
        />
    );

    wrapper.find(`.place-card`).simulate(`mouseover`);
    expect(onOfferCardMouseOver).toHaveBeenCalledTimes(1);
  });

  test(`OfferCard mouse out`, () => {
    const onOfferCardMouseOut = jest.fn();
    const wrapper = shallow(
        <OfferCard
          offer={mockOffer}
          offerType={`MAIN`}
          onOfferCardMouseOver={jest.fn()}
          onOfferCardMouseOut={onOfferCardMouseOut}
        />
    );

    wrapper.find(`.place-card`).simulate(`mouseout`);
    expect(onOfferCardMouseOut).toHaveBeenCalledTimes(1);
  });

  test(`click on OfferCard image`, () => {
    const onOfferCardClick = jest.fn();
    const wrapper = shallow(
        <OfferCard
          offer={mockOffer}
          offerType={`MAIN`}
          onOfferCardMouseOver={jest.fn()}
          onOfferCardMouseOut={jest.fn()}
        />
    );

    wrapper.find(`.place-card__image-wrapper`).simulate(`click`);
    expect(onOfferCardClick).toHaveBeenCalledTimes(0);
  });

  test(`click on OfferCard link`, () => {
    const onOfferCardClick = jest.fn();
    const wrapper = shallow(
        <OfferCard
          offer={mockOffer}
          offerType={`MAIN`}
          onOfferCardMouseOver={jest.fn()}
          onOfferCardMouseOut={jest.fn()}
        />
    );

    wrapper.find(`.place-card__name`).simulate(`click`);
    expect(onOfferCardClick).toHaveBeenCalledTimes(0);
  });
});
