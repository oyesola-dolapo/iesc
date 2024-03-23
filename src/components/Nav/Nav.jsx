import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [menu, setMenu] = useState(false);
  const [subMenu, setSubMenu] = useState({});

  const navLinks = [
    {
      title: "HOME",
      link: "/",
    },
    {
      title: "WHO ARE WE",
      icon: <i className="fa-solid fa-sort-down"></i>,
      sublinks: [
        {
          title: "Church History",
          // link: "",
        },
        {
          title: "Mission",
          // link: "",
        },
        {
          title: "Vision",
          link: "/Vision",
        },
        {
          title: "Our Belief",
          // link: "",
        },
      ],
    },
    {
      title: "WHAT WE DO",
      icon: <i className="fa-solid fa-sort-down"></i>,
      sublinks: [
        {
          title: "Adult Education",
          // link: "",
        },
        {
          title: "Achievers Healthcare",
          // link: "",
        },
        {
          title: "Prayer Requests",
          // link: "",
        },
        {
          title: "Special Programs",
          // link: "",
        },
      ],
    },
    {
      title: "ONLINE GIVING",
    },
    {
      title: "MEDIA RESOURCES",
      // link: "",
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
    <nav className="shadow-lg absolute top-0 left-0 bg-white w-screen z-[1] h-max px-[1rem] py-[.8rem] lg:py-0  lg:px-[4rem] flex items-center justify-between">
      <img
        src="./images/logo.webp"
        alt=""
        className="w-[2rem] lg:w-[3rem] lg:h-[3rem]"
      />
      <ul
        className={`desktopNav hidden nav-link lg:flex items-center gap-6 font-medium text-[.9rem] text-webColor`}>
        {navLinks.map((link) => {
          return (
            <li className="navLink relative" key={link.title}>
              <Link
                to={link.link}
                className="navLinkHover flex gap-2 py-[1.2rem] relative hover:text-[#ddb057]">
                <p>{link.title}</p>
                {link.icon}
                <span className="absolute h-2 bg-[#ddb057] bottom-0 left-0 w-0 transition-width duration-200 group-hover:w-full"></span>
              </Link>
              {link.sublinks && (
                <ul className="sub-link absolute top-[3.8rem] w-[15rem] bg-white flex flex-col shadow-lg">
                  {link.sublinks.map((sublink) => (
                    <li key={sublink.title}>
                      <Link to={sublink.link} className=" rounded-lg">
                        <p className="hover:bg-webColor hover:text-black duration-[300ms] px-4 py-3 uppercase">
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

      {menu && (
        <ul
          className={`mobileNav bg-white absolute top-[100%] left-0 w-full shadow-lg nav-link flex flex-col items-center font-medium text-[.9rem] text-webColor`}>
          {navLinks.map((link) => {
            return (
              <li
                className="navLink relative w-full text-center px-4"
                key={link.title}>
                <Link
                  to={link.link}
                  onClick={() => handleSubMenu(link.title)}
                  className="flex justify-center gap-2 py-[1.2rem] relative">
                  {link.title}
                  {link.icon}
                </Link>
                {link.sublinks && subMenu[link.title] && (
                  <ul className="w-full bg-webColor text-white top-[3.8rem]flex flex-col">
                    {link.sublinks.map((sublink) => (
                      <li
                        key={sublink.title}
                        onClick={() => {
                          setMenu(false);
                        }}>
                        <Link to={sublink.link}>
                          <p className="py-3 uppercase">{sublink.title}</p>
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
          <i class="fa-solid fa-bars"></i>
        ) : (
          <i class="fa-solid fa-xmark"></i>
        )}
      </div>
    </nav>
  );
}
