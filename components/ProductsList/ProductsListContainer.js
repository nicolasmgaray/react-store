import React from "react";
import { useSelector } from "react-redux";
import ProductList from "./ProductsList";
import Spinner from "../UI/Spinner";
import filterFunctions from "../../utils/filters";
const {
  orderByHighest,
  orderByLowest,
  orderByRecent,
  filterByTerm
} = filterFunctions;

const ProductListContainer = () => {
  const { products: productsState, user, filters } = useSelector(
    state => state
  );
  const { fetching, products } = productsState;

  let filteredProducts = filterByTerm(products, filters.searchTerm);

  switch (filters.orderBy) {
    case "lowest":
      filteredProducts = orderByLowest(filteredProducts);
      break;
    case "highest":
      filteredProducts = orderByHighest(filteredProducts);
      break;
    default:
      filteredProducts = orderByRecent(filteredProducts);
      break;
  }

  if (fetching) return <Spinner></Spinner>;
  else
    return (
      <ProductList
        points={user.points}
        products={filteredProducts}
      ></ProductList>
    );
};

export default ProductListContainer;
