import LeagueCard from "@/components/LeagueCard";

const leagues = [
  { id: 1, name: "Premier League", country: "England" },
  { id: 2, name: "La Liga", country: "Spain" },
];

export default function LeaguesPage() {
  return (
    <main className="p-6">
      <h1 className="text-xl font-semibold mb-4">Leagues</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {leagues.map((league) => (
          <LeagueCard
            key={league.id}
            name={league.name}
            country={league.country}
          />
        ))}
      </div>
    </main>
  );
}
