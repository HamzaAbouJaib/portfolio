import ImageCarousel from "./ImageCarousel";

const ProjectCard = ({ title, desc, images, tech, githubLink, demoLink }) => {
  return (
    <div className="flex flex-col gap-5 w-full bg-blue-500/5">
      <div className="w-full">
        <ImageCarousel images={images} />
      </div>
      <div className="flex flex-col justify-between h-full gap-7 px-7 pb-7">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold leading-none">{title}</h3>
          <p className="text-lg leading-6 mb-2 break-words">{desc}</p>
          <div className="flex gap-2 flex-wrap">
            {tech.map((t) => (
              <span key={t} className="bg-blue-500/20 text-blue-600 py-1 px-4 font-semibold">
                {t}
              </span>
            ))}
          </div>
        </div>

        <span className="flex gap-2 items-center">
          <a href={githubLink} target="_blank" className="btn-secondary">
            GitHub
          </a>
          {demoLink && (
            <a href={demoLink} target="_blank" className="resume-btn-secondary">
              Demo
            </a>
          )}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
