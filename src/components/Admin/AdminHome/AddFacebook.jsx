import { useState, useEffect } from "react";
import { db } from "../../../config/firebase";
import {
  collection,
  getDocs,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";

export default function AddFacebook() {
  const [fbVid, setFbVid] = useState([]);
  const [fbLink, setFbLink] = useState("");
  const [fbTitle, setFbTitle] = useState("");
  const [loader, setLoader] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if ((fbLink, fbTitle)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [fbLink, fbTitle]);

  const autoClose = { autoClose: 800 };

  const handleFbLink = (e) => {
    setFbLink(e.target.value);
  };
  const handleFbTitle = (e) => {
    setFbTitle(e.target.value);
  };

  const linkCollectionRef = collection(db, "facebook");

  const getLink = async () => {
    try {
      const data = await getDocs(linkCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setFbVid(filteredData);
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
      setLoader(true);
      await addDoc(linkCollectionRef, { link: fbLink, title: fbTitle });
      toast.success("Successfully Added", autoClose);
      getLink();
      setFbLink("");
      setFbTitle("");
    } catch (err) {
      toast.error("Error", autoClose);
      console.log(err);
    } finally {
      setLoader(false);
    }
  };

  const handleDelete = async (id) => {
    const linkDoc = doc(db, "facebook", id);
    try {
      await deleteDoc(linkDoc);
      toast.success("Successfully Deleted", autoClose);
      getLink();
    } catch (err) {
      console.log(err);
      toast.error("Error", autoClose);
    }
  };

  return (
    <div className="Youtube w-full lg:w-[25rem]">
      <h1 className=" font-bold tracking-wide mb-[.5rem]">ADD FACEBOOK</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          {" "}
          <label htmlFor="fbVid" className="mb-[.5rem] text-[.8rem]">
            FACEBOOK LINK
          </label>{" "}
          <input
            type="text"
            name="fbVid"
            id="fbVid"
            onChange={handleFbLink}
            placeholder="Add video link..."
            className="h-[3rem] w-full px-[1rem] border-2 border-solid border-webColor rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          {" "}
          <label htmlFor="fbVid" className="mb-[.5rem] text-[.8rem] mt-[.5rem]">
            VIDEO TITLE
          </label>{" "}
          <input
            type="text"
            name="fbVid"
            id="fbVid"
            onChange={handleFbTitle}
            placeholder="Add video title..."
            className="h-[3rem] w-full px-[1rem] border-2 border-solid border-webColor rounded-lg"
          />
        </div>
        <button
          type="submit"
          disabled={isDisabled}
          className={`bg-black text-textGold rounded-lg w-[6rem] h-[2.5rem] mt-[.5rem] font-medium tracking-wide   ${
            isDisabled && "opacity-50 cursor-not-allowed"
          }`}>
          {loader ? (
            <lord-icon
              src="https://cdn.lordicon.com/gkryirhd.json"
              trigger="loop"
              state="loop-rotation-three-quarters"
              colors="primary:#ddb057"
              style={{ width: "40px", height: "40px" }}></lord-icon>
          ) : (
            <p>ADD</p>
          )}
        </button>
      </form>

      <div className="pt-[1rem] sm:flex sm:justify-between flex-wrap lg:block ">
        {fbVid.map((link) => {
          return (
            <div className="w-full sm:w-[49%] lg:w-full mb-[1rem]">
              <iframe
                src={link.link}
                scrolling="no"
                frameborder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-[15rem]  sm:h-[20rem] lg:h-[14rem]"></iframe>{" "}
              <p className="text-[.9rem] ">{link.title}</p>
              <p
                className={`mt-[.2rem] underline text-red-500 cursor-pointer`}
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
