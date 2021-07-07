import React, { useState } from "react";
import "./HeaderItems.css";
import items from "../Items/Items";

const HeaderItems = (props) => {
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
    <div className="Navheader">
      {items.map((item) => {
        return (
          <div className="Wrapper" key={item.id}>
            <h3 className="Navitem" onClick={() => toggleHandler(item.id)}>
              {item.name}
            </h3>
            <div
              className={
                openedSectionsIds.includes(item.id) ? "Dropcontent" : "Hide"
              }
            >
              {item.title.map((dropitem, index) => {
                return (
                  <div className="Wrapperdropitem">
                    <a
                      href="#"
                      key={index}
                      className={
                        openedSectionsIds.includes(item.id)
                          ? "Dropitem"
                          : "Hide"
                      }
                    >
                      {dropitem}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      <h1 className="Lable">Gastronome</h1>
    </div>
  );
};

export default HeaderItems;
