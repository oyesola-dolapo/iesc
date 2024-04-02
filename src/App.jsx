import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  const [visible, setVisible] = useState(false);
  const myVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const visibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", visibility);

    return () => {
      window.removeEventListener("scroll", visibility);
    };
  }, []);

  const top = () => {
    window.scrollTo(0, 0);
  };

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
        {visible && (
          <motion.div
            variants={myVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.4 }}
            onClick={top}
            className="toTop fixed bottom-[5rem] right-[1rem] cursor-pointer bg-webColor w-[3rem] h-[3rem] flex justify-center items-center rounded-full">
            <i className="fa-solid fa-arrow-up text-black text-[1.5rem]"></i>
          </motion.div>
        )}
        <Footer />
      </main>
    </Router>
  );
}

export default App;
