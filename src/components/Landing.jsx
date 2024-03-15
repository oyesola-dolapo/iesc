import React from "react";
import { motion } from "framer-motion";

export default function Landing() {
  const myVariants = {
    hidden: {
      opacity: 0,
      y: 120,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="w-full min-h-[90vh] py-[4rem] h-max sm:h-screen relative flex px-[.6rem] sm:px-[2.5rem] bg-black">
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
          transition={{ duration: .7 }}
          className="text-white uppercase text-[1.8rem] sm:text-[3rem] lg:text-[4rem] font-bold">
          welcome to inri evangelical spiritual{" "}
          <span className="text-webColor">church</span>
        </motion.h1>
        <motion.div
          variants={myVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: .7, delay: 0.25 }}
          className="font-medium mt-4 sm:text-[1.5rem] lg:px-[10rem]">
          <p>
            {" "}
            "What then shall we say, brothers and sisters? When you come
            together, each of you has a hymn, or a word of instruction, a
            revelation, a tongue or an interpretation. Everything must be done
            so that the church may be built up."
          </p>
          <p>- 1 Corinthians 14:26</p>
        </motion.div>
        <motion.button
          variants={myVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: .7, delay: .5 }}
          className="worship-btn isolate relative uppercase border-2 border-solid border-webColor px-8 py-3 mt-8 backdrop-filter backdrop-blur-sm ">
          worship with us
        </motion.button>
      </div>
    </div>
  );
}
