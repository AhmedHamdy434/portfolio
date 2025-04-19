"use client";

import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const NavBar = () => {
  const [navListShow, setNavListShow] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const navBarArray = ["home", "quizes", "about", "contactus"];
  useEffect(() => {
    const handleClickOutSide = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node))
        setNavListShow(false);
    };
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  });
  return (
    <>
      {navListShow && (
        <div className="screen bg-background absolute top-0 left-0 w-screen h-screen opacity-40 z-[15] md:hidden"></div>
      )}
      <FontAwesomeIcon
        className="cursor-pointer md:!hidden"
        onClick={() => setNavListShow(true)}
        icon={faBars}
        size="2xl"
      />
      <div
        ref={navRef}
        className={`${
          navListShow ? "translate-x-0 z-20" : "translate-x-full"
        } flex flex-col absolute top-0 end-0 bg-main items-start transition-transform duration-300 gap-8 py-8 min-w-[80%] h-screen
          md:relative md:flex-row-reverse md:justify-end md:items-center md:translate-x-0 md:transition-none md:gap-0 md:py-0 md:min-w-fit md:h-full md:bg-transparent`}
      >
        <nav
          className="flex flex-col gap-4 text-[22px] w-full overflow-hidden md:flex-row md:justify-center md:items-center md:gap-2 md:w-fit
         md:text-[18px]"
        >
          {navBarArray.map((link) => (
            <Link
              key={link}
              className="nav-link"
              href={`/${link === "home" ? "" : link}`}
              onClick={() => setNavListShow(false)}
            >
              {link}
            </Link>
          ))}

          <ThemeToggle />
        </nav>
      </div>
    </>
  );
};

export default NavBar;
