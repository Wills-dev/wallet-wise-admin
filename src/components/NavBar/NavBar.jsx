import React, { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { useStateContext } from "../../context/ContextProvider";

import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgDarkMode } from "react-icons/cg";
import { CiGrid41 } from "react-icons/ci";

const NavBar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
    currentMode,
    setIsLargeScreen,
    isLargeScreen,
    setMode,
  } = useStateContext();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMode = () => {
    if (currentMode === "Light") {
      setMode("Dark");
    } else setMode("Light");
  };

  useEffect(() => {
    const handleReSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleReSize);

    handleReSize();

    return () => window.removeEventListener("resize", handleReSize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <AnimatePresence>
      <motion.div className="fixed w-full sm:pt-8  pt-5 top-0 right-0 left-0 z-10 ">
        <motion.div
          initial={{ paddingLeft: "0" }}
          animate={
            isLargeScreen
              ? { paddingLeft: activeMenu ? "250px" : "70px" }
              : { paddingLeft: "70px" }
          }
        >
          <div className="padding-x backdrop-blur">
            {" "}
            <div className="bg-white dark:bg-secondary-dark-bg  dark:text-white  p-4 w-full rounded-md shadow  flex justify-end items-center gap-4">
              <button className="text-2xl relative" onClick={toggleMode}>
                <CgDarkMode />
              </button>
              <button className="text-2xl relative">
                <CiGrid41 />
              </button>
              <button className="text-3xl relative">
                <IoIosNotificationsOutline />
                <span className="block absolute h-2 w-2 rounded-full bg-orange-500 top-1 right-2 border-1 border-white" />
              </button>
              <div
                className="flex items-center gap-2 cursor-pointer relative"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="relative h-10 w-10">
                  <img
                    src="/assets/images/profile-pic.webp"
                    alt="profile-pic"
                    className="w-full h-full object-cover rounded-full"
                  />
                  <span className="block absolute h-3 w-3 rounded-full bg-green-500 bottom-0 right-1 border-1 border-white" />
                </div>
                <p className="text-sm text-gray-500">Hi Wills</p>
                <AnimatePresence>
                  {isOpen && <ProfileDropdown />}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NavBar;
