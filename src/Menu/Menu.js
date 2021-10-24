import React, { useState } from "react";

import "./Menu.css";


const items = [
  {
    id: 1,
    name: "Diet",
    title: ["Balanced", "High-fiber", "High-protein", "Low-fat", "Low-carb"],
  },
  {
    id: 2,
    name: "Type Dish",
    title: [
      "Bread",
      "Drinks",
      "Desserts",
      "Egg",
      "Alcohol-coctails",
      "Pancake",
      "Preps",
      "Salad",
      "Sandwishes",
      "Soup",
      "Starter",
    ],
  },
  {
    id: 3,
    name: "Cuisine Types",
    title: [
      "American",
      "Asian",
      "Central Europe",
      "Chinese",
      "French",
      "Indian",
      "Italian",
      "Japanese",
      "Mexican",
      "Nordic",
    ],
  },
  {
    id: 4,
    name: "Meal Types",
    title: ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"],
  },
];
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
