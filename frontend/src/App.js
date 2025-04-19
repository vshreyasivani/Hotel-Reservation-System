import { React } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import NavBar from "./pages/NavBar"
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Login from "./pages/Login";
import Reserve from "./pages/Reserve";
import Breakfast from "./pages/Breakfast";
import BreakfastMenu from "./pages/Breakfastmenu";
import Lunch from "./pages/Lunch";
import LunchMenu from "./pages/Lunchmenu";
import Dinner from "./pages/Dinner";
import DinnerMenu from "./pages/Dinnermenu";
import Events from "./pages/Events";


import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/breakfast" element={<Breakfast />} />
          <Route path="/breakfastmenu" element={<BreakfastMenu />} />
          <Route path="/lunch" element={<Lunch />} />
          <Route path="/lunchmenu" element={<LunchMenu />} />
          <Route path="/events" element={<Events />} />
          <Route path="/dinner" element={<Dinner />} />
          <Route path="/dinnermenu" element={<DinnerMenu />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
        }}
        containerStyle={{ margin: "25px" }}
      />
    </>
  );
}

export default App;
