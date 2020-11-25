import React from "react";
import {Router, Switch, Route} from "react-router-dom";
import browserHistory from "../../browser-history";
import PrivateRoute from "../private-route/private-route";
import PageMain from "../pages/page-main/page-main";
import PageSignIn from "../pages/page-sign-in/page-sign-in";
import PageFavorites from "../pages/page-favorites/page-favorites";
import PageRoom from "../pages/page-room/page-room";
import PageNotFound from "../pages/page-not-found/page-not-found";
import {AppRoute} from "../../constants";

const App = () => {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN} component={PageMain} />
        <Route exact path={AppRoute.LOGIN} component={PageSignIn} />
        <PrivateRoute exact path={AppRoute.FAVORITES}
          render={() => <PageFavorites />}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.ROOM}
          render={({match}) => (
            <PageRoom offerId={match.params.id} />
          )}
        />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default App;
