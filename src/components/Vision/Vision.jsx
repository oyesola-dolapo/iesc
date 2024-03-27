import React from "react";

export default function Vision() {
  const style = "text-webColor font-medium";
  return (
    <div>
      <div className="relative bg-black lg:hidden w-[100vw]" >
        <img
          src="/images/personal/IMG_1705.webp"
          alt=""
          className="h-[35vh] w-[100vw] object-cover opacity-[.5]  mb-[1rem]"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 tracking-wider w-max mt-[1rem] text-white font-bold text-[1.5rem] w-full p-0">
          THE VISION AND MISSION
        </h1>
      </div>
      <div className="xl:pt-[4.5rem] px-[1.5rem] xl:w-[60%]">
        <h1 className="hidden xl:flex tracking-wider font-bold text-[1.5rem] mb-[.5rem] xl:text-[2rem]">
          THE VISION AND MISSION
        </h1>
        <p className=" lg:text-[1.2rem]">
          <span className={style}>INRI EVANGELICAL SPIRITUAL CHURCH</span>{" "}
          <br />
          The primary preoccupation of true adherents of the Christian religion
          is to win souls for Christ. Your efforts in words and deeds will
          either make ir mar the realization of this noble aim. <br /> <br />
          Thus, it is the <span className={style}>Vision</span> of the{" "}
          <span className={style}>INRI EVANGELICAL SPIRITUAL CHURCH</span> to
          take the Gospel of Christ to all the nooks and crannies of the earth.
          Structures shall be put in place to simulate the entire populace to be
          partakers. <br /> <br />
          The <span className={style}>CHURCH</span> shall be actively involved
          in <span className={style}>EVANGELISM</span> and{" "}
          <span className={style}>WELFARE</span> services. For the Church the
          Gospel of the stomach must be preached in (pari-pasu) hand in hand.
          Hungry and poverty stricken individuals and societies are not likely
          to be easily convinced of the description of God in the superlatives
          (All Caring, All Loving, A Benevolent God e.t.c). <br /> <br />
          Thus, our <span className={style}>MISSION</span> is to preach{" "}
          <span className={style}>
            LOVE, ONENESS, SPIRITUAL PURIFICATION, KINDNESS AND MEEKNESS
          </span>{" "}
          among other positive attributes of true Christmas to everyone. <br />{" "}
          <br />
          All the Church Departments shall be active participants in the
          realization of all these. The Departments shall propelled into action
          by encouraging each one to carry out assigned programmes singularly or
          collectively in manners that will edify Christ.
        </p>
      </div>
    </div>
  );
}
