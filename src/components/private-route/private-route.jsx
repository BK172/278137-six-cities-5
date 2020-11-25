import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {getAuthStatus} from "../../store/selectors";
import {AuthStatus, AppRoute} from "../../constants";

const PrivateRoute = ({
  render,
  path,
  exact,
  authStatus
}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authStatus === AuthStatus.AUTH
            ? render(routeProps)
            : <Redirect to={AppRoute.LOGIN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authStatus: getAuthStatus({USER}),
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
