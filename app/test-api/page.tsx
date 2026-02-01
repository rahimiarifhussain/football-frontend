export default async function TestAPI() {
  const res = await fetch("https://api.football-data.org/v4/competitions", {
    headers: {
      "X-Auth-Token": process.env.FOOTBALL_API_KEY!,
    },
    cache: "no-store",
  });

  const data = await res.json();

  return (
    <div className="p-6">
      <h1>API Test</h1>
      <pre className="text-xs bg-gray-100 p-4 mt-4 overflow-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
