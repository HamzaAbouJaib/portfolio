import { useEffect, useState } from "react";
import { Skill } from "./Skill";
import SkillModal from "./SkillModal";

const frontPageskills = [
  "HTML/CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "MySQL",
  "MongoDB",
  "Webpack",
  "Git",
  "Linux",
];

const LandingPage = () => {
  const [showSkillsModal, setShowSkillsModal] = useState(false);

  useEffect(() => {
    if (showSkillsModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showSkillsModal]);

  return (
    <section className="flex pt-40 justify-center min-h-screen">
      <div className="max-w-[750px] flex flex-col items-start gap-6 px-6 lg:px-10">
        <div>
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-green-400">
            Hamza Abou Jaib
          </h1>
          {/* <h3 className="text-3xl sm:text-4xl font-bold text-center">
          Software Engineering Student
        </h3> */}
          <h5 className=" text-gray-800 dark:text-gray-500">
            Software Engineering Student
          </h5>
        </div>
        <div className="flex flex-col gap-4 break-words">
          <p className="text-lg text-gray-800 dark:text-gray-400">
            A Software Engineering student at McMaster University with a passion
            for full-stack web development.
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-400">
            I am a third-year software engineering student at McMaster
            University. My passion lies in the field of web and app development.
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-400">
            Since taking my first programming course in high school, I have been
            captivated by the inner workings of the web and the fascinating
            world of technology. It was during those early experiences that I
            discovered my love for programming and the web.
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-400">
            I am driven by the desire to create meaningful digital experiences
            that make a difference in people's lives. The opportunity to
            positively impact users through intuitive design, seamless
            functionality, and engaging interactions motivates me every day.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-3">Technical Skills</h3>
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono">
            {frontPageskills.map((skill) => (
              <Skill name={skill} key={skill} />
            ))}
            <div className="flex items-baseline gap-1 cursor-pointer border-b border-yellow-300 border-opacity-0 hover:border-opacity-100 transition-all duration-300 ease-in">
              <i className="fa-solid text-yellow-300">&#128193;</i>
              <p
                className="text-slate-800 dark:text-gray-300"
                onClick={() => setShowSkillsModal(true)}
              >
                View More
              </p>
            </div>
          </div>
          {showSkillsModal && (
            <SkillModal setShowSkillsModal={setShowSkillsModal} />
          )}
        </div>
        {/* <div className="flex flex-wrap gap-5 mt-2 font-mono">
          <button
            className="btn-secondary"
            onClick={() => setShowSkillsModal(true)}
          >
            View All Skills
          </button>
          <a
            href={
              window.location.href.includes("hamzaaboujaib.github.io")
                ? "Resume.pdf"
                : "../public/Resume.pdf"
            }
            target="_blank"
            className="resume-btn-secondary"
          >
            Download Resume
          </a>
        </div> */}

        {/* <div className="flex items-center justify-center gap-4 text-[2rem]">
          <a
            href="https://www.linkedin.com/in/hamzaaboujaib"
            target="_blank"
            className="fa-brands fa-linkedin hover:text-blue-500 duration-300 cursor-pointer"
          ></a>
          <a
            href="https://github.com/HamzaAbouJaib"
            target="_blank"
            className="fa-brands fa-github hover:text-blue-500 duration-300 cursor-pointer"
          ></a>
          <a
            href="mailto:aboujaih@mcmaster.ca"
            target="_blank"
            className="fa-solid fa-envelope hover:text-blue-500 duration-300 cursor-pointer"
          ></a>
        </div>
        <div className="relative w-full mt-2">
          <a
            href={
              window.location.href.includes("hamzaaboujaib.github.io")
                ? "Resume.pdf"
                : "../public/Resume.pdf"
            }
            target="_blank"
            className="resume-btn"
          >
            Download Resume
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default LandingPage;
