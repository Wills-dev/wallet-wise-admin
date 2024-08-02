import React from "react";

import { useStateContext } from "@/context/ContextProvider";

import { FiSettings } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

import ThemeSettings from "../ThemeSettings/ThemeSettings";
import NavBar from "../NavBar/NavBar";
import Sidebar from "../Sidebar/Sidebar";

const DashboardLayout = ({ children }) => {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
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
            <div className=" relative">
              <NavBar />
              {children}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DashboardLayout;
