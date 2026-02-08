"use client";

import { useEffect, useState } from "react";

interface League {
  league: {
    id: number;
    name: string;
    type: string;
    logo: string;
  };
  country: {
    name: string;
    flag: string;
  };
  seasons: {
    year: number;
    start: string;
    end: string;
  }[];
}

export default function HeroSection() {
  const [leagues, setLeagues] = useState<League[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeagues = async () => {
      try {
       const res = await fetch("/api/test-api");
        const data = await res.json();
        setLeagues(data.response);
      } catch (error) {
        console.error("Error fetching leagues:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeagues();
  }, []);

  return (
    <section className="p-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Welcome to Football Leagues
      </h1>

      {loading ? (
        <p className="text-center">Loading leagues...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {leagues.slice(0, 10).map((item) => (
            <div
              key={item.league.id}
              className="bg-white text-black rounded-lg shadow p-3 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <img
                src={item.league.logo || item.country.flag}
                alt={item.league.name}
                className="w-12 h-12 object-contain mb-2"
              />
              <h2 className="font-semibold text-sm">{item.league.name}</h2>
              <p className="text-xs text-gray-500">{item.country.name}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
