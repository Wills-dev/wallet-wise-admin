import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { useStateContext } from "../../context/ContextProvider";
import { links } from "../../contants";

import { SiShopware } from "react-icons/si";
import { IoIosArrowForward } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();

  const [showDropdown, setShowDropdown] = useState(null);
  const [activeTitle, setActiveTitle] = useState("");

  const handleTitleClick = (title) => {
    setActiveTitle((prevTitle) => (prevTitle === title ? "" : title));
  };

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const toggleDropdown = (i) => {
    if (i === showDropdown) {
      setShowDropdown(null);
    } else setShowDropdown(i);
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
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeMenu ? 0 : 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.61, 1, 0.88, 1],
                  }}
                  className={`${activeMenu ? "hidden" : "block"}`}
                >
                  <img
                    src="/assets/images/logo-3.png"
                    alt=""
                    className="w-28 object-contain"
                  />
                </motion.span>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeMenu ? 1 : 0 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.61, 1, 0.88, 1],
                  }}
                >
                  <img
                    src="/assets/images/logo2.png"
                    alt=""
                    className=" h-8 object-contain"
                  />
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
            <div className="mt-5 flex-1 h-full overflow-y-auto">
              {links.map((items, index) => (
                <div key={index}>
                  {items.title === "Services" ? (
                    <motion.div
                      className="flex-center-between cursor-pointer text-gray-400 hover:text-gray-800 transition-all  m-3 mt-4 pr-3"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        display: activeMenu ? "flex" : "none",
                      }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.61, 1, 0.88, 1],
                      }}
                      onClick={() => handleTitleClick(items.title)}
                    >
                      <motion.p className=" ">{items.title}</motion.p>
                      <motion.span
                        className=""
                        initial={{ rotate: 0 }}
                        animate={{
                          rotate:
                            items.title === "Services" &&
                            activeTitle === "Services"
                              ? 90
                              : 0,
                        }}
                      >
                        {" "}
                        <IoIosArrowForward />
                      </motion.span>
                    </motion.div>
                  ) : (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        display: activeMenu ? "block" : "none",
                      }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.61, 1, 0.88, 1],
                      }}
                      className="text-gray-400 m-3 mt-4"
                    >
                      {items.title}
                    </motion.p>
                  )}
                  <AnimatePresence>
                    {items.title === "Services" &&
                      activeTitle === "Services" && (
                        <motion.div
                          initial={{ y: 30, opacity: 0 }}
                          animate={{
                            y: 0,
                            opacity: 1,
                          }}
                          exit={{ y: 30 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.61, 1, 0.88, 1],
                          }}
                        >
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
                                  fontSize: activeMenu ? "18px" : "24px",
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
                                {link.name.replace("-", " ")}
                              </motion.span>
                            </NavLink>
                          ))}
                        </motion.div>
                      )}
                  </AnimatePresence>
                  {items.title !== "Services" && (
                    <div>
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
                              fontSize: activeMenu ? "18px" : "24px",
                              opacity: 1,
                            }}
                            exit={{ opacity: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: [0.61, 1, 0.88, 1],
                            }}
                            className=""
                          >
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
                            {link.name.replace("-", " ")}
                          </motion.span>
                        </NavLink>
                      ))}
                    </div>
                  )}
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
