"use-client"
import React, { useEffect, useState } from 'react';
export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  useEffect(()=>{
    
    document.documentElement.setAttribute('data-theme', 'dark');
  },[]);
  function toggleTheme() {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
        localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');
    }else{
      localStorage.setItem('theme', 'light');
      document.documentElement.setAttribute('data-theme', 'light');
    }
    
  };


  return (
    <button
      onClick={toggleTheme}
      className="flex items-center p-2 bg-transparent rounded cursor-pointer"
    >
      {isDarkMode ? (
        <svg
        style={{ stroke: 'var(--icon-color)' ,fill: 'none' }} 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
      ) : (
        <svg
          style={{ stroke: 'var(--icon-color)' ,fill: 'none' }} 
          className="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2M12 20v2M4.22 4.22l1.41 1.41M18.36 18.36l1.41 1.41M2 12h2M20 12h2M4.22 19.78l1.41-1.41M18.36 5.64l1.41-1.41" />
        </svg>
      )}
    </button>
  );
};

