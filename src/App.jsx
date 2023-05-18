import InfoBar from "./components/InfoBar";
import Content from "./components/Content";
import { PopupContextProvider } from "./components/contexts/PopupContext";
import Popup from "./components/popup/Popup";

function App() {
  return (
    <div className="App">
      <div className="container">
        <InfoBar />
        <PopupContextProvider>
          <Popup />
          <Content />
        </PopupContextProvider>
      </div>
    </div>
  );
}

export default App;
