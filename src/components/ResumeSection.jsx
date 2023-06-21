const ResumeSection = ({ title, children }) => {
  return (
    <div className="mt-16 grid sm:grid-cols-10 gap-10">
      <div className="w-full col-span-3">
        <h4 className="text-3xl font-semibold">{title}</h4>
        <div className="w-[30%] border-t-2 border-blue-700 mt-4"></div>
      </div>
      <div className="col-span-7 w-full border-t-2 border-slate-400 pt-4">
        {children}
      </div>
    </div>
  );
};

export default ResumeSection;
