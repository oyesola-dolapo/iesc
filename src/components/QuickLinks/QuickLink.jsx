import React from "react";

export default function QuickLink() {
  const links = [
    {
      title: "Live Porgram",
      subtitle:
        "Join us live for an immersive church experience - click here to participate!",
      btn: {
        title: "Live",
        link: "/Live",
      },
    },
    {
      title: "join a department",
      subtitle:
        "Join us live for an immersive church experience - click here to participate!",
      btn: {
        title: "Join",
        link: "/Register",
      },
    },
    {
      title: "locate the church",
      subtitle: "Explore Our Parish Locations Near You!",
      btn: {
        title: "Location",
        link: "/Parishes",
      },
    },
    {
      title: "Online Giving",
      subtitle:
        "Contribute to our ministry's mission by participating in online giving and offering ",
      btn: {
        title: "Give",
        link: "/Give",
      },
    },
    {
      title: "church history",
      subtitle:
        "Learn about our church by exploring our history now!",
      btn: {
        title: "Read",
        link: "/ChurchHistory",
      },
    },
    {
      title: "Live Porgram",
      subtitle:
        "Join us live for an immersive church experience - click here to participate!",
      btn: {
        title: "click here",
        link: "/Live",
      },
    },
  ];
  return (
    <div className="flex lg:w-[60%] lg:mx-auto flex-wrap justify-center gap-[1.5rem] lg:gap-[1rem] px-[1rem] lx:px-0">
      {links.map((link) => {
        return (
          <div className="relative shadow sm:w-[17rem] h-[19rem] px-[2.5rem] lg:px-[1rem] flex flex-col items-center pt-[2rem] rounded bg-gray-100">
            <h1 className="font-bold text-[1.8rem] mb-[.6rem] uppercase text-center">
              {link.title}
            </h1>
            <p className="text-center">{link.subtitle}</p>
            <button className="absolute bottom-[1.5rem]">
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
