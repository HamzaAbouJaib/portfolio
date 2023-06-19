const ProjectCard = ({ title, desc, image, tech, githubLink, demoLink }) => {
  return (
    <div className="flex flex-col gap-5 w-full bg-blue-500/5">
      <div className="w-full">
        <img src={image} alt={title + " Image"} />
      </div>
      <div className="flex flex-col gap-2 px-7 pb-7">
        <h3 className="text-2xl font-semibold flex items-center gap-4">
          {title}
          <span className="flex gap-2 items-center">
            <a
              href={githubLink}
              target="_blank"
              className="hover:text-blue-500 duration-300 cursor-pointer text-[1.2rem]"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                className="hover:text-blue-500 duration-300 cursor-pointer text-[1.1rem]"
              >
                <i class="fa-solid fa-up-right-from-square"></i>
              </a>
            )}
          </span>
        </h3>
        <p className="text-lg leading-6 mb-2 break-words">{desc}</p>
        <div className="flex gap-2 flex-wrap">
          {tech.map((t) => (
            <span className="bg-blue-500/20 text-blue-600 py-1 px-4 font-semibold">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
