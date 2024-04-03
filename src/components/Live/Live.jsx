import { useState, useEffect } from "react";
import { collection, getDocs, doc } from "firebase/firestore";
import { db } from "../../config/firebase";

export default function Live() {
  const [ytLink, setYtLink] = useState([]);
  const [fbLink, setFbLink] = useState([]);
  const [tkLink, setTkLink] = useState([]);
  const [showLive, setShowLive] = useState(false);

  const ytCollection = collection(db, "youtubeLive");
  const fbCollection = collection(db, "facebookLive");
  const tkCollection = collection(db, "tiktokLive");

  useEffect(() => {
    const getFbLink = async () => {
      try {
        const data = await getDocs(fbCollection);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setFbLink(filteredData);
      } catch (err) {
        console.log(err);
      }
    };

    const getYtLink = async () => {
      try {
        const data = await getDocs(ytCollection);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setYtLink(filteredData);
      } catch (err) {
        console.log(err);
      }
    };

    const getTkLink = async () => {
      try {
        const data = await getDocs(tkCollection);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setTkLink(filteredData);
      } catch (err) {
        console.log(err);
      }
    };

    getFbLink();
    getYtLink();
    getTkLink();
  }, []);

  const items = [
    {
      title: "Youtube",
      icon: <i className="fa-brands fa-youtube"></i>,
      color: "#ff0000",
      link: ytLink.map((link) => {
        return link.link;
      }),
    },
    {
      title: "Facebook",
      icon: <i className="fa-brands fa-facebook"></i>,
      color: "#1877F2",
      link: fbLink.map((link) => {
        return link.link;
      }),
    },
    {
      title: "TikTok",
      icon: <i className="fa-brands fa-tiktok"></i>,
      color: "#000000",
      link: tkLink.map((link) => {
        return link.link;
      }),
    },
  ];

  return (
    <div className="min-h-[90vh]">
      <div className="relative bg-black w-[100vw] mb-[2rem]">
        <img
          src="/images/member/IMG_1713.webp"
          alt=""
          className="h-[30vh] xl:h-[40vh] w-[100vw] object-cover opacity-[.4]  mb-[1rem]"
        />
        <h1 className="uppercase absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 tracking-wider w-max mt-[1rem] text-white font-bold text-[1.5rem] xl:text-[2.5rem] p-0">
          watch live
        </h1>
      </div>
      <div className="w-[100vw] justify-center flex flex-wrap lg:justify-center gap-[.8rem] lg:gap-[2rem]">
        {items.map((item) => {
          return (
            <div key={item.title}>
              <a
                href={item.link}
                target="_blank"
                className={`relative flex rounded overflow-hidden w-[22rem] lg:w-[24rem] h-[4rem]`}
                style={{ backgroundColor: item.color }}>
                <div
                  className="flex absolute top-0 left-0 text-white text-[1.5rem] w-[20%] h-[100%] justify-center items-center"
                  style={{ backgroundColor: "rgba(0, 0, 0, .2)" }}>
                  {item.icon}
                </div>
                <div className="w-[100%] h-full font-bold tracking-wider text-[1.2rem] text-white flex justify-center items-center">
                  {item.title}
                </div>
              </a>
              {/* {item.link.length > 5 && (
                <p
                  className="tracking-wider mt-[.2rem] text-center font-medium text-[#ff0000]"
                  onClick={() => {
                    console.log(item.link.length);
                  }}>
                  <i className="fa-solid fa-podcast mr-[.5rem]"></i>
                  We are Live
                </p>
              )} */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
