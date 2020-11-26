import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import PageFavorites from "./page-favorites";
import {makeInitialStateMock, mockOffersMapByCity} from "../../../utils";

describe(`Should PageFavorites render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());

  it(`Should PageFavorites render correctly if favoriteOffersMapByCity is not empty`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <PageFavorites
                favoriteOffersMapByCity={mockOffersMapByCity}
                getFavoriteOffersAction={()=>{}}
              />
            </BrowserRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Should PageFavorites render correctly if favoriteOffersMapByCity is empty`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter>
              <PageFavorites
                favoriteOffersMapByCity={new Map()}
                getFavoriteOffersAction={()=>{}}
              />
            </BrowserRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
