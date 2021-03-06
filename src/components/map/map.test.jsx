import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Map from "./map";
import {makeInitialStateMock, mockOffers, mockOffer, mockCity} from "../../utils";

describe(`Map component test`, () => {
  it(`Should render Map correctly`, () => {
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
              selectedOfferId={`1`}
              scrollContainerId={`scroll-container`}
              scrollContainerName={`scroll-container`}
              onChangeSelectedOfferId={()=>{}}
            />
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
