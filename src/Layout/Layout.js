import React, { useState } from "react";
import HeaderContent from "../HeaderContent/HeaderContent";
import img from "../Img/Food.jpg";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";

import classes from "./Layout.module.css";

const Layout = (props) => {

  const [menuActive, setMenuActive] = useState(false);

  const MenuActiveHandler = () => {
    setMenuActive(!menuActive);
  };
  return (
    <div className={classes.Layout}>
      <HeaderContent onMenuActiveHandler={MenuActiveHandler} />
      <main
        style={{
          width: "100%" ,
          height: "100vh",
          background: `url(${img})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          flex: 1,
          overflow: "auto",
        }}
        className={classes.Content}
      >
        {props.children}
      </main>
      <Menu active={menuActive} setActive={setMenuActive} />
      <Footer />
    </div>
  );
};

export default Layout;