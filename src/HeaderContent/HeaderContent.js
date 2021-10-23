import React from "react";

<<<<<<< HEAD
import React from "react";
=======
>>>>>>> d406594972a626a942b67d18969f134aebfd8d83
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
