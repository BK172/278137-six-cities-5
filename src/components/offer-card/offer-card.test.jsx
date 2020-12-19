import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import OfferCard from "./offer-card";
import {makeInitialStateMock, mockOffer} from "../../utils";

describe(`OfferCard component test`, () => {
  it(`Should render OfferCard correctly`, () => {
    const store = configureStore()(makeInitialStateMock());
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <OfferCard
                offer={mockOffer}
                offerType={`MAIN`}
                onOfferCardMouseOver={()=>{}}
                onOfferCardMouseOut={()=>{}}
              />
            </BrowserRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
