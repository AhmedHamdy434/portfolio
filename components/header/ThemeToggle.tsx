"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return;
  return (
    <FontAwesomeIcon
      icon={resolvedTheme === "dark" ? faMoon : faSun}
      className="cursor-pointer px-4 py-2 mx-auto md:text-[24px] text-primary-text"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    />
  );
};

export default ThemeToggle;
