import React from "react";
import Counter from "./Counter";
import './Description.css'

const Description = () => {
  return (
    <div className="desc">
      <h2 className="heading">Mott's</h2>
      <h3 className="title">Mott's Unsweetened Applesauce</h3>
      <p className="size">Pack size: <span>24/16.90 oz</span></p>
      <p className="desc-text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> 
        Aut quod nemo dignissimos. At sapiente sunt?
      </p>
      <a href="#" className="download">
        <i class='bx bxs-cloud-download'></i>
        Download Spec Sheet
      </a>
      <div className="price-wrap">
        <p className="price">
          <span>$32 <sup>80</sup>/Cs </span>
          <span className="faded">(SO.21/oz)</span>
          <span>$730 <sup>30</sup>/Pit</span>
        </p>
        <p className="size time">Aprox Lead Time: <span>12 Days</span></p>
      </div>
      <Counter />
    </div>
  )
}

export default Description;