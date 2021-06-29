import React from "react";
import  "./Menu.css";

const Menu = ({active, setActive}) => {
  return (
    <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
      <div className={active ? 'blur' : null} />
      <div className="menu-content" onClick={e => e.stopPropagation()}>
        <h2>
          <a href="#">Diet</a>
        </h2>
        <h2>
          <a href="#">Dish Tipes</a>
        </h2>
        <h2>
          <a href="#">Cuisine Types</a>
        </h2>
      </div>
    </div>
  );
};

export default Menu;
