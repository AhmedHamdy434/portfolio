import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiMui,
  SiVite,
} from "react-icons/si";
import { InfiniteMovingCards } from "./ui/Infinite-MovingCards";
const iconWidth = "w-[40px] h-[40px]";

export default function IconSlider() {
  return (
    <div className="py-25">
      <div className="container">
        <h1 className="text-xl md:text-4xl font-bold mb-8" id="skills">
          My Skills
        </h1>
        <InfiniteMovingCards items={icons} speed="fast" />;
      </div>
    </div>
  );
}

const icons = [
  {
    icon: <FaReact className={`text-cyan-400 ${iconWidth}`} />,
    name: "React",
  },
  {
    icon: <SiNextdotjs className={`text-black dark:text-white ${iconWidth}`} />,
    name: "Next.js",
  },
  {
    icon: <FaHtml5 className={`text-orange-500 ${iconWidth}`} />,
    name: "HTML",
  },
  { icon: <FaCss3Alt className={`text-blue-600 ${iconWidth}`} />, name: "CSS" },
  {
    icon: <FaJsSquare className={`text-yellow-400 ${iconWidth}`} />,
    name: "JavaScript",
  },
  {
    icon: <SiTypescript className={`text-blue-500 ${iconWidth}`} />,
    name: "TypeScript",
  },
  {
    icon: <SiTailwindcss className={`text-sky-400 ${iconWidth}`} />,
    name: "Tailwind CSS",
  },
  {
    icon: <SiFirebase className={`text-orange-400 ${iconWidth}`} />,
    name: "Firebase",
  },
  {
    icon: <SiMui className={`text-blue-500 ${iconWidth}`} />,
    name: "MUI",
  },
  { icon: <FaGitAlt className={`text-red-500 ${iconWidth}`} />, name: "Git" },
  {
    icon: <FaGithub className={`text-black dark:text-white ${iconWidth}`} />,
    name: "GitHub",
  },
  {
    icon: <FaBootstrap className={`text-purple-600 ${iconWidth}`} />,
    name: "Bootstrap",
  },
  {
    icon: <SiVite className={`text-purple-400 ${iconWidth}`} />,
    name: "Vite",
  },
];
