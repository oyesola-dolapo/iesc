import React from "react";

export default function Location() {
  return (
    <section className="py-[1rem]">
      <h1 className="uppercase text-2xl pb-[1rem] text-center text-webColor font-bold">
        locate us
      </h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.954501452327!2d3.3114911747533022!3d6.527430893465217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8e5f29ff59bf%3A0xe1922c4a94d72886!2s2%20Primate%20Ayodele%20Cres%2C%20Isaga%20Tedo%2C%20Close%20102214%2C%20Lagos!5e0!3m2!1sen!2sng!4v1709333354852!5m2!1sen!2sng"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"></iframe>
    </section>
  );
}
