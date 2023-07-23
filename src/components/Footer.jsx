export const Footer = () => {
  return (
    <div className="mt-20 shadow-inner py-6">
      <div className="flex items-center justify-center gap-4 text-[1.75rem]">
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
      <p className="text-center text-lg mt-2">
        Created by Hamza Abou Jaib &copy; 2023
      </p>
    </div>
  );
};
