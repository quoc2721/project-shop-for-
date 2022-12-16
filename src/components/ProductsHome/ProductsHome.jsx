import React, { useEffect, useReducer } from "react";
import axios from "axios";
import ProductHome from "./ProductHome";
import "../ProductsHome/productsHome.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const ProductsHome = () => {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: ``,
  });

  // const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCESS", payload: result.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: error.message });
      }
    };
    fetchData();
  });
  return (
    <div className="hps-container">
      <h2>Latest Products</h2>
      <div className="hps-row">
        {products.slice(-8).map((item) => (
          <ProductHome item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsHome;
