const languages = [
  "JavaScript",
  "TypeScript",
  "Java",
  "Python",
  "HTML",
  "CSS",
  "Latex",
  "Bash",
];

const technologies = [
  "React.js",
  "Node.js",
  "Next.js",
  "TailwindCSS",
  "Apache Maven",
  "Flask",
  "MongoDB",
  "RESTful API",
  "Google Firebase",
];

const tools = ["Git", "GitHub", "Stripe", "MS Office", "UML", "Photoshop"];

const ResumeSkills = () => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h5 className="font-semibold text-xl mb-4">Languages</h5>
        <div className="flex gap-3 flex-wrap">
          {languages.map((l) => {
            return (
              <p className="bg-blue-500/20 text-blue-600 py-1 px-4">{l}</p>
            );
          })}
        </div>
      </div>
      <div>
        <h5 className="font-semibold text-xl mb-4">Technologies</h5>
        <div className="flex gap-3 flex-wrap">
          {technologies.map((l) => {
            return (
              <p className="bg-blue-500/20 text-blue-600 py-1 px-4">{l}</p>
            );
          })}
        </div>
      </div>
      <div>
        <h5 className="font-semibold text-xl mb-4">Tools & Libraries</h5>
        <div className="flex gap-3 flex-wrap">
          {tools.map((l) => {
            return (
              <p className="bg-blue-500/20 text-blue-600 py-1 px-4">{l}</p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResumeSkills;
