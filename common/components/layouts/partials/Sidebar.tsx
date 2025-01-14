"use client";

import clsx from "clsx";
import React, { useEffect, useState } from "react";
import Profile from "../../sidebar/Profile";
import Breakline from "../../elements/Breakline";
import Navigation from "../../sidebar/Navigation";
import useIsMobile from "@/common/hooks/use-is-mobile";
import ThemeToggle from "../../elements/ThemeToggle";
import useHasMounted from "@/common/hooks/use-has-mounted";

const Sidebar = () => {
  const isMobile = useIsMobile();
  // const [isSticky, setIsSticky] = useState<boolean>(false);

  // const hasMounted = useHasMounted();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sidebar = document.getElementById("sidebar");
  //     if (sidebar) {
  //       const { top } = sidebar.getBoundingClientRect();
  //       setIsSticky(top <= 0);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // if (!hasMounted) return null;

  return (
    <div
      id="sidebar"
      className="sticky top-0 z-10 flex flex-col transition-all duration-300 lg:py-14"
    >
      <Profile />
      {!isMobile && (
        <>
          <Breakline />
          <Navigation />
          <Breakline />
          <ThemeToggle />
        </>
      )}
    </div>
  );
};

export default Sidebar;
