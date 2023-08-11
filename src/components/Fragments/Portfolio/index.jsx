import CardComponent from "../Card";
import jobHuntImg from "../../../assets/portfolio/jobhunt.png";
import inGigsImg from "../../../assets/portfolio/ingigs.png";
import elearningImg from "../../../assets/portfolio/elearning.png";
import newsImg from "../../../assets/portfolio/newsletter.png";
import { SectionMotion } from "../../../common/motion/Section";
import { motion } from "framer-motion";

const PortfolioComponent = () => {
  const { section } = SectionMotion;

  return (
    <motion.section
      id="projects"
      className="container max-w-5xl mx-auto flex flex-wrap py-20 overflow-hidden justify-center items-center gap-10"
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
    >
      <div className="text-center text-slate-800 mx-12 md:mx-auto">
        <div className="text-4xl font-bold">Projects</div>
        <div className="md:mx-20 mt-5">
          This showcase of my personal projects that I have worked on
        </div>
      </div>
      <CardComponent
        title="JobHunt"
        tools="Reactjs, Tailwind"
        description="This is my project from Sanbercode Bootcamp, I build the Job Vacancy Website with API that give the users to search the job vacancy."
        thumbnail={jobHuntImg}
        view={"https://jobhunt-withapi.vercel.app/"}
      />
      <CardComponent
        title="InGigs"
        tools="Reactjs, Tailwind"
        description="This is a website for people who wants to exploring Indonesian Artists or Concerts, I build the frontend with React JS and Tailwind CSS."
        thumbnail={inGigsImg}
        view={"https://inigigs.my.id/"}
      />
      <CardComponent
        title="E-Learning"
        tools="Reactjs, MinimalUI"
        description="Website E-Learning for students, teachers, and admin. I participated in this project on slicing the UI design from Figma to React JS with MinimalUI."
        thumbnail={elearningImg}
        view={elearningImg}
      />
      <CardComponent
        title="Newsletter SignUp"
        tools="Reactjs, Tailwind"
        description="I made this project as part of challanges on FrontendMentor. This challanged me with basic form structure, validation, and submission."
        thumbnail={newsImg}
        view={"https://newsletter-signup-erbeliza.vercel.app/"}
      />
    </motion.section>
  );
};

export default PortfolioComponent;
