import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import "./Menu.css";

const Menu = ({ active, setActive }) => {
  return (
    <div
      className={active ? "menu active" : "menu"}
      onClick={() => setActive(false)}
    >
      <div className={active ? "blur" : null} />
      <div className="menu-content" onClick={(e) => e.stopPropagation()}>
        <div className="menu-header">Сategory selection</div>
        <Dropdown />
      </div>
    </div>
  );
};

export default Menu;
