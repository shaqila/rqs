import reactIcon from "../../../assets/react.svg";
import tailwindIcon from "../../../assets/tailwind-css-icon.webp";
import nextIcon from "../../../assets/next-js-icon.png";
import jsIcon from "../../../assets/js-icon.png";
import htmlIcon from "../../../assets/html.png";
import cssIcon from "../../../assets/css.png";
import phpIcon from "../../../assets/php.svg";
import laravelIcon from "../../../assets/laravel.png";
import bootstrapIcon from "../../../assets/bootstrap_logo.svg.png";
import gitIcon from "../../../assets/git.png";
import muiIcon from "../../../assets/mui-logo.png";
import mysqlIcon from "../../../assets/mysql.svg";
import { motion } from "framer-motion";
import { SectionMotion } from "../../../common/motion/Section";

export const SkillCard = () => {
  const { section } = SectionMotion;
  const skill = [
    { title: "HTML", icon: htmlIcon, level: "Advanced" },
    { title: "CSS", icon: cssIcon, level: "Advanced" },
    { title: "Javascript", icon: jsIcon, level: "Advanced" },
    { title: "React Js", icon: reactIcon, level: "Intermediate" },
    { title: "Tailwind", icon: tailwindIcon, level: "Intermediate" },
    { title: "Bootstrap", icon: bootstrapIcon, level: "Intermediate" },
    { title: "PHP", icon: phpIcon, level: "Intermediate" },
    { title: "Laravel", icon: laravelIcon, level: "Intermediate" },
    { title: "MySQL", icon: mysqlIcon, level: "Intermediate" },
    { title: "Git", icon: gitIcon, level: "Intermediate" },
    { title: "Material UI", icon: muiIcon, level: "Basic" },
    { title: "Next Js", icon: nextIcon, level: "Basic" },
  ];

  return (
    <motion.section
      id="techstack"
      className="container max-w-5xl mx-auto flex flex-col py-20 overflow-hidden justify-center items-center gap-5"
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
    >
      <div className="text-center text-slate-800 mx-12 md:mx-auto">
        <div className="text-4xl font-bold">Tech Stack</div>
        <div className="md:mx-20 mt-5">
          Here are a few technologies stack that I have been working with
          recently
        </div>
      </div>

      <div className="mx-8 grid grid-cols-2 md:grid-cols-6 gap-8">
        {skill.map(({ title, icon, level }) => (
          <div key={title} className="relative group">
            <div className="w-[100px] h-[120px] rounded-xl overflow-hidden shadow-md bg-white flex flex-col justify-center items-center backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100 cursor-pointer hover:scale-105">
              <img className="w-[50px] rounded p-2" src={icon} alt={title} />
              <div className="font-semibold text-slate-800 text-sm">
                {title}
              </div>
              <div className="font-light mt-2 text-slate-800 text-[12px]">
                {level}
              </div>
              <div className="absolute bg-blue-100 p-1 px-3 rounded-md transition-opacity duration-200 opacity-0 bottom-full left-1/2 transform -translate-x-1/2 group-hover:opacity-100">
                HTML is the standard markup language for Web pages.
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};
