import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Location from "./components/Location";
import Vision from "./components/Vision/Vision";
import Nav from "./components/Nav/Nav";

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
      </main>
    </Router>
  );
}

export default App;
