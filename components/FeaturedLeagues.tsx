"use client";

import { useEffect, useState } from "react";

interface League {
  league: { id: number; name: string; type: string; logo: string };
  country: { name: string; flag: string };
  seasons: { year: number; start: string; end: string }[];
}

export default function FeaturesSection() {
  const [leagues, setLeagues] = useState<League[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeagues = async () => {
      try {
        const res = await fetch("/api/test-api"); // همان API
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
    <section className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center">Top Leagues</h2>

      {loading ? (
        <p className="text-center">Loading leagues...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {leagues.slice(0, 6).map((item) => (
            <div key={item.league.id} className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center hover:shadow-lg transition">
              <img
                src={item.league.logo || item.country.flag}
                alt={item.league.name}
                className="w-16 h-16 object-contain mb-2"
              />
              <h3 className="font-semibold">{item.league.name}</h3>
              <p className="text-xs text-gray-500">{item.country.name}</p>
              <p className="text-xs text-gray-400">
                Season: {item.seasons[item.seasons.length - 1].year}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
