import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Router, Switch, Route} from "react-router-dom";
import browserHistory from "../../browser-history";
import {getAuthStatus} from "../../store/reducers/user/selectors";
import PrivateRoute from "../private-route/private-route";
import PageMain from "../pages/page-main/page-main";
import PageSignIn from "../pages/page-sign-in/page-sign-in";
import PageFavorites from "../pages/page-favorites/page-favorites";
import PageRoom from "../pages/page-room/page-room";
import PageNotFound from "../pages/page-not-found/page-not-found";
import {AuthStatus, AppRoute} from "../../constants";

const App = ({authStatus}) => {
  const isLoggedIn = authStatus === AuthStatus.AUTH;

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route
          exact
          path={AppRoute.MAIN}
          component={PageMain}
        />
        <PrivateRoute
          exact
          path={AppRoute.LOGIN}
          redirectURL={AppRoute.MAIN}
          isAuth={!isLoggedIn}
          render={() => <PageSignIn />}
        />
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          redirectURL={AppRoute.LOGIN}
          isAuth={isLoggedIn}
          render={() => <PageFavorites />}
        />
        <Route
          exact
          path={AppRoute.ROOM}
          render={({match}) => <PageRoom offerId={match.params.id} />}
        />
        <Route
          component={PageNotFound}
        />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  authStatus: PropTypes.string.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authStatus: getAuthStatus({USER}),
});

export {App};
export default connect(mapStateToProps)(App);
