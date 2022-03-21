import { React, useState } from "react";
import "./product.css";
import React from "react";

export default function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>

      <img src={image} alt="" />

      <button>Add to Basket</button>
    </div>
  );
}
