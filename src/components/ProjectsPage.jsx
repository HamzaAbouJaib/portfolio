import myProjects from "../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectsPage = () => {
  return (
    <section id="projects" className="pt-32 py-5 md:px-10 px-7 mb-10">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <div className="flex mt-2 w-[15%] border border-blue-700" />
      <p className="text-lg mt-4">
        For more projects checkout my{" "}
        <a
          href="https://github.com/HamzaAbouJaib"
          className="text-blue-700 hover:underline"
        >
          GitHub
        </a>
        .
      </p>
      <div className="mt-5 mb-5 grid max-md:flex max-md:flex-col max-md:items-center max-[1250px]:grid-cols-2 grid-cols-3 gap-y-16 gap-x-12">
        {myProjects.slice(0, 6).map((project) => (
          <ProjectCard {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
