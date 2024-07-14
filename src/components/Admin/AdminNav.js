// pages/dashboard.js

import Link from 'next/link';

export default function AdminNav() {
  const cards = [
    { title: 'Reports', href: '/admin/report' },
    { title: 'Upload People Photos', href: '/page2' },
    { title: 'Solar Parks', href: '/admin/Solarparks' },
    { title: 'Tenders', href: '/admin/tenders' },
    { title: 'Contact Us', href: '/admin/Contact' },
    { title: 'Page 6', href: '/page6' },
    { title: 'Page 7', href: '/page7' },
    { title: 'Page 8', href: '/page8' },
  ];

  return (
    <div className="w-full bg-gray-100 p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8">Admin AdminNav</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <Link key={index} href={card.href}>
              <div className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
                <p className="text-gray-600">Go to {card.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
