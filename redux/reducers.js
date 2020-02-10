import { combineReducers } from "redux";

import { reducer as productsReducer } from "./ducks/Products";
import { reducer as userReducer } from "./ducks/User";
import { reducer as filtersReducer } from "./ducks/Filters";

const reducers = {
  products: productsReducer,
  user: userReducer,
  filters: filtersReducer
};

export default combineReducers(reducers);
