import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { FiSettings } from "react-icons/fi";

import { useStateContext } from "../../context/ContextProvider";

import Sidebar from "@/components/Sidebar/Sidebar";
import ThemeSettings from "@/components/ThemeSettings/ThemeSettings";
import NavBar from "@/components/NavBar/NavBar";

const Overview = () => {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
    screenSize,
    isLargeScreen,
  } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className=" relative bg-main-bg dark:bg-main-dark-bg w-full min-h-screen">
        <div className="fixed right-0 top-[20%] z-[1000]">
          <button
            type="button"
            className="text-xl px-3 py-2 hover:drop-shadow-xl hover:bg-light-gray text-white rounded-l"
            style={{ background: currentColor }}
            onClick={() => setThemeSettings((prev) => !prev)}
          >
            <FiSettings />
          </button>
        </div>
        <Sidebar />
        {themeSettings && <ThemeSettings />}
        <AnimatePresence>
          <motion.div
            className="relative"
            initial={{ paddingLeft: "0" }}
            animate={
              isLargeScreen
                ? { paddingLeft: activeMenu ? "250px" : "70px" }
                : { paddingLeft: "70px" }
            }
          >
            <div className="margin-x relative">
              <NavBar />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Overview;
