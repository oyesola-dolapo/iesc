import React, { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { collection, getDocs, doc } from "firebase/firestore";
import { toast } from "react-toastify";

export default function Youtube() {
  const [links, setLinks] = useState([]);

  const linkCollectionRef = collection(db, "youtube");

  useEffect(() => {
    toast.info("Loading...", {autoClose: 600});

    const getLink = async () => {
      try {
        const data = await getDocs(linkCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setLinks(filteredData);
      } catch (err) {
        console.log(err);
      }
    };

    getLink();
  }, []);

  return (
    <section id="Youtube" className=" px-[1rem] lg:px-[2rem]">
      {/* <h2
        className={`${
          links.length === 0 && "hidden"
        } text-center mb-[.5rem] text-[1rem] lg:text-[1.2rem] font-bold`}>
        YOUTUBE VIDEOS
      </h2> */}
      <div
        className={`${
          links.length > 2 ? "lg:justify-between" : ""
        } sm:flex sm:justify-between lg:gap-[1.5rem] sm:flex-wrap lg:w-[90%] lg:mx-auto`}>
        {links.map((link) => {
          return (
            // <div
            //   key={link.link}
            //   className="youtube-container"
            //   dangerouslySetInnerHTML={{ __html: link.link }}
            // />

            <div
              className="sm:w-[49%] lg:w-[30%] mb-[1rem] lg:mb-0"
              key={link.id}>
              <iframe
                src={link.link}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowFullScreen="true"
                className="w-full h-[15rem] lg:h-[15rem]"></iframe>{" "}
              <p className="text-[.9rem] lg:text-[1rem]">{link.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
