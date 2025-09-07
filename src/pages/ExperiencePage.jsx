const ExperiencePage = () => {
  return (
    <section id="experience" className="flex pt-40 justify-center min-h-screen">
      <div className="max-w-[750px] xl:max-w-[950px] flex flex-col items-start gap-6 px-6 lg:px-10">
        <div>
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-green-400">
            Experience
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
        <div className="mb-5 grid max-md:flex max-md:flex-col max-md:items-center grid-cols-2 gap-16">
          Experience
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
