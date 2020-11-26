import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Review} from "./review";
import {makeInitialStateMock, mockReview} from "../../utils";

it(`Should Review render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());
  const tree = renderer
    .create(
        <Provider store={store}>
          <Review
            review={mockReview}
          />
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
