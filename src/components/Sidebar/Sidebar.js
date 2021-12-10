import React, { useState } from "react";
import "./Sidebar.css";
import { SVGIcon } from "../../shared/component/SvgIcon";

export function Sidebar({ children,header }) {
  const [activeListSidebarItem, setActiveListSidebarItem] = useState([]);

  const renderListRootSideBarItem = (child, index) => {
    const { children, ...rest } = child.props;
    return React.cloneElement(child, {
      ...rest,
      index: index,
      key: "rootItem" + index,
      handleClickRootItem,
      isActive: activeListSidebarItem.indexOf(index) !== -1,
    });
  };

  const handleClickRootItem = (index) => {
    if (activeListSidebarItem.indexOf(index) === -1) {
      setActiveListSidebarItem([...activeListSidebarItem, index]);
    } else {
      activeListSidebarItem.splice(
        activeListSidebarItem.findIndex((_index) => _index === index)
      );
      setActiveListSidebarItem([...activeListSidebarItem]);
    }
  };

  const listRootSideBarItem = Array.isArray(children)
    ? children.map(renderListRootSideBarItem)
    : children
    ? [children].map(renderListRootSideBarItem)
    : null;
  return <div className="sidebarContainer">
      {header}
      {listRootSideBarItem}</div>;
}

export const SidebarRootItem = ({
  children,
  index,
  handleClickRootItem,
  label,
  isActive,
}) => {
  const renderSidebarItem = (child, index) => {
    return (
      <div className="sidebarItem" key={"item" + index}>
        {React.cloneElement(child, {})}
      </div>
    );
  };

  const listSidebarItem = Array.isArray(children)
    ? children.map(renderSidebarItem)
    : children
    ? [children].map(renderSidebarItem)
    : null;
  return (
    <div
      className={`sidebarRootItem ${
        isActive && children ? "sidebarRootItemActive" : ""
      }`}
      onClick={() => {
        if (children) {
          handleClickRootItem(index);
        }
      }}
    >
      <div className="sidebarLabel">
        {label}
        <div className="arrowIconContainer">
          {!!children && (
            <SVGIcon
              name="arrow"
              width={20}
              height={20}
              className={`arrowIcon ${isActive ? "arrowIconActive" : ""}`}
              style={{ fill: "#fff" }}
            />
          )}
        </div>
      </div>
      <div
        className={`listChild ${isActive ? "listChildActive" : "listChildDisable"}`}
      >
        {listSidebarItem}
      </div>
    </div>
  );
};
