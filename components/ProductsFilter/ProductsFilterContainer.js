import ProductsFilter from "./ProductsFilter";
import { useSelector, useDispatch } from "react-redux";
import { types } from "../../redux/ducks/Filters";

const ProductsFilterContainer = () => {
  const { orderBy, searchTerm } = useSelector(state => state.filters);
  const dispatch = useDispatch();
  console.log(orderBy, searchTerm);

  const handleFilterClick = newOrder => () => {
    dispatch({ type: types.FILTERS_UPDATE_ORDER, payload: newOrder });
  };

  const handleNewSearchTerm = newTerm => () => {
    dispatch({ type: types.FILTERS_UPDATE_SEARCH_TERM, payload: newTerm });
  };

  return (
    <ProductsFilter
      orderBy={orderBy}
      searchTerm={searchTerm}
      handleFilterClick={handleFilterClick}
      handleNewSearchTerm={handleNewSearchTerm}
    ></ProductsFilter>
  );
};

export default ProductsFilterContainer;
