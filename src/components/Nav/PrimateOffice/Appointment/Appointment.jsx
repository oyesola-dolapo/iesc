import React, { useState } from "react";
import { toast } from "react-toastify";
import { db } from "../../../../config/firebase";
import { addDoc, collection } from "firebase/firestore";

export default function Appointment() {
  const [department, setDepartment] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [check, setCheck] = useState(undefined);

  const handleDepartment = (e) => {
    setDepartment(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleCheck = (e) => {
    setCheck(e.target.checked);
  };

  const autoClose = { autoClose: 800 };

  const linkCollectionRef = collection(db, "appointment");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(linkCollectionRef, {
        name: name,
        phone: phone,
        email: email,
        address: address,
        date: date,
        department: department,
      });
      toast.success("Successfully Added", autoClose);
      setName("");
      setPhone("");
      setAddress("");
      setEmail("");
      setDate("");
    } catch (err) {
      toast.error("Error", autoClose);
      console.log(err);
    }
  };

  const forms = [
    {
      title: "Full Name",
      type: "text",
      input: handleName,
      value: name,
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
      title: "Appointment Date",
      type: "date",
      input: handleDate,
      value: date,
    },
    {
      title: "Address",
      type: "text",
      input: handleAddress,
      value: address,
    },
  ];

  const options = [
    {
      value: "Prayer Request",
    },

    {
      value: "Counselling",
    },
    {
      value: "Prophetic insight",
    },
    {
      value: "Courtesy Visit",
    },

    {
      value: "Personal",
    },
  ];

  return (
    <div className="min-h-[100vh] pt-[5rem]">
      <h1 className="text-center text-[1.4rem] font-bold mb-[1rem] uppercase">
        BOOK <span className="text-textGold">APPOINTMENT</span>
      </h1>
      <div className="px-[1rem]">
        <form action="" onSubmit={check && handleSubmit}>
          <div className="flex justify-center items-center">
            <label
              for="department"
              className="uppercase mr-[.5rem] text-[.8rem] font-medium">
              purpose of appointment:
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
          <div className="lg:flex lg:flex-wrap gap-[1rem] lg:w-[75%] lg:mx-auto mt-[1rem]">
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
          <div className="flex justify-center mb-4 mt-2 items-start lg:items-center">
            <input
              type="checkbox"
              name="check"
              id="check"
              checked={check}
              onChange={handleCheck}
              className="mt-1 lg:mt-0"
            />
            <label htmlFor="check" className="ml-2">
              I, {name} wish to certify that made this appointment on good faith
              and without Ulterior motive and all information given therein are
              True.
            </label>
          </div>
          <button
            type="submit"
            disabled={!check}
            className={`flex justify-center items-center w-full h-[3rem] lg:w-[20rem] bg-webColor text-black rounded font-bold mt-[.5rem] mx-auto ${
              !check && "opacity-50 cursor-not-allowed"
            }`}>
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
