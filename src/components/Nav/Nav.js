import React from "react";
import './Nav.css'

const Nav = () => {
  return (
    <ul className="nav-list container">
      <li className="nav-item">
        <a href="#">Food service</a>
      </li>
      <li className="nav-item">
        <a href="#">Health & Beauty</a>
      </li>
      <li className="nav-item">
        <a href="#">Industrial ingredients</a>
      </li>
      <li className="nav-item">
        <a href="#">Beverages</a>
      </li>
      <li className="nav-item">
        <a href="#">Pet supplies</a>
      </li>
      <li className="nav-item nav-active">
        <a href="#">Frozen</a>
      </li>
      <li className="nav-item">
        <a href="#">Cleaning Products</a>
      </li>
    </ul>
  )
}

export default Nav;