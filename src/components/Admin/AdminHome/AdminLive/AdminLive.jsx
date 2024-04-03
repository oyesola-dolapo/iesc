import { useState } from "react";
import { db } from "../../../../config/firebase";
import {
  collection,
  doc,
  updateDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";

export default function AdminLive() {
  const [ytLink, setYtLink] = useState([]);
  const [fbLink, setFbLink] = useState([]);
  const [tkLink, setTkLink] = useState([]);

  const handleYtLink = (e) => {
    setYtLink(e.target.value);
  };
  const handleFbLink = (e) => {
    setFbLink(e.target.value);
  };
  const handleTkLink = (e) => {
    setTkLink(e.target.value);
  };

  const updateYt = async (id) => {
    const linkDoc = doc(db, "youtubeLive", id);
    try {
      await updateDoc(linkDoc, { link: ytLink });
      setYtLink("");
    } catch (err) {
      console.log(err);
    }
  };

  const updateFb = async (id) => {
    const linkDoc = doc(db, "facebookLive", id);
    try {
      await updateDoc(linkDoc, { link: fbLink });
      setFbLink("");
    } catch (err) {
      console.log(err);
    }
  };

  const updateTk = async (id) => {
    const linkDoc = doc(db, "tiktokLive", id);
    try {
      await updateDoc(linkDoc, { link: tkLink });
      setTkLink("");
    } catch (err) {
      console.log(err);
    }
  };

  const lives = [
    {
      key: "Facebook",
      title: "Add Facebook Live",
      subtitle: "Facebook Live",
      placeholder: "Add Link",
      link: handleFbLink,
      value: fbLink,
      submit: updateFb,
    },

    {
      key: "Youtube",
      title: "Add Youtube Live",
      subtitle: "Youtube Live",
      placeholder: "Add Link",
      link: handleYtLink,
      value: ytLink,
      submit: updateYt,
    },
    {
      key: "TikTok",
      title: "Add TikTok Live",
      subtitle: "TikTok Live",
      placeholder: "Add Link",
      link: handleTkLink,
      value: tkLink,
      submit: updateTk,
    },
  ];

  return (
    <div className="w-full lg:w-[25rem]">
      {lives.map((live) => {
        return (
          <div className="mb-[1rem]" key={live.key}>
            <h1 className=" font-bold tracking-wide mb-[.5rem] uppercase">
              {live.title}
            </h1>
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                live.submit(live.key);
              }}>
              <div className="flex flex-col">
                <label htmlFor="" className="mb-[.5rem] text-[.8rem] uppercase">
                  {live.subtitle}
                </label>
                <input
                  type="text"
                  value={live.value}
                  onChange={live.link}
                  placeholder="Add video link..."
                  className="h-[3rem] w-full px-[1rem] border-2 border-solid border-webColor rounded-lg"
                />
              </div>
              <button
                type="submit"
                className="bg-black text-textGold rounded-lg w-[6rem] h-[2.5rem] mt-[.5rem] font-medium tracking-wide">
                ADD
              </button>
            </form>
          </div>
        );
      })}
    </div>
  );
}
