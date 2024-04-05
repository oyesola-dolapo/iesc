import { useState, useEffect } from "react";
import { db } from "../../../../config/firebase";
import {
  collection,
  doc,
  updateDoc,
  getDocs,
  deleteDoc,
  addDoc,
  setDoc,
} from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminLive() {
  const [yt, setYt] = useState("");
  const [ytHalf, setYtHalf] = useState("");
  const [fb, setFb] = useState("");
  const [fbHalf, setFbHalf] = useState("");
  const [tk, setTk] = useState("");
  const [tkHalf, setTkHalf] = useState("");
  const [tkLink, setTkLink] = useState([]);
  const [fbLink, setFbLink] = useState([]);
  const [ytLink, setYtLink] = useState([]);
  const [tkHalfLink, setTkHalfLink] = useState([]);
  const [fbHalfLink, setFbHalfLink] = useState([]);
  const [ytHalfLink, setYtHalfLink] = useState([]);


  const ytCollection = collection(db, "youtubeLive");
  const fbCollection = collection(db, "facebookLive");
  const tkCollection = collection(db, "tiktokLive");
  const tkHalfCollection = collection(db, "tiktokHalfHour");
  const fbHalfCollection = collection(db, "facebookHalfHour");
  const ytHalfCollection = collection(db, "youtubeHalfHour");

  const autoClose = { autoClose: 800 };

  // GET DB LINKS
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

  // GET INPUT VALUES
  const handleYt = (e) => {
    setYt(e.target.value);
  };
  const handleFb = (e) => {
    setFb(e.target.value);
  };
  const handleTk = (e) => {
    setTk(e.target.value);
  };
  const handleYtHalf = (e) => {
    setYtHalf(e.target.value);
  };
  const handleFbHalf = (e) => {
    setFbHalf(e.target.value);
  };
  const handleTkHalf = (e) => {
    setTkHalf(e.target.value);
  };

  // UPDATE DB LINK
  const updateYt = async (id) => {
    try {
      await setDoc(doc(ytCollection, id), { link: yt });
      toast.success("Link Successfully Added..", autoClose);
      setYt("");
      getYtLink();
    } catch (err) {
      toast.error("Error adding link", autoClose);
      console.log(err);
    }
  };

  const updateYtHalf = async (id) => {
    try {
      await setDoc(doc(ytHalfCollection, id), { link: ytHalf });
      toast.success("Link Successfully Added..", autoClose);
      setYtHalf("");
      getYtHalfLink();
    } catch (err) {
      console.log(err);
      toast.error("Error adding link", autoClose);
    }
  };

  const updateFb = async (id) => {
    try {
      await setDoc(doc(fbCollection, id), { link: fb });
      toast.success("Link Successfully Added..", autoClose);
      setFb("");
      getFbLink();
    } catch (err) {
      console.log(err);
      toast.error("Error adding link", autoClose);
    }
  };

  const updateFbHalf = async (id) => {
    try {
      await setDoc(doc(fbHalfCollection, id), { link: fbHalf });
      toast.success("Link Successfully Added..", autoClose);
      setFbHalf("");
      getFbHalfLink();
    } catch (err) {
      console.log(err);
      toast.error("Error adding link", autoClose);
    }
  };

  const updateTk = async (id) => {
    try {
      await setDoc(doc(tkCollection, id), { link: tk });
      toast.success("Link Successfully Added..", autoClose);
      setTkLink("");
      getTkLink();
    } catch (err) {
      console.log(err);
      toast.error("Error adding link", autoClose);
    }
  };

  const updateTkHalf = async (id) => {
    try {
      await setDoc(doc(tkHalfCollection, id), { link: tkHalf });
      toast.success("Link Successfully Added..", autoClose);
      setTkHalf("");
      getTkHalfLink();
    } catch (err) {
      console.log(err);
      toast.error("Error adding link", autoClose);
    }
  };

  // DELETE LINK
  const deleteFb = async (id) => {
    const linkDoc = doc(db, "facebookLive", id);
    try {
      await deleteDoc(linkDoc);
      toast.success("Successfully Deleted", autoClose);
      getFbLink();
    } catch (err) {
      toast.error("Error deleting link", autoClose);
      console.log(err);
    }
  };

  const deleteFbHalf = async (id) => {
    const linkDoc = doc(db, "facebookHalfHour", id);
    try {
      await deleteDoc(linkDoc);
      toast.success("Successfully Deleted", autoClose);
      getFbHalfLink();
    } catch (err) {
      toast.error("Error deleting link", autoClose);
      console.log(err);
    }
  };

  const deleteYt = async (id) => {
    const linkDoc = doc(db, "youtubeLive", id);
    try {
      await deleteDoc(linkDoc);
      toast.success("Successfully Deleted", autoClose);
      getYtLink();
    } catch (err) {
      toast.error("Error deleting link", autoClose);
      console.log(err);
    }
  };

  const deleteYtHalf = async (id) => {
    const linkDoc = doc(db, "youtubeHalfHour", id);
    try {
      await deleteDoc(linkDoc);
      toast.success("Successfully Deleted", autoClose);
      getYtHalfLink();
    } catch (err) {
      toast.error("Error deleting link", autoClose);
      console.log(err);
    }
  };

  const deleteTk = async (id) => {
    const linkDoc = doc(db, "tiktokLive", id);
    try {
      await deleteDoc(linkDoc);
      toast.success("Successfully Deleted", autoClose);
      getTkLink();
    } catch (err) {
      toast.error("Error deleting link", autoClose);
      console.log(err);
    }
  };

  const deleteTkHalf = async (id) => {
    const linkDoc = doc(db, "tiktokHalfHour", id);
    try {
      await deleteDoc(linkDoc);
      toast.success("Successfully Deleted", autoClose);
      getTkHalfLink();
    } catch (err) {
      toast.error("Error deleting link", autoClose);
      console.log(err);
    }
  };

  // INPUTS
  const lives = [
    {
      key: "Facebook",
      title: "Add Facebook Live",
      subtitle: "Facebook Live",
      placeholder: "Add Link",
      link: handleFb,
      value: fb,
      submit: updateFb,
      getLink: fbLink,
      delete: deleteFb,
    },
    {
      key: "facebookHalf",
      title: "Add Facebook Half Hour Live",
      subtitle: "Facebook Live",
      placeholder: "Add Link",
      link: handleFbHalf,
      value: fbHalf,
      submit: updateFbHalf,
      getLink: fbHalfLink,
      delete: deleteFbHalf,
    },

    {
      key: "Youtube",
      title: "Add Youtube Live",
      subtitle: "Youtube Live",
      placeholder: "Add Link",
      link: handleYt,
      value: yt,
      submit: updateYt,
      getLink: ytLink,
      delete: deleteYt,
    },
    {
      key: "youtubeHalf",
      title: "Add Youtube Half Hour",
      subtitle: "Youtube Live",
      placeholder: "Add Link",
      link: handleYtHalf,
      value: ytHalf,
      submit: updateYtHalf,
      getLink: ytHalfLink,
      delete: deleteYtHalf,
    },
    {
      key: "TikTok",
      title: "Add TikTok Live",
      subtitle: "TikTok Live",
      placeholder: "Add Link",
      link: handleTk,
      value: tk,
      submit: updateTk,
      getLink: tkLink,
      delete: deleteTk,
    },
    {
      key: "tiktokHalf",
      title: "Add TikTok Half Hour",
      subtitle: "TikTok Live",
      placeholder: "Add Link",
      link: handleTkHalf,
      value: tkHalf,
      submit: updateTkHalf,
      getLink: tkHalfLink,
      delete: deleteTkHalf,
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
            {live.getLink.map((link) => {
              return (
                <div key={link.id}>
                  <p className="text-[1.2rem] mt-[.5rem]">{link.link} </p>
                  {link.link && (
                    <p
                      className="underline text-[#ff0000] cursor-pointer"
                      onClick={() => {
                        live.delete(link.id);
                      }}>
                      Remove Link
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
