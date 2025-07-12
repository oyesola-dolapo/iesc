import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Nav() {
  const [menu, setMenu] = useState(false);
  const [subMenu, setSubMenu] = useState({});

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

  const navLinks = [
    {
      title: "HOME",
      link: "/",
    },
    {
      title: "office of the primate",
      icon: <i className="fa-solid fa-sort-down"></i>,
      sublinks: [
        {
          title: "Meet the primate",
          link: "meet primate",
        },
        { title: "awards and recognition" },
        { title: "warnings to the nation" },
        {
          title: "appointments",
          link: "appointment",
        },
      ],
    },
    {
      title: "WHO ARE WE",
      icon: <i className="fa-solid fa-sort-down"></i>,
      sublinks: [
        {
          title: "Church History",
          link: "church history",
        },
        {
          title: "Vision & Mission",
          link: "vision",
        },
        {
          title: "Our Belief",
          // link: "",
        },
        {
          title: "Parishes",
          link: "parishes",
        },
      ],
    },

    {
      title: "programs",
      icon: <i className="fa-solid fa-sort-down"></i>,
      sublinks: [
        { title: "God will not put me  to shame" },
        { title: "freedom and deliverance" },
        { title: "anointing service" },
        { title: "food service" },
        { title: "galilee" },
      ],
    },
    {
      title: "GIVE",
      link: "give",
    },
    {
      title: "MEDIA CONNECT",
      icon: <i className="fa-solid fa-sort-down"></i>,
      sublinks: [
        {
          title: "gallery",
          link: "media",
        },
        {
          title: "Live",
          link: "live",
        },
      ],
    },

    {
      title: "RESOURCES",
      icon: <i className="fa-solid fa-sort-down"></i>,
      index: 0,
      sublinks: [
        {
          title: "Adult education",
          link: "adult education",
        },
        {
          title: "Sign Language",
          link: "sign language",
        },
        {
          title: "music academy",
          link: "music",
        },
        {
          title: "content creation and management",
          link: "content creation and management",
        },
        {
          title: "community projects",
          link: "community projects",
        },
        {
          title: "empowerment programmes",
          link: "empowerment programmes",
        },
        {
          title: "youth development",
          link: "youth development",
        },
        {
          title: "vocational trainings",
          link: "vocational trainings",
        },
        {
          title: "careers",
          link: "careers",
        },
        {
          title: "register",
          style: { textDecoration: "underline", textAlign: "center" },
          link: "register",
        },
      ],
    },
  ];

  const handleMenu = () => {
    setMenu(!menu);
    if (menu === false) {
      setSubMenu(false);
    }
  };

  const handleSubMenu = (title) => {
    setSubMenu((prevSubMenu) => {
      const newSubMenu = { ...prevSubMenu };
      Object.keys(newSubMenu).forEach((key) => {
        if (key !== title) {
          newSubMenu[key] = false;
        }
      });
      newSubMenu[title] = !newSubMenu[title];
      const isSubMenuParent = navLinks.find(
        (link) => link.title === title && link.sublinks
      );
      if (!isSubMenuParent) {
        setMenu(false);
      }
      return newSubMenu;
    });
  };

  return (
    <nav className="backdrop-filter backdrop-blur-lg shadow-lg fixed top-0 left-0  w-screen z-[99] h-max px-[1rem] py-[.8rem] z-1 lg:py-0  lg:px-[4rem] flex items-center justify-between">
      <img
        src="../images/multiLogo.webp"
        alt=""
        className="w-[7rem] lg:w-[12rem]"
      />
      <ul
        className={`desktopNav hidden nav-link lg:flex items-center gap-6 font-medium text-[.9rem] text-webColor`}>
        {navLinks.map((link) => {
          return (
            <li className="navLink relative" key={link.title}>
              <Link
                to={link.link}
                className="navLinkHover flex gap-2 py-[1.2rem] relative hover:text-[#ddb057]">
                <p className="uppercase">{link.title}</p>
                {link.icon}
                <span className="absolute h-2 bg-[#ddb057] bottom-0 left-0 w-0 transition-width duration-200 group-hover:w-full"></span>
              </Link>
              {link.sublinks && (
                <motion.ul
                  variants={myVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.4 }}
                  className={`sub-link absolute top-[3.8rem] w-[15rem] bg-white flex flex-col shadow-lg  ${
                    link.index === 0 ? "left-[-100%]" : ""
                  }`}>
                  {link.sublinks.map((sublink) => (
                    <li key={sublink.title}>
                      <Link to={sublink.link} className={` rounded-lg `}>
                        <p
                          className={`hover:bg-webColor text-textGold hover:text-black duration-[300ms] px-4 py-3 uppercase`}
                          style={sublink.style}>
                          {sublink.title}
                        </p>
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </li>
          );
        })}
      </ul>

      {menu && (
        <ul
          className={`mobileNav bg-white absolute top-[100%] left-0 w-full shadow-lg nav-link flex flex-col items-center font-medium text-[.75rem] text-textGold`}>
          {navLinks.map((link) => {
            return (
              <li
                className="navLink relative w-full text-center px-4"
                key={link.title}>
                <Link
                  to={link.link}
                  onClick={() => handleSubMenu(link.title)}
                  className="flex justify-center gap-2 py-[1rem] relative uppercase">
                  {link.title}
                  {link.icon}
                </Link>
                {link.sublinks && subMenu[link.title] && (
                  <ul className="w-full bg-textGold text-white top-[3.8rem] flex flex-col">
                    {link.sublinks.map((sublink) => (
                      <li
                        key={sublink.title}
                        onClick={() => {
                          setMenu(false);
                        }}>
                        <Link to={sublink.link}>
                          <p className="py-3 uppercase" style={sublink.style}>
                            {sublink.title}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      )}
      <div className="text-xl lg:hidden cursor-pointer" onClick={handleMenu}>
        {!menu ? (
          <i className="fa-solid fa-bars text-webColor"></i>
        ) : (
          <i className="fa-solid fa-xmark text-webColor"></i>
        )}
      </div>
    </nav>
  );
}
