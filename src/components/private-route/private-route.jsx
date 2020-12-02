import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";

const PrivateRoute = ({
  render,
  path,
  exact,
  isAuth,
  redirectURL,
}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          isAuth
            ? render(routeProps)
            : <Redirect to={redirectURL} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  redirectURL: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
