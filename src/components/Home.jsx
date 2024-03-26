import React, { useState, useEffect } from "react";
import Landing from "./Landing/Landing";
import Landing2 from "./Landing/Landing2";
import Landing3 from "./Landing/Landing3";
import Location from "./Location";

export default function Home() {
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActivePage((prevActivePage) => {
        if (prevActivePage === 1) return 2;
        else if (prevActivePage === 2) return 3;
        else return 1;
      });
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="Home" className="relative">
      {activePage === 1 && <Landing />}
      {activePage === 2 && <Landing2 />}
      {activePage === 3 && <Landing3 />}
      <div className="w-full">
        <Location />
      </div>
    </section>
  );
}
