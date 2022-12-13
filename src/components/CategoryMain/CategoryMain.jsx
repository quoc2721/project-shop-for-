import React from "react";
import { category } from "../../data";
import "../CategoryMain/categoryMain.css";

const CategoryMain = () => {
  return (
    <div className="c-container">
      <div className="c-row">
        {category.map((item) => (
          <div className="c-col" key={item._id}>
            <img src={item.image} alt="" />
            <div className="category-content">
              <p>{item.title}</p>
              <button className="c-btn">Shop Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryMain;
