import React from "react";
import { useStateContext } from "../../context/ContextProvider";
import { MdOutlineCancel } from "react-icons/md";
import { themeColors } from "../../contants";
import { BsCheck } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } =
    useStateContext();

  // @layer utilities {
  //   .padding {
  //     @apply xl:px-[6rem] lg:px-[4rem] sm:px-[2rem] px-3;
  //   }

  //   .padding-l {
  //     @apply xl:pl-[6rem] lg:pl-[4rem] sm:pl-[2rem] pl-3;
  //   }

  //   .padding-x {
  //     @apply xl:px-[2rem] lg:px-[2rem] sm:px-[1rem] px-3;
  //   }

  //   .padding-y {
  //     @apply sm:py-20 py-10;
  //   }

  // module.exports = {
  //   content: ["./src/**/*.{js,jsx,ts,tsx}"],
  //   darkMode: "class",
  //   theme: {
  //     fontFamily: {
  //       display: ["Open Sans", "sans-serif"],
  //       body: ["Open Sans", "sans-serif"],
  //     },
  //     extend: {
  //       fontSize: {
  //         14: "14px",
  //       },
  //       backgroundColor: {
  //         "main-bg": "#FAFBFB",
  //         "main-dark-bg": "#0F0F0F",
  //         "secondary-dark-bg": "#1a1a1e",
  //         "light-gray": "#F7F7F7",
  //         "half-transparent": "rgba(0, 0, 0, 0.5)",
  //       },
  //       borderWidth: {
  //         1: "1px",
  //       },
  //       borderColor: {
  //         color: "rgba(0, 0, 0, 0.1)",
  //       },
  //       width: {
  //         400: "400px",
  //         760: "760px",
  //         780: "780px",
  //         800: "800px",
  //         1000: "1000px",
  //         1200: "1200px",
  //         1400: "1400px",
  //       },
  //       height: {
  //         80: "80px",
  //       },
  //       minHeight: {
  //         590: "590px",
  //       },
  //       backgroundImage: {
  //         "hero-pattern":
  //           "url('https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/welcome-bg-2x-svg.25338f53.svg')",
  //       },
  //     },
  //   },
  //   plugins: [],
  // };

  return (
    <AnimatePresence>
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
    </AnimatePresence>
  );
};

export default ThemeSettings;
