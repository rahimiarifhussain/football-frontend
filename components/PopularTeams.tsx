"use client";

import Link from "next/link";

type Team = {
  id: number;
  name: string;
  league: string;
  image: string; // لوگوی تیم یا تصویر کارت
};

const teams: Team[] = [
  { id: 1, name: "Arsenal", league: "Premier League", image: "/images/Arsnal.avif" },
  { id: 2, name: "FCB", league: "La Liga", image: "/images/FCB.jpg" },
  { id: 3, name: "Bayern Munich", league: "Bundesliga", image: "/images/by.jpg" },
  { id: 4, name: "Juventus", league: "Serie A", image: "/images/unventus.jpg" },
];

export default function PopularTeams() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Popular Teams</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {teams.map((team) => (
          <Link
            key={team.id}
            href={`/teams/${team.id}`}
            className="group border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <div
              className="h-40 md:h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${team.image})` }}
            ></div>
            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg group-hover:text-blue-600">{team.name}</h3>
              <p className="text-sm text-gray-500">{team.league}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
