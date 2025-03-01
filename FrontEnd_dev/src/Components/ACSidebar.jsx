"use client";
import React from 'react';
import Link from 'next/link';
import {
  FaHome,          // Home icon
  FaShoppingCart,  // Shop icon
  FaHeart,         // Wishlist icon
  FaInfoCircle,    // About Us icon
  FaQuestionCircle // FAQ icon
} from 'react-icons/fa'; // Import icons from react-icons

export default function ACSidebar({ isSidebarVisible, toggleSidebar }) {
  return (
    <>
      {/* Sidebar */}
      <aside
        className={`overflow-scroll fixed top-0 left-0 w-64 bg-[var(--navbg)] h-screen flex flex-col p-4 transform transition-transform duration-300 ${
          isSidebarVisible ? 'translate-x-0' : '-translate-x-full'
        } z-50`}
      >
        {/* Logo */}
        <div className="mb-8">
          <img src="/acs-logo.png" alt="ACS Logo" className="h-16 w-auto m-auto" />
        </div>

        {/* Navigation Links with Icons */}
        <ul className="space-y-4">
          <li>
            <Link href="/" className="flex items-center p-2 hover:bg-[var(--inbg)] rounded-lg transition-colors text-[#E35456]">
              <FaHome className="mr-2" /> {/* Home icon */}
              Home
            </Link>
          </li>
          <li>
            <Link href="/Shop" className="flex items-center p-2 hover:bg-[var(--inbg)] rounded-lg transition-colors text-[#E35456]">
              <FaShoppingCart className="mr-2" /> {/* Shop icon */}
              Shop
            </Link>
          </li>
          <li>
            <Link href="/Wish" className="flex items-center p-2 hover:bg-[var(--inbg)] rounded-lg transition-colors text-[#E35456]">
              <FaHeart className="mr-2" /> {/* Wishlist icon */}
              Wishlist
            </Link>
          </li>
          <li>
            <Link href="/about" className="flex items-center p-2 hover:bg-[var(--inbg)] rounded-lg transition-colors text-[#E35456]">
              <FaInfoCircle className="mr-2" /> {/* About Us icon */}
              About Us
            </Link>
          </li>
          <li>
            <Link href="/faq" className="flex items-center p-2 hover:bg-[var(--inbg)] rounded-lg transition-colors text-[#E35456]">
              <FaQuestionCircle className="mr-2" /> {/* FAQ icon */}
              FAQ
            </Link>
          </li>
        </ul>
      </aside>

      {/* Overlay for blurring the background */}
      {isSidebarVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={toggleSidebar} // Close sidebar when clicking the overlay
        ></div>
      )}
    </>
  );
}