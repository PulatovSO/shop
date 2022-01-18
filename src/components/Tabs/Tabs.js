import React from "react";
import './Tabs.css'

const Tabs = () => {
  return (
    <div className="tabs container">
      <div className="tabs-wrap">
      <a href="#" className="tab">
        Frozen 
        <i class='bx bx-chevron-right'></i>
      </a>
      <a href="#" className="tab">
        Juice
        <i class='bx bx-chevron-right'></i>  
      </a>
      <a className="tab">
        Mott's Unsweetened Applesauce 
      </a>
      </div>
      <a href="#" className="return">
        <i class='bx bx-arrow-back'></i>
        back
      </a>
    </div>
  )
}

export default Tabs;