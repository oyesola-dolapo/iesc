import React from "react";
import AddYoutube from "../AddYoutube";
import AddFacebook from "../AddFacebook";
import AdminLive from "../AdminLive/AdminLive";

export default function AddLink() {
  return (
    <div className="pt-[5rem] px-[1rem] lg:px-[2rem] flex flex-wrap gap-[1rem] lg:gap-[2rem]">
      <AddYoutube />
      <AddFacebook />
      <AdminLive />
    </div>
  );
}
