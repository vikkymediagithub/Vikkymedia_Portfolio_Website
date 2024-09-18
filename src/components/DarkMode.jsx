// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { BsFillEmojiSunglassesFill, BsEmojiSunglasses } from "react-icons/bs";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement; // access to html element

  // set theme to localStorage and html element
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  });
  return (
    <>
      {theme === "dark" ? (
        <BsFillEmojiSunglassesFill
          className="text-2xl cursor-pointer"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BsEmojiSunglasses
          className="text-2xl cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
};

export default DarkMode;
