import React from "react";

const HeaderButton = ({icon, text}) => {
  return (
    <button className="header-btn" type="button">
      <i class={icon}></i>
      {text}
    </button>
  )
}

export default HeaderButton;