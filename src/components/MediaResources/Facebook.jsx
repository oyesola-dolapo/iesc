import React, { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Facebook({ active }) {
  const [links, setLinks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [linksPerPage] = useState(6);

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
  }, [linkCollectionRef]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const filteredLinks = links.filter((link) =>
    link.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastLink = currentPage * linksPerPage;
  const indexOfFirstLink = indexOfLastLink - linksPerPage;
  const currentLinks = filteredLinks.slice(indexOfFirstLink, indexOfLastLink);

  const totalPages = Math.ceil(filteredLinks.length / linksPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="Facebook"
      className={`mt-[1rem] lg:mt-[1.5rem] px-[1rem] lg:px-[2rem] ${
        active ? "" : "hidden"
      }`}>
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
          currentLinks.length > 2 ? "lg:justify-between" : ""
        } sm:flex sm:justify-start lg:gap-[1.5rem] lg:flex-wrap lg:w-[90%] lg:mx-auto`}>
        {currentLinks.map((link) => (
          <div
            className="sm:w-[49%] lg:w-[30%] mb-[1rem] lg:mb-0"
            key={link.id}>
            <iframe
              src={link.link}
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              className="w-full h-[12.5rem] lg:h-[14rem]"></iframe>{" "}
            <p className="text-[.9rem] lg:text-[1rem]">{link.title}</p>
          </div>
        ))}
        {currentLinks.length === 0 && (
          <p className="text-center w-full mt-4">No videos found.</p>
        )}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 border rounded ${
              currentPage === index + 1
                ? "bg-webColor text-black"
                : "bg-gray-200"
            }`}>
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
