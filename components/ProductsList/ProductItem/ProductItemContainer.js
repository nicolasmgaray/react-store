import React, { useState } from "react";
import Product from "./ProductItem";
import { useDispatch } from "react-redux";
import { actions } from "../../../redux/ducks/User";
import Swal from "sweetalert2";

const ProductContainer = props => {
  const dispatch = useDispatch();
  const [isRedeeming, setRedeeming] = useState(false);
  const [isHovered, setHover] = useState(false);
  const { redeem } = actions;

  const handleRedeem = async () => {
    try {
      setRedeeming(true);
      const result = await dispatch(redeem(props._id, props.cost));
      if (result.error) throw result.error;
      Swal.fire({
        icon: "success",
        title: result.message
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: err
      });
    } finally {
      setRedeeming(false);
    }
  };

  return (
    <Product
      redeem={handleRedeem}
      isHovered={isHovered} 
      setHover={setHover}
      isRedeeming={isRedeeming}
      {...props}
    ></Product>
  );
};

export default ProductContainer;
