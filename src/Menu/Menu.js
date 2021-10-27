import React, { useState } from "react";

import "./Menu.css";
import items from "../Items/Items";

const Menu = ({ active, setActive, onNavClick }) => {
  const [activeId, setActiveId] = useState();

  const toggleCard = (id) => {
    setActiveId((prevState) => {
      if (id === prevState) {
        return undefined;
      }
      return id;
    });
  };

  return (
    <div
      className={active ? "menu active" : "menu"}
      onClick={() => setActive(false)}
    >
      <div className={active ? "blur" : null} />
      <div className="menu-content" onClick={(e) => e.stopPropagation()}>
        <div className="menu-header">Сategory selection</div>
        <ul className="menu-list">
          {items.map((item) => {
            const isOpen = item.id === activeId;
            return (
              <li onClick={() => toggleCard(item.id)} key={item.id}>
                {item.name}
                {isOpen
                  ? item.title.map((elem, index) => (
                      <li
                        key={index}
                        className="elem-active"
                        onClick={() => onNavClick(elem)}
                      >
                        {elem}
                      </li>
                    ))
                  : ""}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
