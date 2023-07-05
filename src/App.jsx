import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navigation from "./components/Navigation";
import ProjectsPage from "./components/ProjectsPage";
import ResumePage from "./components/ResumePage";
import { AboutPage } from "./components/AboutPage";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <div className="lg:w-[90%] 2xl:w-[70%] mx-auto">
              <LandingPage />
              <AboutPage />
              <ProjectsPage />
            </div>
          }
        />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
