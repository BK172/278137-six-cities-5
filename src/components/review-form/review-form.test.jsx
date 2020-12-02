import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {makeInitialStateMock} from "../../utils";
import {ReviewForm} from "./review-form";

it(`Should ReviewForm render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <ReviewForm
              rating={``}
              review={``}
              isFormValid={true}
              isFormWaitingResponse={false}
              reviewPostingError={``}
              onFormSubmit={()=>{}}
              onInputChange={()=>{}}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
