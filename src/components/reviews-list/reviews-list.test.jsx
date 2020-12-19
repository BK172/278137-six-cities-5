import React from "react";
import renderer from "react-test-renderer";
import {ReviewsList} from "./reviews-list";
import {mockReviews} from "../../utils";

describe(`ReviewsList component test`, () => {
  it(`Should render ReviewsList correctly`, () => {
    const tree = renderer
      .create(
          <ReviewsList
            offerId={`1`}
            reviews={mockReviews}
            getReviewsAction={()=>{}}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
