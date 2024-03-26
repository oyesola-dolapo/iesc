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
    <div className="z-[0] w-full min-h-[90vh] py-[4rem] h-max sm:h-max relative flex px-[.6rem] xl:h-screen sm:px-[2.5rem] bg-black">
      <img
        src="/images/member/IMG_1196.webp"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover opacity-[.4] z-[0]"
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
            "Bring the whole tithe into the storehouse, that there may be food
            in my house. Test me in this,” says the Lord Almighty, “and see if I
            will not throw open the floodgates of heaven and pour out so much
            blessing that there will not be room enough to store it."
          </p>
          <p>- Malachi 3:10</p>
        </motion.div>
        <motion.button
          variants={myVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, delay: 0.5 }}
          className="z-0 worship-btn bg-textGold xl:bg-transparent isolate relative uppercase px-8 py-3 mt-8 backdrop-filter backdrop-blur-sm ">
          online giving
        </motion.button>
      </div>
    </div>
  );
}
