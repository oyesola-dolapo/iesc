import { useContext, useEffect } from "react";
import authContext, { AuthContext } from "../AdminAuth/Auth";
import { Navigate } from "react-router-dom";

export default function AdminHome() {
  const { handleSignOut, loggedIn } = useContext(AuthContext);

  return (
    <div className="flex flex-col gap-8 items-center py-8 pt-[4rem]">
      <h1>WELCOME TO THE HOME PAGE</h1>
      <button
        className="bg-black text-white rounded-lg px-6 py-2 mx-auto"
        onClick={() => {
          handleSignOut();
        }}>
        Sign Out
      </button>
    </div>
  );
}
