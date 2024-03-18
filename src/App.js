import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Novelties from "./components/Novelties";
import Gender from "./components/Gender";

function App() {
  return (
    <BrowserRouter>
      <div className="background">
        <Navbar />
        <Routes>
          <Route
            index
            element={
              <>
                <Overview /> <Novelties />
                <Gender />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
