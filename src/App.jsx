import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Vision from "./components/Nav/Vision/Vision.jsx";
import History from "./components/Nav/History/History.jsx";
import Sunday from "./components/Programs/Sunday/Sunday";
import MeetPrimate from "./components/Nav/PrimateOffice/MeetPrimate.jsx";
import Auth from "./components/Admin/AdminAuth/Auth.jsx";
import Media from "./components/MediaResources/Media.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddLink from "./components/Admin/AdminHome/AddLink/AddLink.jsx";
import AdultEducation from "./components/Nav/Resources/AdultEducation/AdultEducation.jsx";
import Registration from "./components/Admin/AdminHome/Registration/Registration.jsx";
import NotFound from "./components/extras/NotFound/NotFound.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Live from "./components/MediaResources/Live/Live.jsx";
import Register from "./components/Nav/Resources/Register/Register.jsx";
import SignLanguage from "./components/Nav/Resources/SignLanguage/SignLanguage.jsx";
import Content from "./components/Nav/Resources/ContentCreation/Content.jsx";
import Community from "./components/Nav/Resources/Community/Community.jsx";

function App() {
  return (
    <Router>
      <main className="relative">
        <ToastContainer />

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="vision" element={<Vision />} />
            <Route path="church history" element={<History />} />
            <Route path="parishes" element={<Sunday />} />
            <Route path="meet primate" element={<MeetPrimate />} />
            <Route path="media" element={<Media />} />
            <Route path="live" element={<Live />} />
            <Route path="iescAdmin" element={<Auth />} />
            <Route path="/iescAdmin/Links" element={<AddLink />} />
            <Route path="/iescAdmin/Registration" element={<Register />} />
            <Route path="adult education" element={<AdultEducation />} />
            <Route
              path="content creation and management"
              element={<Content />}
            />
            <Route path="community projects" element={<Community />} />
            <Route path="sign language" element={<SignLanguage />} />
            <Route path="register" element={<Register />} />
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
