import ProductsFilter from "./ProductsFilter";
import { useSelector, useDispatch } from "react-redux";
import { types } from "../../redux/ducks/Filters";

const ProductsFilterContainer = () => {
  const { orderBy, searchTerm } = useSelector(state => state.filters);
  const dispatch = useDispatch();

  const sortTypes = [
    { text: "Most Recent", value: "recent" },
    { text: "Lowest price", value: "lowest" },
    { text: "Highest price", value: "highest" }
  ];

  const handleFilterClick = newOrder => () => {
    dispatch({ type: types.FILTERS_UPDATE_ORDER, payload: newOrder });
  };

  const handleNewSearchTerm = event => {
    const newTerm = event.target.value;
    dispatch({ type: types.FILTERS_UPDATE_SEARCH_TERM, payload: newTerm });
  };

  return (
    <ProductsFilter
      sortTypes={sortTypes}
      orderBy={orderBy}
      searchTerm={searchTerm}
      handleFilterClick={handleFilterClick}
      handleNewSearchTerm={handleNewSearchTerm}
    ></ProductsFilter>
  );
};

export default ProductsFilterContainer;
