
import React, { useState } from "react";
import "./HeaderContent.css";

const HeaderContent = (props) => {
  const { onMenuActiveHandler } = props;
  
  return (
    <div className="HeaderContent">
      <div className="burger-btn" onClick={onMenuActiveHandler}>
        <div className="dash" />
        <div className="dash" />
        <div className="dash" />
      </div>
      <p className="Lable">Gastronome</p>
    </div>
  );
};

export default HeaderContent;
