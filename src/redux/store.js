import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import postReducer from "./reducers/postReducer";
import { composeWithDevTools } from "redux-devtools-extension";
export const store = createStore(
    postReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
