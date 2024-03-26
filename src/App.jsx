import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Location from "./components/Location";
import Vision from "./components/Vision/Vision";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import History from "./components/History/History";
import Sunday from "./components/Programs/Sunday/Sunday";
import MeetPrimate from "./components/PrimateOffice/MeetPrimate.jsx";

function App() {
  return (
    <Router>
      <main>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Vision" element={<Vision />} />
          <Route path="/ChurchHistory" element={<History />} />
          <Route path="/sunday" element={<Sunday />} />
          <Route path="/MeetPrimate" element={<MeetPrimate />} />
        </Routes>

        <Footer />
      </main>
    </Router>
  );
}

export default App;
