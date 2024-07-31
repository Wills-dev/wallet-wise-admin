import React from "react";

import { useStateContext } from "../../context/ContextProvider";

import Sidebar from "../../components/Sidebar/Sidebar";

const Overview = () => {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className=" relative dark:bg-main-dark-bg ">
        <Sidebar />
      </div>
    </div>
  );
};

export default Overview;
