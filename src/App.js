import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home/Home";
import Weather from "./Components/Weather/Weather";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPerson from "./Components/ReportAll/AddPerson";
import DeletePerson from "./Components/DeletePerson";
import ReportWithSicil from "./Components/ReportWithSicil";
import ReportAll from "./Components/ReportAll";
import Clock from "./Components/Clock/Clock";

function App() {
  return (
    <BrowserRouter>
      <Weather />
      <NavBar />
      <Clock />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/action/3.1" element={<AddPerson />}></Route>
        <Route path="/action/3.2" element={<DeletePerson />}></Route>
        <Route path="/action/3.3" element={<ReportWithSicil />}></Route>
        <Route path="/action/3.4" element={<ReportAll />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
