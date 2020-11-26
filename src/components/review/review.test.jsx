import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Review} from "./review";
import {makeInitialStateMock, mockReview} from "../../utils";

it(`Should Review render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());
  const tree = renderer
    .create(
        <Review
          review={mockReview}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
