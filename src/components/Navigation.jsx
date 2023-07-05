import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [opened, setOpened] = useState(false);
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === "") {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change

  return (
    <div
      className={
        "lg:shadow-md w-full fixed z-10 " + (opened ? "" : "shadow-md")
      }
    >
      <div
        className={
          "flex items-center justify-between bg-white lg:w-[90%] 2xl:w-[70%] mx-auto py-5 md:px-10 px-7 z-30"
        }
      >
        <div className="font-semibold text-2xl cursor-pointer flex items-baseline">
          <Link to="/">Hamza Abou Jaib</Link>
        </div>
        <div
          className={"burger " + (opened ? "active" : "")}
          onClick={() => setOpened((prev) => !prev)}
        >
          <span className="bar bar1"></span>
          <span className="bar bar2"></span>
          <span className="bar bar3"></span>
        </div>
        <div
          className={`lg:flex lg:items-center lg:pb-0 max-lg:py-10 bg-white absolute max-lg:shadow-lg lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-10 max-lg:transition-top max-lg:duration-500 max-lg:ease-in-out ${
            opened ? "top-10 " : "top-[-490px]"
          }`}
        >
          <ul className="lg:flex lg:items-center">
            <li className="lg:ml-8 text-xl lg:my-0">
              <Link
                to="/#about"
                className="hover:text-primary duration-500"
                onClick={() => setOpened(false)}
              >
                About
              </Link>
            </li>
            <li className="lg:ml-8 text-xl lg:my-0 my-5">
              <Link
                to="/#projects"
                className="hover:text-primary duration-500"
                onClick={() => setOpened(false)}
              >
                Projects
              </Link>
            </li>
            <li className="lg:ml-8 text-xl lg:my-0">
              <Link
                to="/resume"
                className="hover:text-primary duration-500"
                onClick={() => setOpened(false)}
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
