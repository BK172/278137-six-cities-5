import React from "react";
import PropTypes from "prop-types";
import {Router as BrowserRouter, Switch, Route} from "react-router-dom";
import browserHistory from "../../browser-history";
import PrivateRoute from "../private-route/private-route";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import Favorites from "../favorites/favorites";
import Room from "../room/room";
import PageNotFound from "../page-not-found/page-not-found";
import {reviewPropTypes} from "../../app-prop-types";
import {AppRoute} from "../../utils";

const App = ({reviews}) => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignIn />
        </Route>
        <PrivateRoute exact path={AppRoute.FAVORITES}>
          <Favorites />
        </PrivateRoute>
        <Route
          exact
          path={AppRoute.ROOM}
          render={({match}) => (
            <Room
              offerId={match.params.id}
              reviews={reviews}
            />
          )}
        />
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  reviews: PropTypes.arrayOf(reviewPropTypes).isRequired,
};

export default App;
