"use client";

import { useEffect, useState } from "react";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "@reduxjs/toolkit";
import { theme } from "../../../store/theme/selectors";
import { setTheme } from "../../../store/theme/themeSlice";
import { AppDispatch } from "../../../store/store";
import { connect, ConnectedProps } from "react-redux";

interface Props extends Connector {}

const ButtonTheme: React.FC<Props> = ({ setTheme: setStorageTheme }) => {
  // const getInitialTheme = () => {
  //   if (typeof window !== "undefined" && window.localStorage) {
  //     const storedPrefs = window.localStorage.getItem("color-theme");
  //     if (typeof storedPrefs === "string") {
  //       return storedPrefs;
  //     }

  //     const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
  //     if (userMedia.matches) {
  //       return "dark";
  //     }
  //   }

  //   return "light";
  // };

  // const [theme, setTheme] = useState(getInitialTheme());
  // const [isChecked, setIsChecked] = useState(false);

  // const rawSetTheme = (theme: string) => {
  //   const root = document.documentElement;
  //   const isDark = theme === "dark";

  //   root.classList.remove(isDark ? "light" : "dark");
  //   root.classList.add(theme);

  //   localStorage.setItem("color-theme", theme);
  // };

  // useEffect(() => {
  //   rawSetTheme(theme);
  //   setIsChecked(theme === "dark" ? true : false);
  // }, [theme]);

  // useEffect(() => {
  //   const userPreference = getInitialTheme();
  //   console.log(userPreference);

  //   setTheme(userPreference);
  // }, []);

  // const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const isChecked = e.target.checked;

  //   setTheme(isChecked ? "dark" : "light");
  // };

  const getInitialTheme = () => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedPrefs = window.localStorage.getItem("color-theme");
      if (typeof storedPrefs === "string") {
        return storedPrefs;
      }

      const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
      if (userMedia.matches) {
        return "dark";
      }
    }

    return "light";
  };

  const [theme, setTheme] = useState(getInitialTheme());
  const [isChecked, setIsChecked] = useState(false);

  const rawSetTheme = (theme: string) => {
    const root = document.documentElement;
    const isDark = theme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);

    localStorage.setItem("color-theme", theme);
  };

  useEffect(() => {
    rawSetTheme(theme);
    setIsChecked(theme === "dark" ? true : false);
  }, [theme]);

  useEffect(() => {
    const userPreference = getInitialTheme();

    setTheme(userPreference);
    setStorageTheme(theme);
  }, []);

  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;

    setTheme(isChecked ? "dark" : "light");
    setStorageTheme(isChecked ? "dark" : "light");
  };

  return (
    <label aria-checked="false" role="switch" className="switch">
      {/* <input type="checkbox" checked={isChecked} onChange={toggleTheme} /> */}
      <input
        type="checkbox"
        checked={theme === "dark" ? true : false}
        onChange={toggleTheme}
      />
      <span className="slider">
        <span className="slider-inner"></span>
      </span>
    </label>
  );
};

const mapStateToProps = createStructuredSelector({
  theme: theme,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  setTheme: bindActionCreators(setTheme, dispatch),
});

const connetcor = connect(mapStateToProps, mapDispatchToProps);
type Connector = ConnectedProps<typeof connetcor>;

export default connetcor(ButtonTheme);
