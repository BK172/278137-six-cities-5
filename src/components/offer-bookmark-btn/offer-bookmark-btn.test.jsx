import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {BrowserRouter} from "react-router-dom";
import {OfferBookmarkBtn} from "./offer-bookmark-btn";
import {makeInitialStateMock, mockOffer} from "../../utils";
import {AuthStatus} from "../../constants";

describe(`Should OfferBookmarkBtn render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());

  it(`Should OfferBookmarkBtn render correctly if AuthStatus.NO_AUTH`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <OfferBookmarkBtn
                offer={mockOffer}
                bookmarkType={`MAIN`}
                bookmarkBtnClickAction={()=>{}}
                authStatus={AuthStatus.NO_AUTH}
                redirectToRouteAction={()=>{}}
              />
            </BrowserRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Should OfferBookmarkBtn render correctly if AuthStatus.AUTH`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <OfferBookmarkBtn
                offer={mockOffer}
                bookmarkType={`MAIN`}
                bookmarkBtnClickAction={()=>{}}
                authStatus={AuthStatus.AUTH}
                redirectToRouteAction={()=>{}}
              />
            </BrowserRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
