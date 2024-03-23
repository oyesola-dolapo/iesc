import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Location from "./components/Location";
import Vision from "./components/Vision/Vision";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <main className="overflow-x-hidden">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Vision" element={<Vision />} />
        </Routes>
        <div className="w-full">
          <Location />
        </div>

        <Footer />
      </main>
    </Router>
  );
}

export default App;
