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
import Live from "./components/Live/Live.jsx";
import Socials from "./components/Socials/Socials.jsx";
import AdultEducation from "./components/AdultEducation/AdultEducation.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddLink from "./components/Admin/AdminHome/AddLink/AddLink.jsx";
import Registration from "./components/Admin/AdminHome/Registration/Registration.jsx";
import Register from "./components/Register/Register.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import Layout from "./components/Layout/Layout.jsx";

function App() {
  return (
    <Router>
      <main className="relative">
        <ToastContainer />

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Vision" element={<Vision />} />
            <Route path="ChurchHistory" element={<History />} />
            <Route path="Parishes" element={<Sunday />} />
            <Route path="MeetPrimate" element={<MeetPrimate />} />
            <Route path="Media" element={<Media />} />
            <Route path="Live" element={<Live />} />
            <Route path="iescAdmin" element={<Auth />} />
            <Route path="/iescAdmin/Links" element={<AddLink />} />
            <Route path="/iescAdmin/Registration" element={<Registration />} />
            <Route path="Adult" element={<AdultEducation />} />
            <Route path="Register" element={<Register />} />
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
