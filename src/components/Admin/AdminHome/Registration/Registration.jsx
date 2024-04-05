import React, { useState, useEffect } from "react";
import { db } from "../../../../config/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Registration() {
  const [data, setData] = useState([]);

  const dataCollectionRef = collection(db, "registration");

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
  return (
    <div className="min-h-[100vh] pt-[5rem] flex flex-col">
      <h1 className="text-center text-[1.4rem] font-bold mb-[1rem]">
        Registered <span className="text-textGold">Data</span>
      </h1>
      <div className="overflow-scroll lg:overflow-hidden px-[1rem]">
        <table className="lg:mx-auto">
          <thead>
            <tr className="uppercase bg-gray-400">
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
                className="text-[1.1rem] uppercase text-center font-medium">
                <td>{item.department}</td>
                <td>{item.fname}</td>
                <td>{item.sname}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.dob}</td>
                <td className="min-w-[10rem]">{item.address}</td>
                <td>{item.city}</td>
                <td>{item.state}</td>
                <td>{item.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
