import React, { useState } from "react";
import Youtube from "./Youtube";
import Facebook from "./Facebook";

export default function Media() {
  const [activeSection, setActiveSection] = useState(1);

  const sections = [
    {
      key: 1,
      title: "Youtube",
      link: "#Youtube",
      color: "#FF0000",
    },
    {
      key: 2,
      title: "Facebook",
      link: "#Facebook",
      color: "#1877F2",
    },
  ];

  const handleClick = (sectionKey) => {
    setActiveSection(sectionKey);
  };

  return (
    <div className="min-h-[90vh] pt-[5rem]">
      <ul className="flex mx-auto justify-center mb-[1rem]">
        {sections.map((section) => {
          return (
            <li key={section.key}>
              <a
                href={section.link}
                className={`px-[2rem] py-[.6rem] border-2 border-solid font-bold uppercase tracking-wider ${
                  activeSection === section.key ? "bg-white border-black " : ""
                }`}
                style={{ backgroundColor: activeSection === section.key ? section.color : "" }}
                onClick={() => handleClick(section.key)}>
                {section.title}
              </a>
            </li>
          );
        })}
      </ul>
      <Youtube active={activeSection === 1} />
      <Facebook active={activeSection === 2} />
    </div>
  );
}