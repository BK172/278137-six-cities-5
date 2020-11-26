import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {ReviewsList} from "./reviews-list";
import {makeInitialStateMock, mockReviews} from "../../utils";

it(`Should ReviewsList render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());
  const tree = renderer
    .create(
        <Provider store={store}>
          <ReviewsList
            offerId={`1`}
            reviews={mockReviews}
            getReviewsAction={()=>{}}
          />
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
