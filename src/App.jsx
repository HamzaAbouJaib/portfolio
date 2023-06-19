import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navigation from "./components/Navigation";
import ProjectsPage from "./components/ProjectsPage";
import ResumePage from "./components/ResumePage";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingPage />
              <ProjectsPage />
            </>
          }
        />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </div>
  );
}

export default App;
