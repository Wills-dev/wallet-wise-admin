import React from "react";
import { useStateContext } from "../../context/ContextProvider";
import { MdOutlineCancel } from "react-icons/md";
import { themeColors } from "../../contants";
import { BsCheck } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } =
    useStateContext();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.4,
        ease: [0.61, 1, 0.88, 1],
      }}
      className="bg-half-transparent w-screen fixed nav-item top-0 right-0 z-50"
    >
      <AnimatePresence>
        <motion.div
          initial={{ x: 80 }}
          animate={{ x: 0 }}
          exit={{ x: 80 }}
          transition={{
            duration: 0.3,
            ease: [0.61, 1, 0.88, 1],
          }}
          className="float-right h-screen dark:text-gray-200 bg-white dark:bg-secondary-dark-bg w-400"
        >
          <div className="flex justify-between items-center p-4 ml-4">
            <p className="font-semibold text-xl">Settings</p>
            <button
              type="button"
              onClick={() => setThemeSettings(false)}
              style={{ color: "rgb(153, 171, 180", borderRadius: "50%" }}
              className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
              <MdOutlineCancel />
            </button>
          </div>
          <div className="flex-col flex border-color p-4 ml-4 border-t-1">
            <p className="font-semibold text-lg">Theme Options</p>
            <div className="mt-4">
              <input
                type="radio"
                id="light"
                name="theme"
                value="Light"
                className="cursor-pointer"
                onChange={(e) => setMode(e.target.value)}
                checked={currentMode === "Light"}
              />
              <label htmlFor="light" className="ml-2 text-md cursor-pointer">
                Light
              </label>
            </div>
            <div className="mt-4">
              <input
                type="radio"
                id="dark"
                name="theme"
                value="Dark"
                className="cursor-pointer"
                onChange={(e) => setMode(e.target.value)}
                checked={currentMode === "Dark"}
              />
              <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
                Dark
              </label>
            </div>
          </div>
          <div className="flex-col flex border-color p-4 ml-4 border-t-1">
            <p className="font-semibold text-lg">Theme Color</p>
            <div className="flex gap-3">
              {themeColors.map((item, index) => (
                <div
                  className="relative mt-2 cursor-pointer flex gap-5 items-center"
                  key={index}
                >
                  <button
                    type="button"
                    className="h-8 w-8 rounded-full cursor-pointer flex items-center justify-center"
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck
                      className={` text-2xl text-white ${
                        item.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default ThemeSettings;
