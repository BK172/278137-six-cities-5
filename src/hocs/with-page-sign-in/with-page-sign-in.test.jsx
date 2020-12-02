import React, {Fragment} from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {makeInitialStateMock} from "../../utils";
import withPageSignIn from "./with-page-sign-in";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withPageSignIn(MockComponent);

it(`Should withPageSignIn render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());
  const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <MockComponentWrapped
            email={``}
            password={``}
            isFormValid={true}
            onFormSubmit={()=>{}}
            onInputChange={()=>{}}
          >
            <Fragment />
          </MockComponentWrapped>
        </BrowserRouter>
      </Provider>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
