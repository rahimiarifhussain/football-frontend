"use client";

import { useEffect, useState } from "react";

interface Standing {
  rank: number;
  team: {
    id: number;
    name: string;
    logo: string;
  };
  all: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: {
      for: number;
      against: number;
    };
  };
  goalsDiff: number;
  points: number;
}

export default function StandingsPage({
  leagueId,
  season,
}: {
  leagueId: number;
  season: number;
}) {
  const [standings, setStandings] = useState<Standing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        const res = await fetch(
          `/api/standings?league=${leagueId}&season=${season}`
        );
        const data = await res.json();

        // API-Football structure
        setStandings(data.response[0].league.standings[0]);
      } catch (error) {
        console.error("Error loading standings", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStandings();
  }, [leagueId, season]);

  if (loading) {
    return <p className="text-center py-6">Loading standings...</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg">
        <thead className="bg-gray-100 text-sm">
          <tr>
            <th className="px-3 py-2">#</th>
            <th className="px-3 py-2 text-left">Team</th>
            <th className="px-3 py-2">P</th>
            <th className="px-3 py-2">W</th>
            <th className="px-3 py-2">D</th>
            <th className="px-3 py-2">L</th>
            <th className="px-3 py-2">GD</th>
            <th className="px-3 py-2 font-bold">Pts</th>
          </tr>
        </thead>

        <tbody>
          {standings.map((team) => (
            <tr
              key={team.team.id}
              className="border-t hover:bg-gray-50 text-sm"
            >
              <td className="px-3 py-2 text-center">{team.rank}</td>

              <td className="px-3 py-2 flex items-center gap-2">
                <img
                  src={team.team.logo}
                  alt={team.team.name}
                  className="w-5 h-5"
                />
                <span>{team.team.name}</span>
              </td>

              <td className="px-3 py-2 text-center">{team.all.played}</td>
              <td className="px-3 py-2 text-center">{team.all.win}</td>
              <td className="px-3 py-2 text-center">{team.all.draw}</td>
              <td className="px-3 py-2 text-center">{team.all.lose}</td>
              <td className="px-3 py-2 text-center">{team.goalsDiff}</td>
              <td className="px-3 py-2 text-center font-semibold">
                {team.points}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
