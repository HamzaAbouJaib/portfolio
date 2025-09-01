import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import ResumePage from "./components/ResumePage.jsx";
import { AboutPage } from "./components/AboutPage.jsx";
import ProjectsPage from "./components/ProjectsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: <App />,
    children: [
      {
        path: "/portfolio",
        element: (
          <div className="lg:w-[90%] 2xl:w-[80%] mx-auto font-mono">
            <LandingPage />
            <AboutPage />
            <ProjectsPage />
          </div>
        ),
      },
      {
        path: "/portfolio/resume",
        element: <ResumePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
