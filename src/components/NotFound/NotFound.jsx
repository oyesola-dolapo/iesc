import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-[90vh] flex justify-center items-center flex-col pt-[4rem]">
      <h1 className="uppercase font-bold text-[2rem] lg:text-[4rem] tracking-wide">
        Page not <span className="text-textGold">found</span>
      </h1>

      <p className="tracking-wider font">
        Go to{" "}
        <Link to="/" className="text-textGold underline">
          Homepage
        </Link>
      </p>
    </div>
  );
}
