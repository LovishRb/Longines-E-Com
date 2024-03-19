import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Novelties from "./components/Novelties";
import Models from "./components/Models";
import News from "./components/News";
import AboutUs from "./components/AboutUs";

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
                <Models /> <News />
                <AboutUs />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
