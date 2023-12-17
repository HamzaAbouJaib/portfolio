import { useEffect, useState } from "react";
import { Skill } from "./Skill";
import SkillModal from "./SkillModal";

const frontPageskills = [
  "HTML/CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "TailwindCSS",
  "MongoDB",
  "SCSS",
  "Webpack",
];

export const AboutPage = () => {
  const [showSkillsModal, setShowSkillsModal] = useState(false);

  useEffect(() => {
    if (showSkillsModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showSkillsModal]);

  return (
    <section id="about" className="pt-[5.5rem] py-5 md:px-10 px-7 mb-10">
      <h1 className="text-3xl font-semibold">About</h1>
      <div className="flex mt-2 w-[15%] border border-blue-700" />
      <div className="grid lg:grid-cols-10 mt-10 lg:gap-x-20 lg:gap-y-12 justify-between">
        <div className="flex justify-between flex-col lg:col-span-5 max-lg:mr-2">
          <h3 className="text-2xl font-semibold mb-3">Who am I?</h3>
          <p className="text-xl mb-3 break-words">
            I am a third-year software engineering student at McMaster
            University. My passion lies in the field of web and app development.
          </p>
          <br />
          <p className="mb-3 text-xl break-words">
            Since taking my first programming course in high school, I have been
            captivated by the inner workings of the web and the fascinating
            world of technology. It was during those early experiences that I
            discovered my love for programming and the web.
          </p>
          <p className="text-xl break-words">
            I am driven by the desire to create meaningful digital experiences
            that make a difference in people's lives. The opportunity to
            positively impact users through intuitive design, seamless
            functionality, and engaging interactions motivates me every day.
          </p>
        </div>
        <div className="flex flex-col justify-between col-span-5 max-lg:mt-10">
        <div>
            <h3 className="text-2xl font-semibold mb-3">Technical Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 2xl:grid-cols-4 gap-3">
              {frontPageskills.map((skill) => (
                <Skill name={skill} />
              ))}
            </div>
            {showSkillsModal && (
              <SkillModal setShowSkillsModal={setShowSkillsModal} />
            )}
          </div>
          <div className="flex flex-wrap gap-5 mt-10">
            <button
              className="btn-secondary"
              onClick={() => setShowSkillsModal(true)}
            >
              View All Skills
            </button>
            <a
              href="../public/Resume.pdf"
              target="_blank"
              className="resume-btn-secondary"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
