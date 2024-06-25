import React from 'react';

const directors = [
  {
    name: 'Sri K. Vijayanand, IAS',
    position: 'Special Chief Secretary to Government, Energy Department & Chairman (APSPCL)',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Dr. M. Kamalakara Babu, M.Sc., B.L., Ph.D.',
    position: 'Managing Director & Chief Executive Officer',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Sri S.K. Gupta',
    position: 'Director (APSPCL) & GM Finance (SECI)',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Sri A.K. Sinha',
    position: 'Director (APSPCL) & AGM (SECI)',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Sri K V N Chakradhara Babu IAS',
    position: 'Director (APSPCL) and Managing Director (APGENCO)',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Sri M. Nanda Kishore, IIS',
    position: 'Director (APSPCL) and VC & MD (NREDCAP)',
    image: 'https://via.placeholder.com/150',
  },
];

const BoardofDirectors = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Board of Directors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-center gap-8">
        {directors.map((director, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-lg p-4"
          >
            <img
              src={director.image}
              alt={`Director ${index + 1}`}
              className="w-full h-auto"
            />
            <div className="p-4 flex gap-2 flex-col">
              <p className="text-2xl font-semibold">{director.name}</p>
              <p className="text-gray-600">{director.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardofDirectors;
