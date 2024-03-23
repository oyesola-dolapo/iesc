import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const footerLinks = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Contact Us",
      link: "",
    },
    {
      title: "Online Giving",
      link: "",
    },
    {
      title: "Media Resources",
      link: "",
    },
  ];

  const socials = [
    {
      title: "Facebook",
      icon: <i class="fa-brands fa-facebook-f"></i>,
      link: `https://web.facebook.com/IESCWorldwide`,
    },
    {
      title: "x",
      icon: <i class="fa-brands fa-x-twitter"></i>,
      link: `https://twitter.com/primate_ayodele`,
    },
    {
      title: "tiktok",
      icon: <i class="fa-brands fa-tiktok"></i>,
      link: `https://www.tiktok.com/@primateayodele`,
    },
  ];
  return (
    <footer className="bg-grayBg text-white p-4 py-6 sm:px-[2rem] flex flex-col gap-8 xl:gap-4 xl:flex-row w-full xl:justify-between xl:px-[6rem]">
      <div id="contact" className="flex flex-col gap-4">
        <div>
          <h1 className="text-[1.2rem] font-medium">CONTACT</h1>

          <p className="phone">
            Phone:
            <a href="tel:+2348033017747" className="ml-2 text-webColor">
              +234 (803) 301-7747
            </a>
          </p>
          <p>
            Email:
            <a
              href="mailto:inrievangelicalspiritualchurch@gmail.com"
              className="ml-2 text-webColor">
              {" "}
              inrievangelicalspiritualchurch@gmail.com
            </a>
          </p>
        </div>

        <div>
          <h1 className="text-[1.2rem] font-medium">IESC HEADQUATERS</h1>
          <p>
            1, Primate Ayodele Crescent <br /> Oke-Afa Ejigbo <br /> Lagos,
            Nigeria
          </p>
        </div>
      </div>

      <div className="navigation w-max">
        <h1 className="text-[1.2rem] font-medium">NAVIGATION</h1>
        <ul>
          {footerLinks.map((link) => {
            return (
              <li className="px-2  hover:text-webColor">
                <Link to={link.link}>{link.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="services">
        <h1 className="text-[1.2rem] font-medium mb-2">SERVICIES</h1>
        <div className="flex flex-col gap-4">
          <div className="sunday">
            <h1 className="font-bold">Sunday</h1>
            <ul>
              <li>First Service: 4:30am - 7:30am</li>
              <li>Second Service: 7:30am - 9:30am</li>
              <li>Third Service: 9:30am - 11:30am</li>
              <li>Last Service: 11:30am - 3:30pm</li>
            </ul>
          </div>
          <div className="tuesday">
            <h1 className="font-bold">Tuesday</h1>
            <p>5:00am - 9:00am</p>
          </div>
          <div className="friday">
            <h1 className="font-bold">Friday</h1>
            <p>5:00am - 9:00am</p>
          </div>
        </div>
      </div>

      <div>
        <div className="socials">
          <h1 className="text-[1.2rem] font-medium">SOCIALS</h1>
          <ul className="flex gap-4 px-2">
            {socials.map((link) => {
              return (
                <li>
                  <Link to={link.link}>{link.icon}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
