import React from "react";

import "./HeaderContent.css";
import HeaderItems from "../HeaderItems/HeaderItems";

const HeaderContent = (props) => {
  const { onMenuActiveHandler} = props;

  return (
    <div className="HeaderContent">
      <div className="burger-btn" onClick={onMenuActiveHandler}>
        <div className="dash" />
        <div className="dash" />
        <div className="dash" />
      </div>
      <HeaderItems />
    </div>
  );
};

export default HeaderContent;
