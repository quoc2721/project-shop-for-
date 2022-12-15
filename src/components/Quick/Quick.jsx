import React from "react";
import "../Quick/quick.css";
import { useState } from "react";

const Quick = ({ item }) => {
  const [selectedImage, setSelectedImage] = useState(""); //default is empty

  //For close PopUp
  const [style, setStyle] = useState("main-container");

  const changeStyle = () => {
    setStyle("main-containerOne");
  };
  return (
    <div className={style}>
      <div className="card-quick" key={item._id}>
        <div className="card-row">
          <div className="card-images">
            <div className="card-top">
              <img src={selectedImage || item.image} alt={item.title} />
            </div>
            <div className="card-bottom">
              <img
                src={item.image}
                onClick={() => setSelectedImage(`${item.image}`)}
                alt={item.title}
              />
              <img
                src={item.image1}
                onClick={() => setSelectedImage(`${item.image1}`)}
                alt={item.title}
              />
              <img
                src={item.image2}
                onClick={() => setSelectedImage(`${item.image2}`)}
                alt={item.title}
              />
              <img
                src={item.image3}
                onClick={() => setSelectedImage(`${item.image3}`)}
                alt={item.title}
              />
            </div>
          </div>
        </div>
        <div className="card-row">
          <div className="first-div div">
            <h2 className="title">{item.title}</h2>
            <p className="category">{item.category}</p>
          </div>
          <div className="second-div div">
            <span className="price">Price: ${item.price}</span>
            <div className="quantity">Quantity: 1</div>
          </div>
          <div className="third-div div">
            <p className="desc">{item.desc}</p>
          </div>
          <div className="fourth-div div">
            {/* {item.countInStock === 0 ? (
              <button className="cart cart-out" disabled>
                Out of stock
              </button>
            ) : (
              <button className="cart">Add to Cart</button>
            )} */}
            <button className="cart">Add to Cart</button>
            <button className="wish">Add to Wish</button>
          </div>
        </div>
      </div>
      <button className="back" onClick={changeStyle}>
        Close
      </button>
    </div>
  );
};

export default Quick;
