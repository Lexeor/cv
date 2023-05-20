import { useState, useRef, useCallback } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

import InfoBar from "./components/InfoBar";
import Home from "./components/pages/Home";
import Project from "./components/pages/Project";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const componentRef = useRef(null);
  const [projectId, setProjectId] = useState(0);

  const reactToPrintContent = useCallback(() => {
    return componentRef.current;
  }, [componentRef.current]);

  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
    documentTitle: "CV",
    removeAfterPrint: true,
  });

  return (
    <HashRouter>
      <ScrollToTop />

      <div className="App" ref={componentRef}>
        <div className="container">
          <InfoBar handlePrint={handlePrint} />
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
