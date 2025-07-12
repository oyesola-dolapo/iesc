import React from "react";

export default function QuickLink() {
  const links = [
    {
      title: "Live Program",
      subtitle:
        "Experience church like never before join us live and be part of something powerful. Click here to participate now!",
      btn: {
        title: "Live",
        link: "/live",
      },
    },
    {
      title: "join a department",
      subtitle:
        "Join us now and become part of a vibrant church department. click here to serve, grow, and make a difference together.",
      btn: {
        title: "Join",
        link: "/register",
      },
    },
    {
      title: "locate the church",
      subtitle: "Discover our church branches close to you and connect with the nearest parish community around your area today!",
      btn: {
        title: "Location",
        link: "/parishes",
      },
    },
    {
      title: "Online Giving",
      subtitle:
        "Support our ministry’s mission by giving and offering online. Your contribution helps us reach more souls and fulfill God’s purpose.",
      btn: {
        title: "Give",
        link: "/Give",
      },
    },
    {
      title: "church history",
      subtitle: "Discover more about our church. explore our inspiring history and journey of faith today to understand who we truly are.",
      btn: {
        title: "Read",
        link: "/church history",
      },
    },
    {
      title: "Media Gallery",
      subtitle:
        "Explore our captivating media gallery and relive powerful moments from our church events. click here to start watching now!",
      btn: {
        title: "click here",
        link: "/Live",
      },
    },
  ];
  return (
    <div className="flex lg:w-[70%] lg:mx-auto flex-wrap justify-center gap-[1.5rem] lg:gap-[1rem] xl:gap-[3rem] px-[2rem] py-[1rem] xl:py-[2rem] xl:px-0">
      {links.map((link) => {
        return (
          <div className="relative shadow sm:w-[17rem] min-h-[19rem] px-[2.5rem] lg:px-[1rem] flex flex-col items-center pt-[2rem] rounded bg-gray-100">
            <h1 className="font-bold text-[1.8rem] mb-[.6rem] uppercase text-center leading-9">
              {link.title}
            </h1>
            <p className="text-center mb-[1.5rem]">{link.subtitle}</p>
            <button className="mt-auto mb-[1.5rem]">
              <a
                href={link.btn.link}
                className="bg-webColor text-black font-bold uppercase px-[1.2rem] py-[.6rem] rounded">
                {link.btn.title}
              </a>
            </button>
          </div>
        );
      })}
    </div>
  );
}
