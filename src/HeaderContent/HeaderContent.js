import React from "react";
import classes from "./HeaderContent.module.css";
// import img from "../Img/logoApple.png";

const HeaderContent = () => {
  return (
    <div className={classes.HeaderContent}>
      {/* <img src={img} height={50} width={50} /> */}
      <p className={classes.Lable}>Gastronome</p>
    </div>
  );
};

export default HeaderContent;
