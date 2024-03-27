import React, { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { collection, getDocs, doc } from "firebase/firestore";

export default function Youtube() {
  const [links, setLinks] = useState([]);

  const linkCollectionRef = collection(db, "youtube");

  useEffect(() => {
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
    <div className="pt-[4.5rem] px-[1rem] lg:px-[2rem]">
      <h2 className="text-center mb-[.5rem] text-[1.2rem] font-bold">
        YOUTUBE VIDEOS
      </h2>
      <div className="lg:flex lg:gap-[1rem] lg:flex-wrap">
        {links.map((link) => {
          return (
            // <div
            //   key={link.link}
            //   className="youtube-container"
            //   dangerouslySetInnerHTML={{ __html: link.link }}
            // />

            <div className="lg:w-[40%] mb-[1rem] lg:mb-0">
              <iframe
                src={link.link}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                className="w-full h-[15rem] lg:h-[22rem]"></iframe>{" "}
              <p className="text-[.9rem] lg:text-[1.2rem]">{link.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
