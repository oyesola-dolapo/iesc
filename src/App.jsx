import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Vision from "./components/Vision/Vision";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import History from "./components/History/History";
import Sunday from "./components/Programs/Sunday/Sunday";
import MeetPrimate from "./components/PrimateOffice/MeetPrimate.jsx";
import Auth from "./components/Admin/AdminAuth/Auth.jsx";
import Media from "./components/MediaResources/Media.jsx";
import Whatsapp from "./components/Whatsapp/Whatsapp.jsx";

function App() {
  return (
    <Router>
      <main className="relative">
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/Vision" element={<Vision />} />
          <Route path="/ChurchHistory" element={<History />} />
          <Route path="/sunday" element={<Sunday />} />
          <Route path="/MeetPrimate" element={<MeetPrimate />} />
          <Route path="/Media" element={<Media />} />
          <Route path="/iescAdmin" element={<Auth />} />
        </Routes>
        <Whatsapp />
        <Footer />
      </main>
    </Router>
  );
}

export default App;
