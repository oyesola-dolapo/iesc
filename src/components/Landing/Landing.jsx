import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

  const [activePage, setActivePage] = useState(1);
  const covers = [
    {
      key: 1,
      image: "/images/personal/IMG_5149.webp",
      writeup: `God is spirit, and those who worship him must worship in spirit and
    truth." 24 For God is Spirit, so those who worship him must worship
    in spirit and in truth.” 24 God is sheer being itself - Spirit.
    Those who worship him must do it out of their very being, their
    spirits, their true selves, in adoration.`,
      verse: "- 1 John 4:24",
      btn: "media resources",
    },
    {
      key: 2,
      image: "/images/member/IMG_1196.webp",
      writeup: `Bring the whole tithe into the storehouse, that there may be food
      in my house. Test me in this,” says the Lord Almighty, “and see if I
      will not throw open the floodgates of heaven and pour out so much
      blessing that there will not be room enough to store it.`,
      verse: "- Malachi 3:10",
      btn: "online giving",
    },
    {
      key: 3,
      image:
        "/images/personal/357739412_299619835784355_4237193990120909052_n.webp",
      writeup: `What then shall we say, brothers and sisters? When you come
      together, each of you has a hymn, or a word of instruction, a
      revelation, a tongue or an interpretation. Everything must be done
      so that the church may be built up.`,
      verse: "- 1 Corinthians 14:26",
      btn: "worship with us",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActivePage((prevActivePage) => {
        if (prevActivePage === 1) return 2;
        else if (prevActivePage === 2) return 3;
        else return 1;
      });
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {covers.map((cover) => (
        <div
          key={cover.key}
          style={{
            display: cover.key === activePage ? "flex" : "none",
          }}
          className="z-[0] w-full min-h-[90vh] py-[4rem] h-max sm:h-max relative flex px-[.6rem] xl:h-screen sm:px-[2.5rem] bg-black">
          <img
            src={cover.image}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover opacity-[.4] z-[0]"
          />
          <div className="z-[1] m-auto text-center text-white lg:pt-[4rem]">
            <motion.h1
              variants={myVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.8 }}
              className="text-white uppercase text-[1.8rem] sm:text-[2.2rem] lg:text-[4rem] font-bold">
              welcome to inri evangelical spiritual{" "}
              <span className="text-webColor">church</span>
            </motion.h1>
            <motion.div
              variants={myVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 2.3 }}
              className="font-medium mt-4 sm:text-[1rem] lg:text-[1.5rem] lg:px-[10rem]">
              <p>{cover.writeup}</p>
              <p>{cover.verse}</p>
            </motion.div>
            <motion.button
              variants={myVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 1.6 }}
              className="mt-8">
              <Link
                to="/Media"
                className="worship-btn bg-textGold xl:bg-transparent isolate relative uppercase px-8 py-3  backdrop-filter backdrop-blur-sm ">
                {cover.btn}
              </Link>
            </motion.button>
          </div>
        </div>
      ))}
    </div>
  );
}
