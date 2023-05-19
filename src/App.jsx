import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InfoBar from "./components/InfoBar";
import Home from "./components/pages/Home";
import Project from "./components/pages/Project";

function App() {
  const [projectId, setProjectId] = useState(0);

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
