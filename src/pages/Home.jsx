import React from "react";
import Banners from "../components/Banners/Banners";
import Navbar from "../components/Navbar/Navbar";
import Slider from "../components/Slider/Slide";
import CategoryMain from "../components/CategoryMain/CategoryMain";
import ProductsHome from "../components/ProductsHome/ProductsHome";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Banners />
      <CategoryMain />
      <ProductsHome />
    </div>
  );
};

export default Home;
