"use client"
import React from "react";

// Example JSON data array
const peopleData = [
  {
   
    name: "Shri Nara Chandra Babu Naidu",
    designation: "Hon'ble Chief Minister Government of Andhra Pradesh",
    imageUrl: "https://nredcap.in/assets/images/AP_CM.png",
  },
  {

    name: "Shri Konidela Pawan Kalyan",
    designation: "Hon'ble Deputy Chief Minister Government of Andhra Pradesh",
    imageUrl: "https://nredcap.in/assets/images/AP_CM.png",
  },

];

const People = () => {
  return (
    <div className="grid grid-cols-1 gap-4 ">
      {peopleData.map((person) => (
        <div key={person.id} className="max-w-sm rounded overflow-hidden shadow-lg px-4 py-3">
          <img
            className="w-full"
            src={person.imageUrl}
            alt="Person"
          />
          <div className="px-4 py-4">
            <div className="font-bold text-base text-center mb-2">
              {person.name}
            </div>
            <p className="text-gray-700 text-sm text-center">
              {person.designation}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default People;
