import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import OffersList from "./offers-list";
import {makeInitialStateMock, mockOffers, mockOffer} from "../../utils";

describe(`OffersList component test`, () => {
  it(`Should render OffersList correctly`, () => {
    const store = configureStore()(makeInitialStateMock());
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <OffersList
                offers={mockOffers}
                offerType={`MAIN`}
                activeOffer={mockOffer}
                setActiveOfferAction={()=>{}}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
