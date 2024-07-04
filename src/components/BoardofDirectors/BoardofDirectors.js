import React from "react";

const directors = [
  {
    name: "Sri K. Vijayanand, IAS",
    position:
      "Special Chief Secretary to Government, Energy Department & Chairman (APSPCL)",
    image: "uploads/directors_images/director_57469223.jpg",
  },
  {
    name: "Dr. M. Kamalakara Babu, M.Sc., B.L., Ph.D.",
    position: "Managing Director & Chief Executive Officer",
    image: "uploads/directors_images/director_44547032.png",
  },
  {
    name: "Sri S.K. Gupta",
    position: "Director (APSPCL) & GM Finance (SECI)",
    image: "uploads/directors_images/director_52085799.jpg",
  },
  {
    name: "Sri A.K. Sinha",
    position: "Director (APSPCL) & AGM (SECI)",
    image: "uploads/directors_images/director_79764934.jpg",
  },
  {
    name: "Sri K V N Chakradhara Babu IAS",
    position: "Director (APSPCL) and Managing Director (APGENCO)",
    image: "uploads/directors_images/director_70588699.jpg",
  },
  {
    name: "Sri M. Nanda Kishore, IIS",
    position: "Director (APSPCL) and VC & MD (NREDCAP)",
    image: "uploads/directors_images/director_63000611.jpg",
  },
];

const BoardofDirectors = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Board of Directors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
        {directors.map((director, index) => (
          <div
            key={index}
            className="bg-white  overflow-hidden "
          >
            <img
              src={director.image}
              alt={`Director ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="py-2 flex gap-2 flex-col">
              <p className="text-lg font-semibold">{director.name}</p>
              <p className="text-gray-600">{director.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardofDirectors;
