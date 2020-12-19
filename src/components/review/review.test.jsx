import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import Review from "./review";
import {makeInitialStateMock, mockReview} from "../../utils";

describe(`Review component test`, () => {
  it(`Should render Review correctly`, () => {
    const store = configureStore()(makeInitialStateMock());
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <Review
                review={mockReview}
              />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
