import React from "react";
import renderer from "react-test-renderer";
import {ReviewForm} from "./review-form";

it(`Should ReviewForm render correctly`, () => {
  const tree = renderer
    .create(
        <ReviewForm
          offerId={1}
          postReviewAction={()=>{}}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
