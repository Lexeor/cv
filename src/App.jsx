import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import InfoBar from "./components/InfoBar";
import Home from "./components/pages/Home";
import Project from "./components/pages/Project";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [projectId, setProjectId] = useState(0);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="App">
        <div className="container">
          <InfoBar />
          <Routes>
            <Route index element={<Home setProjectId={setProjectId} />} />
            <Route
              path="/project"
              element={<Project projectId={projectId} />}
            />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
