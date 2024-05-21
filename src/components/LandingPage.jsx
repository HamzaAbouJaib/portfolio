const LandingPage = () => {
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="max-w-[850px] flex flex-col items-center gap-6 px-6 lg:px-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">
          Hamza Abou Jaib
        </h1>
        {/* <h3 className="text-3xl sm:text-4xl font-bold text-center">
          Software Engineering Student
        </h3> */}
        <h5 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-300 border-b-2 border-b-blue-500 pb-5">
          Software Developer
        </h5>
        <p className="text-center text-xl max-w-[40rem]">
          A Software Engineering student at McMaster University with a passion
          for full-stack web development.
        </p>
        <div className="flex items-center justify-center gap-4 text-[2rem]">
          <a
            href="https://www.linkedin.com/in/hamzaaboujaib"
            target="_blank"
            className="fa-brands fa-linkedin hover:text-blue-500 duration-300 cursor-pointer"
          ></a>
          <a
            href="https://github.com/HamzaAbouJaib"
            target="_blank"
            className="fa-brands fa-github hover:text-blue-500 duration-300 cursor-pointer"
          ></a>
          <a
            href="mailto:aboujaih@mcmaster.ca"
            target="_blank"
            className="fa-solid fa-envelope hover:text-blue-500 duration-300 cursor-pointer"
          ></a>
        </div>
        <div className="relative w-full mt-2">
          <a href={window.location.href.includes("hamzaaboujaib.github.io") ? "Resume.pdf" : "../public/Resume.pdf"} target="_blank" className="resume-btn">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
