export default async function TestAPI() {
  const res = await fetch("https://v3.football.api-sports.io/leagues", {
  headers: {
    "x-apisports-key": process.env.NEXT_PUBLIC_FOOTBALL_API_KEY!,
  },
  cache: "no-store",
});

const data = await res.json();

  console.log(JSON.stringify(data, null, 2)); // ← این باعث می‌شود همه اطلاعات کامل نمایش داده شود

  return (
    <div className="p-6">
      <h1>API Test Result</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );


}
