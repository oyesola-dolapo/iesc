import React from "react";

export default function Give() {
  return (
    <div className="h-screen">
      <div className="relative bg-black w-[100vw] mb-[1rem] xl:mb-0 xl:w-1/2 xl:h-screen xl:sticky">
        <img
          src="/images/member/flag.webp"
          alt=""
          className="h-[35vh] xl:h-full w-[100vw] xl:w-full object-cover opacity-[.5] mb-[1rem] xl:mb-0"
        />
      </div>
    </div>
  );
}
