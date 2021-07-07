import React, { useState } from "react";
import "./Dropdown.css";
import items from "../Items/Items";

const Dropdown = () => {
  const [openedSectionsIds, setOpenedSectionsIds] = useState([]);

  const toggleHandler = (sectionId) => {
    if (openedSectionsIds.includes(sectionId)) {
      setOpenedSectionsIds((prevState) =>
        prevState.filter((item) => item !== sectionId)
      );
    } else {
      setOpenedSectionsIds((prevState) => [...prevState, sectionId]);
    }
  };

  return (
    <div className="dropdown">
      {items.map((item) => {
        return (
          <div className="wrapper" key={item.id}>
            <h2 className="dropheader" onClick={() => toggleHandler(item.id)}>
              {item.name}
            </h2>
            <div className="dropcontent">
              {item.title.map((dropitem, index) => {
                return (
                  <a
                    href="#"
                    key={index}
                    className={
                      openedSectionsIds.includes(item.id) ? "dropitem" : "hide"
                    }
                  >
                    {dropitem}
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dropdown;
