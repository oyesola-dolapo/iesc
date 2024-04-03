import React from "react";

export default function Live() {
  return (
    <div className="min-h-[90vh]">
      <div className="relative bg-black w-[100vw] mb-[1rem]">
        <img
          src="/images/member/IMG_1713.webp"
          alt=""
          className="h-[30vh] xl:h-[40vh] w-[100vw] object-cover opacity-[.4]  mb-[1rem]"
        />
        <h1 className="uppercase absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 tracking-wider w-max mt-[1rem] text-white font-bold text-[1.5rem] xl:text-[2.5rem] p-0">
          watch live
        </h1>
      </div>
      
    </div>
  );
}
