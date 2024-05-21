const ResumePage = () => {
  return (
    <div className="pt-32 py-5 md:px-10 sm:px-7 lg:w-[90%] 2xl:w-[70%] mx-auto mb-10">
      <object
        data={window.location.href.includes("hamzaaboujaib.github.io") ? "../Resume.pdf" : "../public/Resume.pdf"}
        type="application/pdf"
        className="w-full h-screen"
      >
        <p>
          Unable to display PDF file.{" "}
          <a className="font-bold underline" href={window.location.href.includes("hamzaaboujaib.github.io") ? "../Resume.pdf" : "../public/Resume.pdf"} target="_blank">
            Download
          </a>{" "}
          instead.
        </p>
      </object>
    </div>
  );
};

export default ResumePage;
