import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AdminAuth/Auth";
import { db } from "../../../config/firebase";
import { collection, getDocs, doc } from "firebase/firestore";
import AddYoutube from "./AddYoutube";
import AddFacebook from "./AddFacebook";

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
        <AddFacebook />
      </div>
    </div>
  );
}
