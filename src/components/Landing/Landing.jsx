import React from "react";
import { motion } from "framer-motion";

export default function Landing() {
  const myVariants = {
    hidden: {
      opacity: 0,
      // y: 120,
    },
    visible: {
      opacity: 1,
      // y: 0,
    },
  };

  return (
    <div className="w-full min-h-[90vh] py-[4rem] h-max sm:h-max relative flex px-[.6rem] xl:h-screen sm:px-[2.5rem] bg-black">
      <img
        src="/images/bg-img.webp"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover opacity-[.6] z-[0]"
      />
      <div className="z-[0] m-auto text-center text-white lg:pt-[4rem]">
        <motion.h1
          variants={myVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
          className="text-white uppercase text-[1.8rem] sm:text-[2.2rem] lg:text-[4rem] font-bold">
          welcome to inri evangelical spiritual{" "}
          <span className="text-webColor">church</span>
        </motion.h1>
        <motion.div
          variants={myVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, delay: 0.25 }}
          className="font-medium mt-4 sm:text-[1rem] lg:text-[1.5rem] lg:px-[10rem]">
          <p>
            {" "}
            "God is spirit, and those who worship him must worship in spirit and
            truth." 24 For God is Spirit, so those who worship him must worship
            in spirit and in truth.” 24 God is sheer being itself - Spirit.
            Those who worship him must do it out of their very being, their
            spirits, their true selves, in adoration."
          </p>
          <p>- 1 John 4:24</p>
        </motion.div>
        <motion.button
          variants={myVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, delay: 0.5 }}
          className="z-0 worship-btn isolate relative uppercase border-2 border-solid border-webColor px-8 py-3 mt-8 backdrop-filter backdrop-blur-sm ">
          media resources
        </motion.button>
      </div>
    </div>
  );
}
