import React from "react";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/ducks/User";

const ProductContainer = props => {
  const dispatch = useDispatch();
  const { redeem } = actions;
  return (
    <Product
      redeem={async () => {
        try {
          const result = await dispatch(redeem(props._id));
          alert(result.error);
        } catch (err) {
          alert(err);
        }
      }}
      {...props}
    ></Product>
  );
};

export default ProductContainer;
