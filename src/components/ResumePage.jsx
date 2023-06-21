import ResumeHeader from "./ResumeHeader";
import ResumeSection from "./ResumeSection";
import ResumeSkills from "./ResumeSkills";

const ResumePage = () => {
  return (
    <div className="pt-32 py-5 md:px-10 px-7 lg:w-[70%] mx-auto mb-10">
      <ResumeHeader />
      <ResumeSection title={"Technical Skills"}>
        <ResumeSkills />
      </ResumeSection>
    </div>
  );
};

export default ResumePage;
