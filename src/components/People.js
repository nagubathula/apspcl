import React from "react";

// Example JSON data array
const peopleData = [
  {
    id: 1,
    name: "Shri Nara Chandra Babu Naidu",
    designation: "Hon'ble Chief Minister Government of Andhra Pradesh",
    imageUrl: "https://nredcap.in/assets/images/AP_CM.png",
  },
  // {
  //   id: 2,
  //   name: "Shri Konidela Pawan Kalyan",
  //   designation: "Hon'ble Deputy Chief Minister Government of Andhra Pradesh",
  //   imageUrl: "https://nredcap.in/assets/images/AP_CM.png",
  // },
  // {
  //   id: 3,
  //   name: "Shri Konidela Pawan Kalyan",
  //   designation: "Hon'ble Deputy Chief Minister Government of Andhra Pradesh",
  //   imageUrl: "https://nredcap.in/assets/images/AP_CM.png",
  // },
    // {
    //   id: 4,
    //   name: "Shri Konidela Pawan Kalyan",
    //   designation: "Hon'ble Deputy Chief Minister Government of Andhra Pradesh",
    //   imageUrl: "https://nredcap.in/assets/images/AP_CM.png",
    // },
  // Add more objects as needed
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
