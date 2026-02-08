// route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.API_FOOTBALL_KEY; // کلید را در .env.local ذخیره کن
  const res = await fetch("https://v3.football.api-sports.io/leagues", {
    headers: {
      "x-apisports-key": apiKey
    }
  });

  const data = await res.json();
  return NextResponse.json(data);
}
