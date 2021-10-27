import React from "react";

import "./HeaderContent.css";
import items from "../Items/Items";

const HeaderContent = (props) => {
  const { onMenuActiveHandler, label, onNavClick } = props;

  return (
    <div className="HeaderContent">
      <div className="burger-btn" onClick={onMenuActiveHandler}>
        <div className="dash" />
        <div className="dash" />
        <div className="dash" />
      </div>
      <ul className="nav-links">
        {items.map((link) => {
          return (
            <li key={link.id} onClick={() => onNavClick(link.name)}>
              {link.name}
              {label}
            </li>
          );
        })}
      </ul>
      <p className="Lable">Gastronome</p>
    </div>
  );
};

export default HeaderContent;
