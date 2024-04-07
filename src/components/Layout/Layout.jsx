// Layout.jsx

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Nav from "../Nav/Nav";
import Whatsapp from "../Whatsapp/Whatsapp";
import Socials from "../Socials/Socials";
import Footer from "../Footer/Footer";

export default function Layout() {
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
    <div>
      <ScrollToTop />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Whatsapp />
      {visible && (
        <motion.div
          variants={myVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.4 }}
          onClick={top}
          className="toTop shadow fixed bottom-[5rem] right-[1rem] cursor-pointer bg-webColor w-[3rem] h-[3rem] flex justify-center items-center rounded-full">
          <i className="fa-solid fa-arrow-up text-black text-[1.5rem]"></i>
        </motion.div>
      )}
      <Socials />
      <Footer />
    </div>
  );
}
