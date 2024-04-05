import React, { useState } from "react";
import { toast } from "react-toastify";
import { db } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";

export default function Register() {
  const [department, setDepartment] = useState("");
  const [fname, setFname] = useState("");
  const [sname, setSname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const handleDepartment = (e) => {
    setDepartment(e.target.value);
  };
  const handleFname = (e) => {
    setFname(e.target.value);
  };
  const handleSname = (e) => {
    setSname(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleDob = (e) => {
    setDob(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleCity = (e) => {
    setCity(e.target.value);
  };
  const handleState = (e) => {
    setState(e.target.value);
  };
  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const autoClose = { autoClose: 800 };

  const linkCollectionRef = collection(db, "registration");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(linkCollectionRef, {
        fname: fname,
        sname: sname,
        phone: phone,
        email: email,
        dob: dob,
        address: address,
        city: city,
        state: state,
        country: country,
        department: department,
      });
      toast.success("Successfully Added", autoClose);
      setFname("");
      setSname("");
      setPhone("");
      setAddress("");
      setEmail("");
      setCountry("");
      setCity("");
      setState("");
      setDob("");
    } catch (err) {
      toast.error("Error", autoClose);
      console.log(err);
    }
  };

  const forms = [
    {
      title: "First Name",
      type: "text",
      input: handleFname,
      value: fname,
    },
    {
      title: "Last Name",
      type: "text",
      input: handleSname,
      value: sname,
    },
    {
      title: "Phone No.",
      type: "tel",
      input: handlePhone,
      value: phone,
    },
    {
      title: "Email",
      type: "email",
      input: handleEmail,
      value: email,
    },
    {
      title: "Date of Birth",
      type: "date",
      input: handleDob,
      value: dob,
    },
    {
      title: "Address",
      type: "text",
      input: handleAddress,
      value: address,
    },
    {
      title: "City",
      type: "text",
      input: handleCity,
      value: city,
    },
    {
      title: "State",
      type: "text",
      input: handleState,
      value: state,
    },
    {
      title: "Country",
      type: "text",
      input: handleCountry,
      value: country,
    },
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
        <form action="" onSubmit={handleSubmit}>
          <div className="flex justify-center items-center">
            <label
              for="department"
              className="uppercase mr-[.5rem] text-[.8rem] font-medium">
              select a department:
            </label>
            <select
              id="department"
              name="department"
              className="uppercase p-[.3rem] border-2 border-webColor rounded text-[.8rem]"
              onChange={handleDepartment}
              value={department}
              required>
              <option value="" disabled unselected>
                Select
              </option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>
          </div>
          <div className="lg:flex lg:flex-wrap gap-[1rem] lg:w-[70%] lg:mx-auto mt-[1rem]">
            {forms.map((form) => {
              return (
                <div className="flex flex-col mb-[.6rem] lg:w-max">
                  <label htmlFor={form.title} className="font-medium">
                    {form.title}{" "}
                    <span className="font-bold text-[#ff0000]">*</span>
                  </label>
                  <input
                    type={form.type}
                    required
                    onChange={form.input}
                    value={form.value}
                    placeholder={`Enter ${form.title}`}
                    className="border-2 border-webColor rounded-lg h-[3rem] px-[1rem] mt-[.3rem] lg:w-[30rem]"
                  />
                </div>
              );
            })}
          </div>
          <button
            type="submit"
            className="flex justify-center items-center w-full h-[3rem] lg:w-[20rem] bg-webColor text-black rounded font-bold mt-[.5rem] mx-auto">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
