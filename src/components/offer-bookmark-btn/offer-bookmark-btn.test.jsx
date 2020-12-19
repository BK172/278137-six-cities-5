import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {OfferBookmarkBtn} from "./offer-bookmark-btn";
import {makeInitialStateMock, mockOffer} from "../../utils";

describe(`OfferBookmarkBtn component test`, () => {
  const store = configureStore()(makeInitialStateMock());

  it(`Should render OfferBookmarkBtn correctly if NO_AUTH`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <OfferBookmarkBtn
                offer={mockOffer}
                bookmarkType={`MAIN`}
                bookmarkBtnClickAction={()=>{}}
                authStatus={`NO_AUTH`}
                redirectToRouteAction={()=>{}}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Should render OfferBookmarkBtn correctly if AUTH`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <OfferBookmarkBtn
                offer={mockOffer}
                bookmarkType={`MAIN`}
                bookmarkBtnClickAction={()=>{}}
                authStatus={`AUTH`}
                redirectToRouteAction={()=>{}}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
