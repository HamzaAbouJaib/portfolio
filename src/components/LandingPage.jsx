const LandingPage = () => {
  return (
    <section className="flex items-center justify-center h-screen lg:w-[70%] mx-auto">
      <div className="max-w-[850px] flex flex-col items-center gap-6 px-20 lg:px-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">
          Hamza Abou Jaib
        </h1>
        <h3 className="text-3xl sm:text-4xl font-bold text-center">
          Software Developer
        </h3>
        <h5 className="text-2xl font-bold text-center text-gray-600 border-b-2 border-b-blue-500 pb-5 px-16">
          McMaster diploma
        </h5>
        <p className="text-center text-lg max-sm:hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          sapiente iste itaque dolorum illo hic ex ipsa reprehenderit rem nisi
          labore magni, quasi accusamus ad laudantium, quos sint cumque maiores
          fugiat obcaecati architecto, eveniet ducimus. Laborum corrupti tempore
          placeat rem quod nobis doloribus. Debitis animi ab non, voluptatem eos
          quidem.
        </p>
        <p className="text-center text-lg sm:hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          voluptate nulla debitis minima incidunt possimus.
        </p>
        <div className="flex items-center justify-center gap-4 text-[2rem]">
          <i className="fa-brands fa-linkedin hover:text-blue-500 duration-300 cursor-pointer"></i>
          <i className="fa-brands fa-github hover:text-blue-500 duration-300 cursor-pointer"></i>
          <i className="fa-solid fa-envelope hover:text-blue-500 duration-300 cursor-pointer"></i>
        </div>
        <div className="relative w-full mt-2">
          <a href="../public/Resume.pdf" target="_blank" className="resume-btn">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
