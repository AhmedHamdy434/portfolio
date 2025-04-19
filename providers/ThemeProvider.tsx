"use client";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function CustomThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return <div className="w-screen h-screen bg-black"></div>;
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={false}>
      {children}
    </ThemeProvider>
  );
}
