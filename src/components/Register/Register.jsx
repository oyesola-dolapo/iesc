import React from "react";

export default function Register() {
  const forms = [
    { title: "First Name" },
    { title: "Last Name" },
    { title: "Phone No." },
    { title: "Email" },
    { title: "Date of Birth" },
    { title: "Address" },
    { title: "City" },
    { title: "State" },
    { title: "Country" },
  ];
  const options = [
    {
      value: "media",
    },
    {
      value: "choir",
    },
    {
      value: "usher",
    },
    {
      value: "cleaner",
    },
    {
      value: "music academy",
    },
    {
      value: "adult education",
    },
    {
      value: "sign language",
    },
  ];
  return (
    <div className="min-h-[100vh] pt-[5rem]">
      <h1 className="text-center text-[1.4rem] font-bold mb-[1rem] uppercase">
        Join a <span className="text-textGold">Department</span>
      </h1>
      <div className="px-[1rem]">
        <form action="">
          <div className="flex justify-center items-center">
            <label
              for="department"
              className="uppercase mr-[.5rem] text-[.8rem] font-medium">
              select a department:
            </label>
            <select
              id="department"
              name="department"
              className="uppercase p-[.3rem] border-2 border-webColor rounded text-[.8rem]">
              {options.map((option) => {
                return <option value={option.value}>{option.value}</option>;
              })}
            </select>
          </div>
          <div className="lg:flex lg:flex-wrap gap-[1rem] lg:w-[70%] lg:mx-auto mt-[1rem]">
            {forms.map((form) => {
              return (
                <div className="flex flex-col mb-[.6rem] lg:w-max">
                  <label htmlFor={form.title} className="font-medium">
                    {form.title}
                  </label>
                  <input
                    type="text"
                    placeholder={`Enter ${form.title}`}
                    className="border-2 border-webColor rounded-lg h-[3rem] px-[1rem] mt-[.3rem] lg:w-[30rem]"
                  />
                </div>
              );
            })}
          </div>
          <button type="submit" className="flex justify-center items-center w-full h-[3rem] lg:w-[20rem] bg-webColor text-black rounded font-bold mt-[.5rem] mx-auto">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}
