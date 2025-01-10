'use client';
import React from 'react';

const LiSide = ({ toggleSidebar }) => {
  return (
    <li className="your-custom-class">
      <button
        className="flex items-center justify-center w-10 h-10 border-none bg-transparent cursor-pointer outline-none"
        onClick={toggleSidebar} // Call toggleSidebar when the button is clicked
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          style={{ stroke: 'var(--icon-color)' }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </li>
  );
};

export default LiSide;