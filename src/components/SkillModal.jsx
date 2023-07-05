const SkillModal = ({ setShowSkillsModal }) => {
  return (
    <div
      className="fixed top-0 left-0 z-20 w-full h-full bg-gray-900/80 flex justify-center items-center"
      id="background"
      onClick={(e) => {
        const { target } = e;
        if (target && target.id === "background") setShowSkillsModal(false);
      }}
    >
      <div className="w-[80%] md:w-[50%] max-h-[80%] bg-slate-100 rounded-xl p-10 overflow-scroll">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-semibold">Skills and Technologies</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 cursor-pointer"
            onClick={() => setShowSkillsModal(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SkillModal;
