import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {createAPI} from "../services/api";
import rootReducer from "./reducers/root-reducer";
import {requireAuthorization} from "./reducers/user/actions";
import {redirect} from "./middlewares/redirect";
import {AuthStatus} from "../constants";
import {logout} from "./api-actions";

const api = createAPI(
    // () => store.dispatch(requireAuthorization(AuthStatus.NO_AUTH))
    () => store.dispatch(logout())
);

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);
