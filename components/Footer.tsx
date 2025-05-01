import { hero } from "@/data";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-12 bg2 text-center sm:text-start">
      <div className="container flex flex-col gap-6 sm:flex-row sm:justify-between max-w-[700px] ">
        <div className="first flex flex-col gap-2">
          <h3 className="text-xl font-bold">{hero.head}</h3>
          <h4 className="text-[14px]">{hero.job}</h4>
          <p className="text-secondary-text text-[12px]">{hero.description}</p>
        </div>
        <div className="second flex flex-col gap-3">
          <h4 className="mobile">+2 01120713673</h4>
          <h4 className="email">cmpunkthebest@gmail.com</h4>
          <h4 className="address">Mansoura-Egypt</h4>
          <div className="icons flex gap-6 justify-center sm:justify-start">
            <Link
              href="https://www.facebook.com/profile.php?id=100006424186664"
              target="_blank"
            >
              <FaFacebook
                className="text-blue-600 hover:text-blue-800"
                size={24}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ahmedhamdy434/"
              target="_blank"
            >
              <FaLinkedinIn
                className="text-blue-700 hover:text-blue-900"
                size={24}
              />
            </Link>
            <Link href="https://github.com/AhmedHamdy434" target="_blank">
              <FaGithub
                className="text-gray-800 hover:text-black dark:text-gray-200 dark:hover:text-white"
                size={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
