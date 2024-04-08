import { useState, useEffect } from "react";
import { collection, getDocs, doc } from "firebase/firestore";
import { db } from "../../../config/firebase";

export default function Live() {
  const [ytLink, setYtLink] = useState([]);
  const [fbLink, setFbLink] = useState([]);
  const [tkLink, setTkLink] = useState([]);
  const [tkHalfLink, setTkHalfLink] = useState([]);
  const [fbHalfLink, setFbHalfLink] = useState([]);
  const [ytHalfLink, setYtHalfLink] = useState([]);
  const [show, setShow] = useState(false);

  const ytCollection = collection(db, "youtubeLive");
  const fbCollection = collection(db, "facebookLive");
  const tkCollection = collection(db, "tiktokLive");
  const tkHalfCollection = collection(db, "tiktokHalfHour");
  const fbHalfCollection = collection(db, "facebookHalfHour");
  const ytHalfCollection = collection(db, "youtubeHalfHour");

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

  const getFbHalfLink = async () => {
    try {
      const data = await getDocs(fbHalfCollection);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setFbHalfLink(filteredData);
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

  const getYtHalfLink = async () => {
    try {
      const data = await getDocs(ytHalfCollection);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setYtHalfLink(filteredData);
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

  const getTkHalfLink = async () => {
    try {
      const data = await getDocs(tkHalfCollection);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTkHalfLink(filteredData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFbLink();
    getFbHalfLink();
    getYtLink();
    getYtHalfLink();
    getTkLink();
    getTkHalfLink();
  }, []);

  const items = [
    {
      key: 1,
      title: "Youtube",
      icon: <i className="fa-brands fa-youtube"></i>,
      color: "#ff0000",
      link: ytLink.map((link) => {
        return link.link;
      }),
    },
    {
      key: 2,
      title: "Youtube",
      subtitle: "(INRI HALF HOUR)",
      icon: <i className="fa-brands fa-youtube"></i>,
      color: "#ff0000",
      link: ytHalfLink.map((link) => {
        return link.link;
      }),
    },
    {
      key: 3,
      title: "Facebook",
      icon: <i className="fa-brands fa-facebook"></i>,
      color: "#1877F2",
      link: fbLink.map((link) => {
        return link.link;
      }),
    },
    {
      key: 4,
      title: "Facebook",
      subtitle: "(INRI HALF HOUR)",
      icon: <i className="fa-brands fa-facebook"></i>,
      color: "#1877F2",
      link: fbHalfLink.map((link) => {
        return link.link;
      }),
    },
    {
      key: 5,
      title: "TikTok",
      icon: <i className="fa-brands fa-tiktok"></i>,
      color: "#000000",
      link: tkLink.map((link) => {
        return link.link;
      }),
    },
    {
      key: 6,
      title: "TikTok",
      subtitle: "(INRI HALF HOUR)",
      icon: <i className="fa-brands fa-tiktok"></i>,
      color: "#000000",
      link: tkHalfLink.map((link) => {
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
            <div key={item.key}>
              <a
                href={item.link}
                className={`relative flex rounded overflow-hidden w-[22rem] lg:w-[24rem] h-[3.5rem] lg:h-[4rem]`}
                style={{ backgroundColor: item.color }}>
                <div
                  className="flex absolute top-0 left-0 text-white text-[1.5rem] w-[20%] h-[100%] justify-center items-center"
                  style={{ backgroundColor: "rgba(0, 0, 0, .2)" }}>
                  {item.icon}
                </div>
                <div className="w-[100%] h-full  tracking-wider text-white flex flex-col justify-center items-center">
                  <p className="font-bold  text-[1.2rem]">{item.title}</p>
                  <p className="text-[.8rem]">{item.subtitle}</p>
                </div>
              </a>
              {item.link.map((linkItem, index) => {
                if (linkItem && linkItem.length > 5) {
                  return (
                    <p
                      key={index}
                      className="tracking-wider mt-[.2rem] text-center font-medium text-[#ff0000]"
                      onClick={() => {
                        console.log(linkItem.length);
                      }}>
                      <i className="fa-solid fa-podcast mr-[.5rem]"></i>
                      We are Live
                    </p>
                  );
                }
                return null;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
