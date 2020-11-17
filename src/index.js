import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import rootReducer from "./store/reducers/root-reducer";
import App from "./components/app/app";
import {fetchOffersList} from "./store/api-actions";
import reviews from "./mocks/reviews";

const api = createAPI(() => false);
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

Promise.all([
  store.dispatch(fetchOffersList()),
]).then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App
          reviews={reviews}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
});
