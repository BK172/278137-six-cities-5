import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainPage from "../main-page/main-page";
import SignInPage from "../sign-in-page/sign-in-page";
import FavoritesPage from "../favorites-page/favorites-page";
import RoomPage from "../room-page/room-page";

const App = ({offersCount}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage offersCount={offersCount} />
        </Route>
        <Route exact path="/login">
          <SignInPage />
        </Route>
        <Route exact path="/favorites">
          <FavoritesPage />
        </Route>
        <Route exact path="/offer/:id">
          <RoomPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
};

export default App;
