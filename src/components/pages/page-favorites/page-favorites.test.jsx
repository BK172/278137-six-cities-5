import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {createAPI} from "../../../services/api";
import thunk from "redux-thunk";
import PageFavorites from "./page-favorites";
import {makeInitialStateMock, mockOffersMapByCity, mockOffersMapByCityEmpty} from "../../../utils";

describe(`PageFavorites component test`, () => {
  const store = configureStore([thunk.withExtraArgument(createAPI(() => false))])(makeInitialStateMock());

  it(`Should render PageFavorites correctly if favoriteOffersMapByCity is not empty`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <PageFavorites
                favoriteOffersMapByCity={mockOffersMapByCity}
                getFavoriteOffersAction={()=>{}}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Should render PageFavorites correctly if favoriteOffersMapByCity is empty`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <PageFavorites
                favoriteOffersMapByCity={mockOffersMapByCityEmpty}
                getFavoriteOffersAction={()=>{}}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
