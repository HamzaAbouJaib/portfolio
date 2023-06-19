const ResumeHeader = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold">Hamza Abou Jaib</h1>
      <div className="w-full flex justify-end">
        <div className="grid grid-cols-2 xl:flex xl:flex-wrap gap-y-3 xl:gap-10 w-max border-t-2 border-slate-400 pt-5 mt-5">
          <div className="resume-social">
            <i class="fa-solid fa-square-phone"></i>
            <div>
              <p>Phone</p>
              <a className="cursor-default">123 456-7890</a>
            </div>
          </div>
          <div className="resume-social">
            <i className="fa-solid fa-envelope"></i>
            <div>
              <p>Email</p>
              <a className="cursor-default">someone@example.com</a>
            </div>
          </div>
          <div className="resume-social">
            <i className="fa-brands fa-linkedin"></i>
            <div>
              <p>LinkedIn</p>
              <a href="#">Link to linkedin</a>
            </div>
          </div>
          <div className="resume-social">
            <i className="fa-brands fa-github"></i>
            <div>
              <p>GitHub</p>
              <a href="#">Link to GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeHeader;
