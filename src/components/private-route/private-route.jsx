import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";

const PrivateRoute = ({
  render,
  path,
  exact,
  loginStatus,
  redirectToURL,
}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          loginStatus
            ? render(routeProps)
            : <Redirect to={redirectToURL} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  loginStatus: PropTypes.bool.isRequired,
  redirectToURL: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
