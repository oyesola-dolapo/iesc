import React, { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";

export default function Youtube({ active }) {
  const [links, setLinks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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
  }, [linkCollectionRef]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredLinks = links.filter((link) =>
    link.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section
      id="Youtube"
      className={`px-[1rem] lg:px-[2rem] ${active ? "" : "hidden"}`}>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search video by title..."
          value={searchQuery}
          onChange={handleSearchChange}
          className=" border-2 border-gray-300 rounded-md px-3 py-1 w-full lg:w-[50%] h-[3rem] focus:outline-webColor focus:outline-1"
        />
      </div>
      <div
        className={`${
          filteredLinks.length > 2 && "lg:justify-between"
        } sm:flex sm:justify-start lg:gap-[1.5rem] sm:flex-wrap lg:w-[90%] lg:mx-auto`}>
        {filteredLinks.map((link) => (
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
        ))}
        {filteredLinks.length === 0 && (
          <p className="text-center w-full mt-4">No videos found.</p>
        )}
      </div>
    </section>
  );
}
