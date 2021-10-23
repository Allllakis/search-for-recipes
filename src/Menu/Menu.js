import React, { useState } from "react";

import "./Menu.css";

const Menu = ({ active, setActive }) => {
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
                {isOpen ? item.title.map(elem => <a href="#" className="elem-active">{elem}</a>) : ""}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
