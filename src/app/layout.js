"use client";
import { Geist, Geist_Mono, Lisu_Bosa } from "next/font/google";
import ACSidebar from "@/Components/ACSidebar";
import { useState } from 'react';
import "./globals.css";

import localFont from "next/font/local";
import Nav from "@/Components/Nav";
import LiSide from "@/Components/LiSide";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}){
  const [TogSide, TogIt] = useState(false);

  const toggleSidebar = () => {
    TogIt(!TogSide); // Toggle the sidebar state
  };

  return (
    <html lang="en">
      <head>
        <title>ACS</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        {/* Sidebar */}
        <ACSidebar isSidebarVisible={TogSide} toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <main className="w-full">
          <Nav>
            <LiSide toggleSidebar={toggleSidebar} />
          </Nav>
          {children}
        </main>
      </body>
    </html>
  );
}