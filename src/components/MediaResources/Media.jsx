import React from "react";
import Youtube from "./Youtube";
import Facebook from "./Facebook";

export default function Media() {
  const sections = [
    {
      key: 1,
      title: "Youtube",
      link: "Youtube",
    },
    {
      key: 2,
      title: "Facebook",
      link: "Facebook",
    },
  ];
  return (
    <div className="min-h-[90vh] pt-[5rem]">
      <ul className="flex mx-auto justify-center mb-[1rem]">
        {sections.map((section) => {
          return (
            <li key={section.key}>
              <a
                href="#"
                className="px-[2rem] py-[.6rem] border-2 border-solid font-bold uppercase tracking-wider">
                {section.title}
              </a>
            </li>
          );
        })}
      </ul>
      <Youtube />
      <Facebook />
    </div>
  );
}
