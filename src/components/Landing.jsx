import React from "react";

export default function Landing() {
  return (
    <div className="w-full h-[90vh] sm:h-screen relative flex px-[.6rem] bg-black">
      <img
        src="/images/bg-img.webp"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover opacity-[.6] z-[0]"
      />
      <div className="z-[0] m-auto text-center text-white lg:pt-[4rem]">
        <h1 className="text-white uppercase text-[1.8rem] lg:text-[4rem] font-bold">
          welcome to inri evangelical spiritual{" "}
          <span className="text-webColor">church</span>
        </h1>
        <div className="font-medium mt-4 lg:text-[1.5rem] lg:px-[10rem]">
          <p>
            {" "}
            "What then shall we say, brothers and sisters? When you come
            together, each of you has a hymn, or a word of instruction, a
            revelation, a tongue or an interpretation. Everything must be done
            so that the church may be built up."
          </p>
          <p>- 1 Corinthians 14:26</p>
        </div>
        <button className="border-2 border-solid border-webColor px-8 py-3 mt-8 bg-[rgba(255, 255, 255, 0.5)] backdrop-filter backdrop-blur-md">
          worship with us
        </button>
      </div>
    </div>
  );
}
