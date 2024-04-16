import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { db } from "../../../../config/firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

export default function Registration() {
  const [data, setData] = useState([]);

  const dataCollectionRef = collection(db, "registration");

  const autoClose = { autoClose: 800 };

  const getLink = async () => {
    try {
      const data = await getDocs(dataCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(filteredData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getLink();
  }, []);

  const handleDelete = async (id) => {
    const linkDoc = doc(db, "registration", id);
    try {
      await deleteDoc(linkDoc);
      toast.success("Successfully Deleted", autoClose);
      getLink();
    } catch (err) {
      console.log(err);
      toast.error("Error", autoClose);
    }
  };

  return (
    <div className="min-h-[100vh] pt-[5rem] flex flex-col">
      <h1 className="text-center text-[1.4rem] font-bold mb-[1rem]">
        Registered <span className="text-textGold">Data</span>
      </h1>
      <div className="overflow-scroll lg:overflow-hidden px-[1rem]">
        <table className="lg:mx-auto">
          <thead>
            <tr className="text-[.95rem] uppercase bg-gray-400">
              <th>department</th>
              <th>firstname</th>
              <th>lastname</th>
              <th>Phone No.</th>
              <th>email</th>
              <th>dob</th>
              <th>address</th>
              <th>city</th>
              <th>state</th>
              <th>country</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="text-[.85rem] uppercase text-center font-medium">
                <td className="py-2">{item.department}</td>
                <td>{item.fname}</td>
                <td>{item.sname}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td className="min-w-[7rem]">{item.dob}</td>
                <td className="min-w-[10rem]">{item.address}</td>
                <td>{item.city}</td>
                <td>{item.state}</td>
                <td>{item.country}</td>
                <td
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                  className="cursor-pointer">
                  <i class="fa-solid fa-trash text-[#ff0000]"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
