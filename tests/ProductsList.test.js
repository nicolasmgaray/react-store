import React from "react";
import { shallow } from "enzyme";
import ProductsList from "../components/ProductsList/ProductsList.js";

describe("ProductsList", () => {
  const props = {
    points: 5000,
    products: [
      {
        _id: "5a0b35c1734d1d08bf7084c3",
        name: "iPhone 8",
        cost: 800,
        category: "Phones",
        img: {
          url: "https://aerolab-challenge.now.sh/images/iPhone8-x1.png",
          hdUrl: "https://aerolab-challenge.now.sh/images/iPhone8-x2.png"
        }
      },
      {
        _id: "5a0b35d7734d1d08bf7084c9",
        name: "Nintendo Switch 32GB",
        cost: 300,
        category: "Gaming",
        img: {
          url: "https://aerolab-challenge.now.sh/images/Switch-x1.png",
          hdUrl: "https://aerolab-challenge.now.sh/images/Switch-x2.png"
        }
      }
    ]
  };

  it("renders without crashing", () => {
    shallow(<ProductsList {...props} />);
  });
  it("matches snapshot", () => {
    const component = shallow(<ProductsList {...props} />);
    expect(component).toMatchSnapshot();
  });
});
