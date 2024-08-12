'use client';

import {useEffect, useState} from 'react';

const ButtonTheme = () => {
  const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedPrefs = window.localStorage.getItem('color-theme');
      if (typeof storedPrefs === 'string') {
        return storedPrefs;
      }

      const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
      if (userMedia.matches) {
        return 'dark';
      }
    }

    return 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme());
  const [isChecked, setIsChecked] = useState(false);

  const rawSetTheme = (theme: string) => {
    const root = document.documentElement;
    const isDark = theme === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(theme);

    localStorage.setItem('color-theme', theme);
  };

  useEffect(() => {
    rawSetTheme(theme);
    setIsChecked(theme === 'dark' ? true : false);
  }, [theme]);

  useEffect(() => {
    const userPreference = getInitialTheme();
    setTheme(userPreference);
  }, []);

  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;

    setTheme(isChecked ? 'dark' : 'light');
  };

  return (
    <label aria-checked="false" role="switch" className="switch">
      <input type="checkbox" checked={isChecked} onChange={toggleTheme} />
      <span className="slider">
        <span className="slider-inner"></span>
      </span>
    </label>
  );
};

export default ButtonTheme;
