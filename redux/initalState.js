import { defaultState as productsDefaultState } from "./ducks/Products";
import { defaultState as userDefaultState } from "./ducks/User";
import { defaultState as filtersDefaultState } from "./ducks/Filters";

export default {
  products: productsDefaultState,
  user: userDefaultState,
  filters: filtersDefaultState
};
