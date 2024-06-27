import { useState, useEffect } from "react";
import { db } from "../../../config/firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { toast } from "react-toastify";

export default function AddYoutube() {
  const [ytVid, setYtVid] = useState([]);
  const [ytLink, setYtLink] = useState("");
  const [ytTitle, setYtTitle] = useState("");
  const [loader, setLoader] = useState(false);
  const [deleteLoader, setDeleteLoader] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredYtVid, setFilteredYtVid] = useState([]);

  const autoClose = { autoClose: 800 };

  useEffect(() => {
    setIsDisabled(!(ytLink && ytTitle));
  }, [ytLink, ytTitle]);

  const handleYtLink = (e) => {
    setYtLink(e.target.value);
  };
  const handleYtTitle = (e) => {
    setYtTitle(e.target.value);
  };
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
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
      console.error("Error fetching documents:", err);
    }
  };

  useEffect(() => {
    getLink();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filteredData = ytVid.filter((link) =>
        link.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredYtVid(filteredData);
    } else {
      setFilteredYtVid([]);
    }
  }, [searchQuery, ytVid]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      await addDoc(linkCollectionRef, { link: ytLink, title: ytTitle });
      toast.success("Successfully Added", autoClose);
      getLink();
      setYtLink("");
      setYtTitle("");
    } catch (err) {
      toast.error("Error", autoClose);
      console.error("Error adding document:", err);
    } finally {
      setLoader(false);
    }
  };

  const handleDelete = async (id) => {
    const linkDoc = doc(db, "youtube", id);
    try {
      setDeleteLoader(true);
      await deleteDoc(linkDoc);
      toast.success("Successfully Deleted", autoClose);
      getLink();
    } catch (err) {
      toast.error("Error deleting document", autoClose);
      console.error("Error deleting document:", err);
    } finally {
      setDeleteLoader(false);
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
            required
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
            required
            value={ytTitle}
            onChange={handleYtTitle}
            placeholder="Add video title..."
            className="h-[3rem] w-full px-[1rem] border-2 border-solid border-webColor rounded-lg"
          />
        </div>
        <button
          type="submit"
          disabled={isDisabled}
          className={`bg-black text-textGold rounded-lg w-[6rem] h-[2.5rem] mt-[.5rem] font-medium tracking-wide ${
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

      <div className="pt-[1rem]">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full px-[1rem] py-[0.5rem] mb-[1rem] border-2 border-solid border-webColor rounded-lg"
        />
        {searchQuery && (
          <div className="sm:flex sm:justify-between flex-wrap lg:block">
            {filteredYtVid.length > 0 ? (
              filteredYtVid.map((link) => (
                <div
                  className="w-full sm:w-[49%] lg:w-full mb-[1rem]"
                  key={link.id}>
                  <iframe
                    src={link.link}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-[15rem] sm:h-[20rem] lg:h-[14rem]"></iframe>{" "}
                  <p className="text-[.9rem] ">{link.title}</p>
                  {deleteLoader ? (
                    <lord-icon
                      src="https://cdn.lordicon.com/gkryirhd.json"
                      trigger="loop"
                      state="loop-rotation-three-quarters"
                      colors="primary:#ef4444"
                      style={{ width: "25px", height: "25px" }}></lord-icon>
                  ) : (
                    <p
                      className="mt-[.2rem] underline text-red-500 cursor-pointer"
                      onClick={() => handleDelete(link.id)}>
                      Delete Video
                    </p>
                  )}
                </div>
              ))
            ) : (
              <p className="text-center w-full">No videos found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
