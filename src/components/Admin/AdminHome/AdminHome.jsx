import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AdminAuth/Auth";
import { Link, Outlet } from "react-router-dom";

export default function AdminHome() {
  const { handleSignOut, loggedIn } = useContext(AuthContext);

  const sections = [
    {
      title: "Add Link",
      subtitle:
        "This section allows you to seamlessly add and manage video and live links.",
      btn: {
        title: "Add Link",
        link: "/iescAdmin/Links",
      },
    },
    {
      title: "Registration",
      subtitle:
        "This section allows you to seamlessly add and manage video and live links.",
      btn: {
        title: "View Registration",
        link: "/iescAdmin/Registration",
      },
    },
  ];

  return (
    <div className="pt-[6rem] px-[1rem] lg:px-[2rem]">
      <div className="flex justify-between items-center">
        <h1 className="lg:text-[1.5rem]">WELCOME TO THE HOME PAGE</h1>
        <button
          className="bg-black text-white rounded-lg px-6 py-2"
          onClick={() => {
            handleSignOut();
          }}>
          Sign Out
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-[1rem] lg:gap-[2rem] mt-[1rem]">
        {sections.map((section) => {
          return (
            <div className="bg-white shadow-lg rounded lg:w-[20rem] flex flex-col pb-[2rem] pt-[1rem] px-[1rem]">
              <h1 className="text-center font-bold text-[1.2rem]">
                {section.title}
              </h1>
              <p className="text-center">{section.subtitle}</p>
              <button className="mt-[3rem]">
                <Link
                  to={section.btn.link}
                  className="bg-webColor rounded shadow font-bold px-[1.2rem] py-[.6rem]">
                  {" "}
                  {section.btn.title}{" "}
                </Link>
              </button>
            </div>
          );
        })}
      </div>

      <Outlet />
    </div>
  );
}
