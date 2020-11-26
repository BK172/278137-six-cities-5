import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {PageRoom} from "./page-room";
import {makeInitialStateMock, mockOffers, mockOffer} from "../../../utils";
import {AuthStatus} from "../../../constants";

describe(`Should PageRoom render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());

  it(`Should PageRoom render correctly if offerId is not defined`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <PageRoom
                offerId={null}
                offersNearBy={mockOffers}
                currentRoomOffer={mockOffer}
                getOfferByIdAction={()=>{}}
                getOffersNearByAction={()=>{}}
                updateCurrentOfferAction={()=>{}}
                authStatus={AuthStatus.AUTH}
                isLoadingFlag={false}
              />
            </BrowserRouter>
          </Provider>, {
            createNodeMock: () => document.createElement(`div`)
          }
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Should PageRoom render correctly if currentRoomOffer is empty`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <PageRoom
                offerId={1}
                offersNearBy={mockOffers}
                currentRoomOffer={{}}
                getOfferByIdAction={()=>{}}
                getOffersNearByAction={()=>{}}
                updateCurrentOfferAction={()=>{}}
                authStatus={AuthStatus.AUTH}
                isLoadingFlag={false}
              />
            </BrowserRouter>
          </Provider>, {
            createNodeMock: () => document.createElement(`div`)
          }
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Should PageRoom render correctly if authStatus={AuthStatus.NO_AUTH}`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <PageRoom
                offerId={1}
                offersNearBy={mockOffers}
                currentRoomOffer={mockOffer}
                getOfferByIdAction={()=>{}}
                getOffersNearByAction={()=>{}}
                updateCurrentOfferAction={()=>{}}
                authStatus={AuthStatus.NO_AUTH}
                isLoadingFlag={false}
              />
            </BrowserRouter>
          </Provider>, {
            createNodeMock: () => document.createElement(`div`)
          }
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Should PageRoom render correctly if isLoadingFlag true`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <PageRoom
                offerId={1}
                offersNearBy={mockOffers}
                currentRoomOffer={mockOffer}
                getOfferByIdAction={()=>{}}
                getOffersNearByAction={()=>{}}
                updateCurrentOfferAction={()=>{}}
                authStatus={AuthStatus.AUTH}
                isLoadingFlag={true}
              />
            </BrowserRouter>
          </Provider>, {
            createNodeMock: () => document.createElement(`div`)
          }
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
