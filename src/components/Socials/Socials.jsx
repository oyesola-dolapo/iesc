import React, { useState } from "react";

export default function Socials() {
  const socials = [
    {
      title: "Facebook",
      subtitle: "Follow us on Facebook",
      icon: <i className="fab fa-facebook-f"></i>,
      link: `https://web.facebook.com/IESCWorldwide`,
      color: "#1877F2",
    },
    {
      title: "TikTok",
      subtitle: "Follow us on TikTok",
      icon: <i class="fa-brands fa-tiktok"></i>,
      link: `https://www.tiktok.com/@primateayodele`,
      color: `#000000`,
    },
    {
      title: "Instagram",
      subtitle: "Follow us on Instagram",
      icon: <i className="fab fa-instagram"></i>,
      color: "#cd486b",
    },
    {
      title: "X",
      subtitle: "Follow us on X",
      icon: <i class="fa-brands fa-x-twitter"></i>,
      link: `https://twitter.com/primate_ayodele`,
      color: "#000000",
    },

    {
      title: "Youtube",
      subtitle: "Watch us on Youtube",
      icon: <i className="fab fa-youtube"></i>,
      link: `https://www.youtube.com/@inrievangelicalspiritualchurch`,
      color: `#FF0000`,
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="bg-gray-900 py-5 lg:py-6">
      <ul className="flex justify-center items-center gap-[1rem] lg:gap-[4rem]">
        {socials.map((social, index) => (
          <li key={index}>
            <a
              href={social.link}
              target="_blank"
              className="flex items-center text-white"
              onMouseEnter={() => {
                setHoveredIndex(index);
              }}
              onMouseLeave={() => setHoveredIndex(null)}>
              <div
                className={`icon w-10 h-10 lg:w-16 lg:h-16 border-[1px] border-white rounded-full flex justify-center items-center text-lg lg:text-2xl mr-2 `}
                style={{
                  backgroundColor: hoveredIndex === index ? social.color : "",
                  transition: "background-color 0.1s linear",
                }}>
                {social.icon}
              </div>
              <div className="tracking-wider hidden lg:block">
                <p className="text-white font-semibold">{social.title}</p>
                <p className="text-sm text-gray-400">{social.subtitle}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
