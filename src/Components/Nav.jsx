"use client"

import { Children, ReactNode } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Nav({children}) {
  return (<div className="navABS">
    <div className="grow-[0] shrink-[0] basis-[0] content-center m-[20px]">
        {children}
    </div>
    <div className="grow-[1] shrink-[1] basis-[1]"></div>
    <div className="grow-[0] shrink-[0] basis-[0] content-center">
        <img src="/acs-logo.png" className="h-[76px]"/>
    </div>
    <div className="grow-[1] shrink-[1] basis-[1]"></div>
    <div className="grow-[0] shrink-[0] basis-[0] content-center mr-2">
        <ThemeToggle/>
    </div>
    <div className="grow-[0] shrink-[0] basis-[0] content-center m-[20px]">
        <span>
            <svg width="19" height="24" viewBox="0 0 19 24" xmlns="http://www.w3.org/2000/svg" 
          style={{ stroke: 'var(--icon-color)' ,fill: 'var(--icon-color)' }} >
                <path fillRule="evenodd" clipRule="evenodd" d="M5.70231 6.45833C5.70231 4.25818 7.48589 2.47461 9.68604 2.47461C11.8862 2.47461 13.6698 4.25818 13.6698 6.45833C13.6698 8.65848 11.8862 10.4421 9.68604 10.4421C7.48589 10.4421 5.70231 8.65848 5.70231 6.45833ZM9.68604 0.775391C6.54744 0.775391 4.0031 3.31973 4.0031 6.45833C4.0031 9.59694 6.54744 12.1413 9.68604 12.1413C12.8246 12.1413 15.369 9.59694 15.369 6.45833C15.369 3.31973 12.8246 0.775391 9.68604 0.775391ZM2.0773 20.1528C2.0773 18.3771 3.47528 16.9746 5.15477 16.9746H14.2173C15.8968 16.9746 17.2947 18.3771 17.2947 20.1528V21.3171H2.0773V20.1528ZM5.15477 15.2754C2.49653 15.2754 0.378082 17.4795 0.378082 20.1528V22.1667C0.378082 22.6359 0.758465 23.0163 1.22769 23.0163H18.1444C18.6136 23.0163 18.994 22.6359 18.994 22.1667V20.1528C18.994 17.4795 16.8755 15.2754 14.2173 15.2754H5.15477Z"/>
            </svg>
        </span>
    </div>
  </div>
  );
}
