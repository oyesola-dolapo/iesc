import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ComingSoon() {
  const myVariants = {
    hidden: {
      opacity: 0,
      //   y: 120,
    },
    visible: {
      opacity: 1,
      //   y: 0,
    },
  };
  return (
    <div className="h-[90vh] flex justify-center items-center flex-col text-grayBg">
      <motion.h1
        variants={myVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
        className="uppercase font-bold text-[2rem] lg:text-[4rem] tracking-wide">
        coming <span className="text-textGold">soon!!</span>
      </motion.h1>

      <motion.p
        variants={myVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.2 }}
        className="tracking-wider font">
        Go to{" "}
        <Link to="/" className="text-textGold underline">
          Homepage
        </Link>
      </motion.p>
    </div>
  );
}
