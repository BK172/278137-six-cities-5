import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {OffersList} from "./offers-list";
import {makeInitialStateMock, mockOffers, mockOffer} from "../../utils";

it(`Should OffersList render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <OffersList
              offers={mockOffers}
              offerType={`MAIN`}
              activeOffer={mockOffer}
              setActiveOfferAction={()=>{}}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
