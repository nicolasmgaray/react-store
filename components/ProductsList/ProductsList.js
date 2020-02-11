import React from "react";
import { List } from "../../styles/Products";
import ProductItem from "./ProductItem";

const ProductList = ({ products, points }) => (
  <List>
    {products.map(x => (
      <ProductItem key={x._id} {...x} points={points}></ProductItem>
    ))}
  </List>
);

export default ProductList;
