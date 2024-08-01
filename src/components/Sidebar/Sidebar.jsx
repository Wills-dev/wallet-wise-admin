import React from "react";
import { Link, NavLink } from "react-router-dom";

import { useStateContext } from "../../context/ContextProvider";
import { links } from "../../contants";

import { SiShopware } from "react-icons/si";
import { IoIosArrowForward } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink = `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 `;

  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 text-md dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ width: activeMenu ? "250px" : "70px", opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: [0.61, 1, 0.88, 1],
        }}
        className=" bg-white h-screen py-4 text-white fixed shadow-xl z-30 sidebar dark:bg-secondary-dark-bg"
      >
        <div
          className={` w-full relative h-full flex flex-col ${
            activeMenu ? "ml-3" : "ml-0"
          }`}
        >
          <>
            <div className="flex items-center">
              <Link
                to="/overview"
                onClick={handleCloseSideBar}
                className={`first-letter:first-line:items-center gap-3 ml-3 mt-6 flex text-xl font-extrabold tracking-tight dark:text-white `}
                style={{ color: currentColor }}
              >
                <span className="text-xl">
                  <SiShopware />
                </span>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeMenu ? 1 : 0 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.61, 1, 0.88, 1],
                  }}
                >
                  Wallet wise
                </motion.p>
              </Link>
              <motion.button
                initial={{ rotate: 0 }}
                animate={{ rotate: activeMenu ? 180 : 0 }}
                onClick={() => setActiveMenu((prev) => !prev)}
                style={{ backgroundColor: currentColor }}
                className="rounded-full absolute -right-1 outline-none p-2"
              >
                <IoIosArrowForward />
              </motion.button>
            </div>
            <div className="mt-10 flex-1 h-full overflow-y-auto">
              {links.map((items) => (
                <div key={items.links}>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeMenu ? 1 : 0 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.61, 1, 0.88, 1],
                    }}
                    className="text-gray-400 m-3 mt-4 "
                  >
                    {items.title}
                  </motion.p>
                  {items.links.map((link) => (
                    <NavLink
                      to={`/${link.name}`}
                      key={link.name}
                      onClick={handleCloseSideBar}
                      style={({ isActive }) => ({
                        backgroundColor: isActive && currentColor,
                      })}
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                    >
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{
                          fontSize: activeMenu ? "14px" : "20px",
                          opacity: 1,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.61, 1, 0.88, 1],
                        }}
                        className=""
                      >
                        {" "}
                        {link.icon}
                      </motion.span>

                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: activeMenu ? 1 : 0 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.61, 1, 0.88, 1],
                        }}
                        className="capitalize"
                      >
                        {link.name}
                      </motion.span>
                    </NavLink>
                  ))}
                </div>
              ))}
            </div>
          </>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Sidebar;
