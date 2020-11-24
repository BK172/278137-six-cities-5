import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {createAPI} from "./services/api";
import App from "./components/app/app";
import PageError from "./components/pages/page-error/page-error";
import rootReducer from "./store/reducers/root-reducer";
import {fetchOffersList, checkAuth} from "./store/api-actions";
import {requireAuthorization} from "./store/action";
import {redirect} from "./store/middlewares/redirect";
import {AuthStatus, ResponseType} from "./const";

const checkResponseSuccess = (response) => {
  return response.every((item) => item === ResponseType.SUCCESS);
};

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

Promise.all([
  store.dispatch(checkAuth()),
  store.dispatch(fetchOffersList()),
]).then((response) => {
  if (checkResponseSuccess(response)) {
    ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.querySelector(`#root`)
    );
  } else {
    ReactDOM.render(
        <PageError />,
        document.querySelector(`#root`)
    );
  }
});
