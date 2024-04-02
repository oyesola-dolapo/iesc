import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Whatsapp() {
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

  const chats = [
    {
      key: 1,
      title: "IESC support center",
      subtitle: "IESC support",
    },
  ];

  const [openChats, setOpenChats] = useState(false);

  const open = () => {
    setOpenChats((prevOpenChats) => !prevOpenChats);
  };

  return (
    <div className="fixed bottom-[1rem] right-[1rem] flex flex-col items-end">
      {openChats && (
        <motion.div
          variants={myVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.4 }}
          className="chats rounded overflow-hidden">
          <div className="text-white flex bg-[#2db742] w-[20rem] py-[1rem] rounded">
            <div className="flex px-[1rem] w-[3rem]">
              <i className="fa-brands fa-whatsapp text-[2.5rem] text-white mx-auto"></i>
            </div>
            <div className="px-[1rem]">
              <h1>Start a conversation</h1>
              <p>
                Click on one of our link to chat us on{" "}
                <span className="font-bold">Whatsapp</span>
              </p>
            </div>
          </div>
          <div className="py-[2rem] flex bg-white text-black">
            {chats.map((chat) => (
              <motion.a
                href="#"
                target="_blank"
                variants={myVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.4, delay: 0.2 }}
                key={chat.key}
                className="mx-auto w-[80%] h-[4rem] flex shadow rounded justify-between pr-[1rem] items-center">
                <div className="w-[.2rem] h-full bg-[#2db742]"></div>
                <div className="uppercase tracking-wider">
                  <p>{chat.title}</p>
                  <p className="opacity-[.5] text-[.8rem]">{chat.subtitle}</p>
                </div>
                <i className="fa-brands fa-whatsapp text-[1.5rem] text-[#2db742]"></i>
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
      <div
        onClick={open}
        className="w-[3rem] h-[3rem] rounded-full bg-[#2db742] flex justify-center items-center relative cursor-pointer mt-[1rem]">
        <motion.p
          variants={myVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.3 }}
          className="absolute left-[-200%] bg-white w-max px-[.4rem] py-[.4rem] text-[.8rem] font-bold rounded">
          Chat with us
        </motion.p>
        <div>
          {" "}
          {openChats === true ? (
            <i class="fa-solid fa-xmark text-white text-[1.5rem]"></i>
          ) : (
            <i class="fa-brands fa-whatsapp text-[1.5rem] text-white"></i>
          )}
        </div>
      </div>
    </div>
  );
}
