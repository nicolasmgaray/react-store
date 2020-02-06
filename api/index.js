import fetch from "isomorphic-unfetch";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTNiMDg1MTcyMzQ3ODAwNmQ0MTAwOTIiLCJpYXQiOjE1ODA5MjcwNTd9.2bqKPhK_C3YN-h95OMEiuwjQSMkyiLmIZ35TGoYy4o8";
const baseUrl = "https://aerolab-challenge.now.sh/";

const fetchParams = (method, data = "") => {
  const body = data ? { body: JSON.stringify(data) } : {};

  return {
    method: method,
    headers: apiHeaders,
    credentials: "same-origin",
    ...body
  };
};

const apiHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${token}`
};

class apiService {
  static async getUser() {
    const userResponse = await fetch(baseUrl + "user/me", fetchParams("GET"));
    const userInfo = await userResponse.json();

    return userInfo;
  }

  static async addpoints(value) {
    const amount =
      value <= 1000
        ? 1000
        : value <= 5000
        ? 5000
        : value <= 7500
        ? 7500
        : value > 7500
        ? 7500
        : 1000;
    const userResponse = await fetch(
      baseUrl + "user/points",
      fetchParams("POST", { amount: amount })
    );
    const userInfo = await userResponse.json();

    return userInfo;
  }

  static async getHistory() {
    const historyResponse = await fetch(
      baseUrl + "user/history",
      fetchParams("GET")
    );
    const history = await historyResponse.json();

    return history;
  }

  static async redeemProduct(productId) {
    const redeemResponse = await fetch(
      baseUrl + "redeem",
      fetchParams("POST", { productId: productId })
    );
    const redeem = await redeemResponse.json();
    return redeem;
  }

  static async getProducts() {
    const productsResponse = await fetch(
      baseUrl + "products",
      fetchParams("GET")
    );
    const products = await productsResponse.json();

    return products;
  }
}

export default apiService;
