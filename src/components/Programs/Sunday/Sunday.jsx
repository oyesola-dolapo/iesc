import React, { useState } from "react";

export default function Sunday() {
  const [location, setLocation] = useState(undefined);
  const services = [
    {
      title: "cathedral",
      subhead: "service time",
      times: [
        {
          time: "First Service: 4:30am - 7:30am",
        },
        {
          time: "Second Service: 7:30am - 9:30am",
        },
        {
          time: "Third Service: 9:30am - 11:30am",
        },
        {
          time: "Last Service: 11:30am - 3:30pm",
        },
      ],
      location: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.954501452327!2d3.3114911747533022!3d6.527430893465217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8e5f29ff59bf%3A0xe1922c4a94d72886!2s2%20Primate%20Ayodele%20Cres%2C%20Isaga%20Tedo%2C%20Close%20102214%2C%20Lagos!5e0!3m2!1sen!2sng!4v1709333354852!5m2!1sen!2sng"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-full"></iframe>
      ),
    },

    {
      title: "temilaseyori parish",
      subhead: "service time",
      times: [
        {
          time: "First Service: 10:00am - 12:00pm",
        },
      ],
      location: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.954501452327!2d3.3114911747533022!3d6.527430893465217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8e5f29ff59bf%3A0xe1922c4a94d72886!2s2%20Primate%20Ayodele%20Cres%2C%20Isaga%20Tedo%2C%20Close%20102214%2C%20Lagos!5e0!3m2!1sen!2sng!4v1709333354852!5m2!1sen!2sng"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-full"></iframe>
      ),
    },
    {
      title: "Sope parish",
      subhead: "service time",
      times: [
        {
          time: "First Service: 10:00am - 12:00pm",
        },
      ],
      location: (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.954501452327!2d3.3114911747533022!3d6.527430893465217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8e5f29ff59bf%3A0xe1922c4a94d72886!2s2%20Primate%20Ayodele%20Cres%2C%20Isaga%20Tedo%2C%20Close%20102214%2C%20Lagos!5e0!3m2!1sen!2sng!4v1709333354852!5m2!1sen!2sng"
          width="600"
          height="430"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-full"></iframe>
      ),
    },
  ];

  return (
    <div className="px-[1rem] xl:px-[2rem] pt-[4.5rem] flex min-h-[90vh]">
      <div className="static w-screen hidden lg:flex ">
        <div className="w-[30%] overflow-y-scroll">
          {services.map((service) => {
            return (
              <div className="mb-[2rem]">
                <h1 className="uppercase tracking-wider text-textGold font-bold text-[1.5rem]">
                  {service.title}
                </h1>{" "}
                <p className="uppercase font-medium text-[1.5rem]">
                  {service.subhead}
                </p>
                <ul>
                  {service.times.map((time) => {
                    return (
                      <li className="lg:text-[1.2rem] tracking-wider">
                        {time.time}
                      </li>
                    );
                  })}
                </ul>
                <button
                  onClick={() => {
                    setLocation(service.location);
                  }}
                  className="bg-webColor font-bold tracking-wider mt-[.6rem] px-[1.6rem] py-[.3rem] rounded">
                  Locate
                </button>
              </div>
            );
          })}
        </div>

        <div className="w-[70%]">{location}</div>
      </div>
    </div>
  );
}
