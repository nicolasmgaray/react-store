import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import defaultInitialState from "./initalState";

export function initializeStore(initialState = defaultInitialState) {
  return createStore(reducers, initialState, compose(applyMiddleware(thunk)));
}
