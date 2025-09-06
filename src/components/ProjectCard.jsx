import ImageCarousel from "./ImageCarousel";

const ProjectCard = ({ title, desc, images, tech, githubLink, demoLink }) => {
  return (
    <div className="flex flex-col gap-5 w-full bg-slate-500/10 shadow-md shadow-gray-800 rounded-xl">
      {/* <div className="w-full">
        <ImageCarousel images={images} />
      </div> */}
      <div className="flex flex-col justify-between h-full gap-3 px-4 py-3">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold font-sans leading-none pb-2">
            {title}
          </h3>
          {/* <p className="text-lg leading-6 mb-2 break-words">{desc}</p> */}
          <div className="flex gap-2 flex-wrap text-xs font-mono">
            {tech.map((t) => (
              <span
                key={t}
                className="bg-green-900/40 text-green-400 py-1 px-2 font-semibold"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <span className="flex gap-2 items-center">
          <a
            href={githubLink}
            target="_blank"
            className="fa-brands fa-github hover:text-green-400 duration-300 cursor-pointer text-xl"
          ></a>
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              className="fa-solid fa-globe hover:text-green-400 duration-300 cursor-pointer text-xl"
            ></a>
          )}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
