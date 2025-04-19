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
      className="cursor-pointer ps-6 me-auto md:text-[24px] md:ps-0"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    />
  );
};

export default ThemeToggle;
