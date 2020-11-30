import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {store} from "./store/store";
import App from "./components/app/app";
import PageError from "./components/pages/page-error/page-error";
import {fetchOffersList, checkAuth} from "./store/api-actions";
import {ResponseType} from "./constants";

Promise.all([
  store.dispatch(checkAuth()),
  store.dispatch(fetchOffersList()),
]).then((response) => {
  ReactDOM.render(
      <Provider store={store}>
        {response[1] === ResponseType.SUCCESS ? <App/> : <PageError />}
      </Provider>,
      document.querySelector(`#root`)
  );
});
