import React from "react";

import  "./Footer.css"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>Search-For-Recipes</span>. Built with{" "}
        <a href="https://reactjs.org/">React</a>
      </p>
    </footer>
  )
}

export default Footer
