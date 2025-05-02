"use client";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname, useRouter } from "next/navigation";

const LocaleToggle = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.substring(1, 3);
  const toggleLanguage = () => {
    const newLocale = currentLocale === "en" ? "ar" : "en";
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");
    router.replace(newPath);
  };
  return (
    <button className="px-4 py-2" onClick={toggleLanguage}>
      <FontAwesomeIcon icon={faGlobe} />
      {currentLocale === "en" ? " Ar" : " En"}
    </button>
  );
};

export default LocaleToggle;
