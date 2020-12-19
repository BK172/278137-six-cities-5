import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {createAPI} from "../../../services/api";
import thunk from "redux-thunk";
import PageRoom from "./page-room";
import {makeInitialStateMock, mockOffers, mockOffer} from "../../../utils";

describe(`PageRoom component test`, () => {
  const store = configureStore([thunk.withExtraArgument(createAPI(() => false))])(makeInitialStateMock());

  it(`Should render PageRoom correctly if offerId is not defined`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <PageRoom
                offerId={``}
                offersNearBy={mockOffers}
                currentRoomOffer={mockOffer}
                getOfferByIdAction={()=>{}}
                getOffersNearByAction={()=>{}}
                updateCurrentOfferAction={()=>{}}
                authStatus={`AUTH`}
                isLoadingFlag={false}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Should render PageRoom correctly if currentRoomOffer is empty`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <PageRoom
                offerId={`1`}
                offersNearBy={mockOffers}
                currentRoomOffer={null}
                getOfferByIdAction={()=>{}}
                getOffersNearByAction={()=>{}}
                updateCurrentOfferAction={()=>{}}
                authStatus={`AUTH`}
                isLoadingFlag={false}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Should render PageRoom correctly if NO_AUTH`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <PageRoom
                offerId={`1`}
                offersNearBy={mockOffers}
                currentRoomOffer={mockOffer}
                getOfferByIdAction={()=>{}}
                getOffersNearByAction={()=>{}}
                updateCurrentOfferAction={()=>{}}
                authStatus={`NO_AUTH`}
                isLoadingFlag={false}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Should render PageRoom correctly if AUTH`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <PageRoom
                offerId={`1`}
                offersNearBy={mockOffers}
                currentRoomOffer={mockOffer}
                getOfferByIdAction={()=>{}}
                getOffersNearByAction={()=>{}}
                updateCurrentOfferAction={()=>{}}
                authStatus={`AUTH`}
                isLoadingFlag={false}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Should render PageRoom correctly if isLoadingFlag true`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <PageRoom
                offerId={`1`}
                offersNearBy={mockOffers}
                currentRoomOffer={mockOffer}
                getOfferByIdAction={()=>{}}
                getOffersNearByAction={()=>{}}
                updateCurrentOfferAction={()=>{}}
                authStatus={`AUTH`}
                isLoadingFlag={true}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
