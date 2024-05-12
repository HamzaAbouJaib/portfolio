import { Outlet, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navigation from "./components/Navigation";
import ProjectsPage from "./components/ProjectsPage";
import ResumePage from "./components/ResumePage";
import { AboutPage } from "./components/AboutPage";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="dark:bg-dark-background dark:text-dark-text">
      <Navigation/>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
