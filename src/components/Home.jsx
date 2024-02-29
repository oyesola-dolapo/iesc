import React from "react";
import Nav from "./Nav/Nav";
import Landing from "./Landing";

export default function Home() {
  return (
    <section id="Home" className="relative">
      <Nav />
      <Landing />
    </section>
  );
}
