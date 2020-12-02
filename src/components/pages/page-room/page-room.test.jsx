import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {createAPI} from "../../../services/api";
import thunk from "redux-thunk";
import {PageRoom} from "./page-room";
import {makeInitialStateMock, mockOffers, mockOffer} from "../../../utils";
import {AuthStatus} from "../../../constants";

const mockedMethodImpl = jest.fn().mockReturnValue([{
  _offerId: jest.fn(() => `1`),
  on: jest.fn(() => {}),
}]);

jest.mock(`../../map/map`);

beforeAll(() => {
  jest.fn().mockImplementation(() => {
    return {
      markers: mockedMethodImpl
    };
  });
});

describe(`Should PageRoom render correctly`, () => {
  const store = configureStore([thunk.withExtraArgument(createAPI(() => false))])(makeInitialStateMock());

  it(`Should PageRoom render correctly if offerId is not defined`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <PageRoom
                offerId={``}
                offersNearBy={mockOffers}
                currentRoomOffer={mockOffer}
                getOfferByIdAction={()=>{}}
                getOffersNearByAction={()=>{}}
                updateCurrentOfferAction={()=>{}}
                authStatus={AuthStatus.AUTH}
                isLoadingFlag={false}
              />
            </BrowserRouter>
          </Provider>
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
                offerId={`1`}
                offersNearBy={mockOffers}
                currentRoomOffer={null}
                getOfferByIdAction={()=>{}}
                getOffersNearByAction={()=>{}}
                updateCurrentOfferAction={()=>{}}
                authStatus={AuthStatus.AUTH}
                isLoadingFlag={false}
              />
            </BrowserRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Should PageRoom render correctly if AuthStatus.NO_AUTH`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <PageRoom
                offerId={`1`}
                offersNearBy={mockOffers}
                currentRoomOffer={mockOffer}
                getOfferByIdAction={()=>{}}
                getOffersNearByAction={()=>{}}
                updateCurrentOfferAction={()=>{}}
                authStatus={AuthStatus.NO_AUTH}
                isLoadingFlag={false}
              />
            </BrowserRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Should PageRoom render correctly if AuthStatus.AUTH`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <PageRoom
                offerId={`1`}
                offersNearBy={mockOffers}
                currentRoomOffer={mockOffer}
                getOfferByIdAction={()=>{}}
                getOffersNearByAction={()=>{}}
                updateCurrentOfferAction={()=>{}}
                authStatus={AuthStatus.AUTH}
                isLoadingFlag={false}
              />
            </BrowserRouter>
          </Provider>
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
                offerId={`1`}
                offersNearBy={mockOffers}
                currentRoomOffer={mockOffer}
                getOfferByIdAction={()=>{}}
                getOffersNearByAction={()=>{}}
                updateCurrentOfferAction={()=>{}}
                authStatus={AuthStatus.AUTH}
                isLoadingFlag={true}
              />
            </BrowserRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
