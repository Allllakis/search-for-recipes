import React from "react";

import img from "../Img/Food.jpg";
import Footer from "../Footer/Footer";

import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={classes.Layout}>
      <main
        style={{
          width: "100%",
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

      <Footer />
    </div>
  );
};

export default Layout;
