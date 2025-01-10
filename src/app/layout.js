import { Geist, Geist_Mono, Lisu_Bosa } from "next/font/google";
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
  return <html lang="en">
    <head>
      <title>ACS</title>
    </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        cz-shortcut-listen="true"
      >
          <main className="w-full">
            
            <Nav>  
              <LiSide>
                <div/>
              </LiSide>
            </Nav>
            {children}
          </main>
      </body>
    </html>
  
}
