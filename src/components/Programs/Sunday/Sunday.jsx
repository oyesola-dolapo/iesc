import React, { useState } from "react";

export default function Sunday() {
  const [location, setLocation] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.954501452327!2d3.3114911747533022!3d6.527430893465217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8e5f29ff59bf%3A0xe1922c4a94d72886!2s2%20Primate%20Ayodele%20Cres%2C%20Isaga%20Tedo%2C%20Close%20102214%2C%20Lagos!5e0!3m2!1sen!2sng!4v1709333354852!5m2!1sen!2sng"
  );
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
      scroll: 500,
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.954501452327!2d3.3114911747533022!3d6.527430893465217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8e5f29ff59bf%3A0xe1922c4a94d72886!2s2%20Primate%20Ayodele%20Cres%2C%20Isaga%20Tedo%2C%20Close%20102214%2C%20Lagos!5e0!3m2!1sen!2sng!4v1709333354852!5m2!1sen!2sng",
      address:
        "No 1 Primate Ayodele Crescent, INRI Bus Stop, along Isolo, Egbe Rd, Mushin, Lagos",
      call: "+234 (803) 301-7747",
      callLink: "tel:+8033017747",
    },

    {
      title: "temilaseyori parish",
      subhead: "service time",
      times: [
        {
          time: "First Service: 10:00am - 12:00pm",
        },
      ],
      scroll: 450,
      address: "Primate Ayodele close, MTN B/Stop Badagry",
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1650.7458452104702!2d2.969540310997787!3d6.463071304089498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b86a5a27ba81f%3A0x5192bfbea50bacc9!2sLagos%20-%20Badagry%20Expy%2C%20Mowo!5e1!3m2!1sen!2sng!4v1713282989447!5m2!1sen!2sng",
    },
    {
      title: "Sope parish",
      subhead: "service time",
      times: [
        {
          time: "English Service: 8:00am - 10:00am",
        },
        {
          time: "Yoruba Service: 10:00am - 1:00am",
        },
        
      ],
      scroll: 400,
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5483805031167!2d3.269418674753749!3d6.578534993414948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b90109d234f5d%3A0x1d4be223ab80e22d!2sPrimate%20Elijah%20Ayodele%20Ave%2C%20Idimu%2C%20Idimu%2FIsheri%20Olofin%20102213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1712649318891!5m2!1sen!2sng",
    },
    {
      title: "Achievers Ark parish",
      subhead: "service time",
      times: [
        {
          time: "First Service: 10:00am - 12:00pm",
        },
      ],
      scroll: 300,
      location: "",
      address:
        "Opposite AP filling station, Tipper garage Area, POTA road, Mowo, Badagry",
      call: "+234 (806) 234-3323",
      callLink: "tel:+2348062363323",
    },

    {
      title: "Talitakumi model parish",
      subhead: "service time",
      times: [
        {
          time: "First Service: 10:00am - 12:00pm",
        },
      ],
      scroll: 300,
      location: "",
      address: "2, Ayinke Sholola Baale B/Stop, lutabo ijoko, ogun state",
      call: "+234 (803) 445-1892",
      callLink: "tel:+2348034451892",
    },
  ];

  return (
    <div className="pt-[4.5rem] flex">
      <div className="static w-screen sm:flex">
        <div className="service-scroll h-[80vh] sm:h-[60vh] lg:h-[80vh] sm:w-[40%] lg:w-[30%] overflow-hidden overflow-y-scroll">
          {services.map((service) => {
            return (
              <div className="mb-[.5rem] mx-[.5rem] p-[1rem] bg-gray-900 text-white">
                <h1 className="uppercase tracking-wider text-textGold font-bold text-[1.5rem]">
                  {service.title}
                </h1>{" "}
                {service.address && (
                  <div className="mb-[.5rem]">
                    <i class="fa-solid fa-location-dot"></i> {service.address}
                  </div>
                )}
                {service.call && (
                  <div className="mb-[.5rem] flex gap-2 items-center">
                    <i class="fa-solid fa-phone"></i>{" "}
                    <a
                      href={service.callLink}
                      className="text-textGold underline">
                      {service.call}
                    </a>
                  </div>
                )}
                <p className="uppercase font-medium text-[1.2rem]">
                  {service.subhead}
                </p>
                <ul>
                  {service.times.map((time) => {
                    return (
                      <li className="lg:text-[1rem] tracking-wider">
                        {time.time}
                      </li>
                    );
                  })}
                </ul>
                <button
                  onClick={() => {
                    if (window.innerWidth <= 768) {
                      window.scrollTo(0, service.scroll);
                    }
                    setLocation(service.location);
                  }}
                  className="bg-webColor text-gray-900 font-bold tracking-wider mt-[.6rem] px-[1.6rem] py-[.3rem] rounded">
                  Locate
                </button>
              </div>
            );
          })}
        </div>

        {location && (
          <div className="sm:w-[60%] lg:w-[70%] sm:h-full px-[.5rem]">
            <iframe
              src={location}
              width="600"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full h-[25rem] sm:h-full"></iframe>
          </div>
        )}
      </div>
    </div>
  );
}
