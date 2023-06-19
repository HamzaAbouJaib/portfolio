import ResumeHeader from "./ResumeHeader";
import ResumeSkills from "./ResumeSkills";

const ResumePage = () => {
  return (
    <div className="pt-32 py-5 md:px-10 px-7 lg:w-[70%] mx-auto mb-10">
      <ResumeHeader />
      <div className="mt-16 grid sm:grid-cols-10 gap-10">
        <div className="w-full col-span-3">
          <h4 className="text-3xl font-semibold">Technical Skills</h4>
          <div className="w-[30%] border-t-2 border-blue-700 mt-4"></div>
        </div>
        <div className="col-span-7 w-full border-t-2 border-slate-400 pt-4">
          <ResumeSkills />
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
