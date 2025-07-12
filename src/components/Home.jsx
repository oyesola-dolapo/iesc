import React, { useState, useEffect } from "react";
import Landing from "./Landing/Landing";
import Location from "./Location";
import QuickLink from "./QuickLinks/QuickLink";

export default function Home() {
  return (
    <section
      id="Home"
      className="min-h-screen bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/member/flag.jpg')",
      }}>
      <Landing />

      <div className="mt-[1rem]">
        <QuickLink />
      </div>
      <div className="w-full">
        <Location />
      </div>
    </section>
  );
}
