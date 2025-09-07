import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import ResumePage from "./components/ResumePage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import ExperiencePage from "./pages/ExperiencePage.jsx";

const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: <App />,
    children: [
      {
        path: "/portfolio",
        element: (
          <div className="font-sans">
            <LandingPage />
            {/* <ProjectsPage /> */}
          </div>
        ),
      },
      {
        path: "/portfolio/projects",
        element: (
          <div className="font-sans">
            <ProjectsPage />
          </div>
        ),
      },
      {
        path: "/portfolio/experience",
        element: (
          <div className="font-sans">
            <ExperiencePage />
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
