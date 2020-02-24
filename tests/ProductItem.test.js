import React from "react";
import { render } from "enzyme";
import ProductItem from "../components/ProductsList/ProductItem/ProductItem.js";

describe("ProductItem", () => {
  const props = {
    name: "iPhone 8",
    cost: 800,
    category: "Phones",
    img: {
      url: "https://aerolab-challenge.now.sh/images/iPhone8-x1.png",
      hdUrl: "https://aerolab-challenge.now.sh/images/iPhone8-x2.png"
    },
    redeem: () => {},
    points: 5000,
    isHovered: false,
    isRedeeming: false,
    setHover: () => {}
  };

  it("renders without crashing", () => {
    render(<ProductItem {...props} />);
  });
  it("matches snapshot", () => {
    const component = render(<ProductItem {...props} />);
    expect(component).toMatchSnapshot();
  });
});
