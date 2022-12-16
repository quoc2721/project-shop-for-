import React from "react";
import "./productShop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const ProductShop = ({ item }) => {
  return (
    <div className="ps-card">
      <div className="card-header">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="card-body">
        <h3 className="title">{item.title}</h3>
        <span>${item.price}</span>
      </div>
      <div className="card-footer">
        <button>
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button>
          <FontAwesomeIcon icon={faShoppingBag} />
        </button>
      </div>
    </div>
  );
};
export default ProductShop;
