const ResumePage = () => {
  return (
    <div className="pt-32 py-5 md:px-10 sm:px-7 lg:w-[90%] 2xl:w-[70%] mx-auto mb-10">
      <object
        data="../public/Resume.pdf"
        type="application/pdf"
        className="w-full h-screen"
      >
        <p>
          Unable to display PDF file.{" "}
          <a href="../public/Resume.pdf" target="_blank">
            <strong><u>Download</u></strong>
          </a>{" "}
          instead.
        </p>
      </object>
    </div>
  );
};

export default ResumePage;
