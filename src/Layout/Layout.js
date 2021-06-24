import React from "react";
import HeaderContent from "../HeaderContent/HeaderContent";
import img from "../Img/Food.jpg";
import Footer from "../Footer/Footer";

import classes from "./Layout.module.css";

const Layout = (props) => (
  <div className={classes.Layout}>
    <HeaderContent />

    <main
      style={{
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

    <Footer />
  </div>
);

export default Layout;
