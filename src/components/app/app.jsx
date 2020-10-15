import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import Favorites from "../favorites/favorites";
import Room from "../room/room";
import {offerPropTypes, reviewPropTypes} from "../../app-prop-types";

const App = ({offers, reviews}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main offers={offers} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/offer/:id"
          render={({match}) => (
            <Room
              offer={offers.find((item) => item.offerId === match.params.id)}
              offers={offers}
              reviews={reviews}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  reviews: PropTypes.arrayOf(reviewPropTypes).isRequired,
};

export default App;
