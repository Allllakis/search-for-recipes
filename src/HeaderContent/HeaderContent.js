import React, { useState } from "react";
import "./HeaderContent.css";

import pageLinks from "../Links/pageLinks"

const HeaderContent = (props) => {
  const { onMenuActiveHandler,onLabelClick, label } = props;
  
  return (
    <div className="HeaderContent">
      <div className="burger-btn" onClick={onMenuActiveHandler}>
        <div className="dash" />
        <div className="dash" />
        <div className="dash" />
      </div>
      <div className="nav-links">
      {pageLinks.map(link => {
            return (
              <a key={link.id} onClick={onLabelClick}>
                {link.name}
                {label}
              </a>
            )
          })}
      </div>
      <p className="Lable">Gastronome</p>
    </div>
  );
};

export default HeaderContent;
