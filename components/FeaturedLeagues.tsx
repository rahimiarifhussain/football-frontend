"use client";

import Link from "next/link";

type League = {
  id: number;
  name: string;
  country: string;
  image: string; // تصویر لیگ
};

const leagues: League[] = [
  {
    id: 1,
    name: "Premier League",
    country: "England",
    image: "/images/premier-league.jpg",
  },
  {
    id: 2,
    name: "La Liga",
    country: "Spain",
    image: "/images/la-liga.jpg",
  },
  {
    id: 3,
    name: "Bundesliga",
    country: "Germany",
    image: "/images/bundesliga.png",
  },
  {
    id: 4,
    name: "Serie A",
    country: "Italy",
    image: "/images/serie-a.avif",
  },
];

export default function FeaturedLeagues() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Leagues</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {leagues.map((league) => (
          <Link
            key={league.id}
            href={`/leagues/${league.id}`}
            className="group border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <div className="h-40 md:h-48 bg-cover bg-center" style={{ backgroundImage: `url(${league.image})` }}></div>
            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg group-hover:text-blue-600">{league.name}</h3>
              <p className="text-sm text-gray-500">{league.country}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
