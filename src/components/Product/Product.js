import React from "react";
import './Product.css';

const pImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBsONxyhrDgnaXqSapSZzYWEJb1gLyyL8McCh6auPZPH8-_C36GxlBjPV5mZuwhwjiMa0&usqp=CAU';

const Product = () => {
  return (
    <div className="product-image-wrap container">
      <img className="product-img" src={pImage} alt="image" />
      <div className="product-images">
        <button className="p-image-btn">
          <img className="p-image" src={pImage} alt="image" />
        </button>
        <button className="p-image-btn">
          <img className="p-image" src={pImage} alt="image" />
        </button>
        <button className="p-image-btn">
          <img className="p-image" src={pImage} alt="image" />
        </button>
        <button className="p-image-btn">
          <img className="p-image" src={pImage} alt="image" />
        </button>
        <button className="p-image-btn">
          <img className="p-image" src={pImage} alt="image" />
        </button>
      </div>
    </div>
  )
}

export default Product;