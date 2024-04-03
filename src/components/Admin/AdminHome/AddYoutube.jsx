import { useState, useEffect } from "react";
import { db } from "../../../config/firebase";
import {
  collection,
  getDocs,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

export default function AddYoutube() {
  const [ytVid, setYtVid] = useState([]);
  const [ytLink, setYtLink] = useState("");
  const [ytTitle, setYtTitle] = useState("");

  const handleYtLink = (e) => {
    setYtLink(e.target.value);
  };
  const handleYtTitle = (e) => {
    setYtTitle(e.target.value);
  };

  const linkCollectionRef = collection(db, "youtube");

  const getLink = async () => {
    try {
      const data = await getDocs(linkCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setYtVid(filteredData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getLink();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(linkCollectionRef, { link: ytLink, title: ytTitle });
      getLink();
      setYtLink("");
      setYtTitle("");
    } catch (err) {
      console.log(err);
    }
  };
  const handleDelete = async (id) => {
    const linkDoc = doc(db, "youtube", id);
    try {
      await deleteDoc(linkDoc);
      getLink();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Youtube w-full lg:w-[25rem]">
      <h1 className=" font-bold tracking-wide mb-[.5rem]">ADD YOUTUBE</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="ytvid" className="mb-[.5rem] text-[.8rem]">
            YOUTUBE LINK
          </label>
          <input
            type="text"
            name="ytvid"
            id="ytvid"
            value={ytLink}
            onChange={handleYtLink}
            placeholder="Add video link..."
            className="h-[3rem] w-full px-[1rem] border-2 border-solid border-webColor rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="tyvid" className="mb-[.5rem] text-[.8rem] mt-[.5rem]">
            VIDEO TITLE
          </label>
          <input
            type="text"
            name="ytvid"
            id="ytvid"
            value={ytTitle}
            onChange={handleYtTitle}
            placeholder="Add video title..."
            className="h-[3rem] w-full px-[1rem] border-2 border-solid border-webColor rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="bg-black text-textGold rounded-lg w-[6rem] h-[2.5rem] mt-[.5rem] font-medium tracking-wide">
          ADD
        </button>
      </form>

      <div className="pt-[1rem] sm:flex sm:justify-between flex-wrap lg:block ">
        {ytVid.map((link) => {
          return (
            <div
              className="w-full sm:w-[49%] lg:w-full mb-[1rem]"
              key={link.id}>
              <iframe
                src={link.link}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                className="w-full h-[15rem] sm:h-[20rem] lg:h-[14rem]"></iframe>{" "}
              <p className="text-[.9rem] ">{link.title}</p>
              <p
                className="mt-[.2rem] underline text-red-500 cursor-pointer"
                onClick={() => handleDelete(link.id)}>
                Delete Video
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
