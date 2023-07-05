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
  "Git",
  "GitHub",
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
    <section id="about" className=" py-5 md:px-10 px-7 mb-10">
      <h1 className="text-3xl font-semibold">About</h1>
      <div className="flex mt-2 w-[15%] border border-blue-700" />
      <div className="grid lg:grid-cols-2 mt-10 gap-32 max-xl:w-[80%] m-auto">
        <div className="flex justify-between flex-col">
          <h3 className="text-2xl font-semibold mb-5">Who am I?</h3>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            repellat dicta obcaecati a quis voluptatem quo nam ipsam fugiat
            impedit deserunt sit quisquam maiores aliquam ut quasi quidem, et
            dolores?
          </p>
          <br />
          <p className="mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ipsa
            expedita dicta quis delectus. Dolorum odit delectus corporis
            temporibus quidem.
          </p>
          <a
            href="../public/Resume.pdf"
            target="_blank"
            className="resume-btn-secondary"
          >
            Download Resume
          </a>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            <div className="grid grid-cols-3 gap-y-5">
              {frontPageskills.map((skill) => (
                <Skill name={skill} />
              ))}
            </div>
          </div>
          {showSkillsModal && (
            <SkillModal setShowSkillsModal={setShowSkillsModal} />
          )}
          <button
            className="btn-secondary"
            onClick={() => setShowSkillsModal(true)}
          >
            View All Skills
          </button>
        </div>
      </div>
    </section>
  );
};
