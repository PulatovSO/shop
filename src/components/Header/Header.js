import React from "react";
import Search from "./Search";
import HeaderButton from './HeaderButton';
import './Header.css'

const Header = () => {
  return(
    <>
      <header className="header container">
        <img className="logo" src="https://epallet.com/assets/images/epallet-logo-blue.svg" alt="logo" />
        <Search />
        <div className="header-btns">
          <HeaderButton icon="bx bx-envelope-open" text="Orders"/>
          <HeaderButton icon="bx bx-cart-alt" text="Cart"/>
          <HeaderButton icon="bx bx-user" text="Profile"/>
        </div>
      </header>
    </>   
  )  
}

export default Header;