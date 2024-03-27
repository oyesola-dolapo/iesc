import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AdminAuth/Auth";
import { db } from "../../../config/firebase";
import { collection, getDocs, doc } from "firebase/firestore";
import AddYoutube from "./AddYoutube";

export default function AdminHome() {
  const { handleSignOut, loggedIn } = useContext(AuthContext);


  

  return (
    <div className="pt-[4.5rem] px-[1rem] lg:px-[2rem]">
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

      <div className="flex flex-wrap gap-[1rem] lg:gap-[2rem] mt-[1rem]">
        <AddYoutube />
        <div className="Facebook w-full lg:w-[25rem]">
          <h1 className=" font-bold tracking-wide mb-[.5rem]">ADD FACEBOOK</h1>
          <form action="">
            <div className="flex flex-col">
              {" "}
              <label htmlFor="tyvid" className="mb-[.5rem] text-[.8rem]">
                FACEBOOK LINK
              </label>{" "}
              <input
                type="text"
                name="ytvid"
                id="ytvid"
                placeholder="Add video link..."
                className="h-[3rem] w-full px-[1rem] border-2 border-solid border-webColor rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="bg-black text-textGold rounded-lg w-[6rem] h-[2.5rem] mt-[.5rem] font-medium tracking-wide">
              ADD
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
