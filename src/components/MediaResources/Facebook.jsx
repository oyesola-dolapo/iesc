import React, { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { collection, getDocs, doc } from "firebase/firestore";

export default function Facebook() {
  const [links, setLinks] = useState([]);

  const linkCollectionRef = collection(db, "facebook");

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
    <section id="Facebook" className="mt-[1.5rem] px-[1rem] lg:px-[2rem]">
      <h2
        className={`${
          links.length === 0 && "hidden"
        } text-center mb-[.5rem] text-[1.2rem] font-bold`}>
        FACEBOOK VIDEOS
      </h2>
      <div className="lg:flex lg:gap-[2rem] lg:justify-between lg:flex-wrap lg:w-[80%] lg:mx-auto">
        {links.map((link) => {
          return (
            <div className="lg:w-[48%] mb-[1rem] lg:mb-0">
              <iframe
                src={link.link}
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen="true"
                className="w-full h-[15rem] lg:h-[20rem]"></iframe>{" "}
              <p className="text-[.9rem] lg:text-[1.2rem]">{link.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
