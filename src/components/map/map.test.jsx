import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Map from "./map";
import {makeInitialStateMock, mockOffers, mockOffer, mockCity} from "../../utils";

it(`Should Map render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());
  const tree = renderer
    .create(
        <Provider store={store}>
          <Map
            mapType={`main`}
            offers={mockOffers}
            currentOffer={mockOffer}
            activeCity={mockCity}
            activeOffer={mockOffer}
            setActiveOfferAction={()=>{}}
          />
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
