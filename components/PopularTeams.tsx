"use client";

import { useEffect, useState } from "react";

interface League {
  league: { id: number; name: string; type: string; logo: string };
  country: { name: string; flag: string };
  seasons: { year: number; start: string; end: string }[];
}

export default function PopularSection() {
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
    <section className="p-8 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Popular Leagues</h2>

      {loading ? (
        <p className="text-center">Loading popular leagues...</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {leagues.slice(0, 4).map((item) => (
            <div
              key={item.league.id}
              className="bg-gray-100 rounded-lg shadow p-4 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <img
                src={item.league.logo || item.country.flag}
                alt={item.league.name}
                className="w-20 h-20 object-contain mb-2"
              />
              <h3 className="font-semibold">{item.league.name}</h3>
              <p className="text-sm text-gray-500">{item.country.name}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
