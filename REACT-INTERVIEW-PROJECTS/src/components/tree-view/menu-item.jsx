import { useState } from "react";
import MenuList from "./menu-list";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function MenuItem({ item, depth = 0 }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handleToggleChildren = (getCurrentLabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  };
  return (
    <li className="menu-item" style={{ "--depth": depth }}>
      <div className="menu">
        <span>{item.label}</span>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <FaMinus color="#fff" size={12} />
            ) : (
              <FaPlus color="#fff" size={12} />
            )}{" "}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} depth={depth + 1} />
      ) : null}
    </li>
  );
}
