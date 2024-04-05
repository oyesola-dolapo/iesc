import React, { useState, useEffect } from "react";
import Landing from "./Landing/Landing";
import Location from "./Location";
import QuickLink from "./QuickLinks/QuickLink";

export default function Home() {
  return (
    <section id="Home" className="relative">
      <Landing />
      {/* <div className="w-full">
        <Location />
      </div> */}
      <div className="mt-[1rem]">
        <QuickLink />
      </div>
    </section>
  );
}
