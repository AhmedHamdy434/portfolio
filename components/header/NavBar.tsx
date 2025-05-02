"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../ui/ResizableNavbar";
import LocaleToggle from "./LocaleToggle";

const NavBar = () => {
  const t = useTranslations("Header");

  const navItems = [
    {
      name: t("skills"),
      link: "#skills",
    },
    {
      name: t("projects"),
      link: "#projects",
    },
    {
      name: t("contact"),
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <NavbarButton className="bg-transparent">
            <ThemeToggle />
          </NavbarButton>
          <NavbarButton variant="primary">
            <LocaleToggle />
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <Link
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </Link>
          ))}
          <div className="flex flex-col gap-4">
            <NavbarButton className="bg-transparent">
              <ThemeToggle />
            </NavbarButton>
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full"
            >
              <LocaleToggle />
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default NavBar;
