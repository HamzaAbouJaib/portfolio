import myProjects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
  return (
    <section id="projects" className="flex pt-40 justify-center min-h-screen">
      <div className="max-w-[750px] flex flex-col items-start gap-6 px-6 lg:px-10">
        <div>
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-green-400">
            Projects
          </h1>
          <div className="flex mt-2 border border-green-400" />
        </div>
        <p>
          Click on images to enlarge them. For more projects checkout my{" "}
          <a
            href="https://github.com/HamzaAbouJaib"
            className="text-green-400 hover:underline"
          >
            GitHub
          </a>
          .
        </p>
        <div className="mb-5 grid max-md:flex max-md:flex-col max-md:items-center max-[1250px]:grid-cols-2 grid-cols-3 gap-y-16 gap-x-12">
          {myProjects.slice(0, 6).map((project) => (
            <ProjectCard {...project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
