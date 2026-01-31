"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/images/football-field.jpg')" }}
    >
      {/* Overlay تیره برای خوانایی متن */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-white px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          ⚽ Football League Management System
        </h1>
        <p className="text-lg md:text-xl mb-8">
          مدیریت لیگ‌ها، تیم‌ها و بازیکنان به‌صورت حرفه‌ای
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/leagues"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            View Leagues
          </Link>
          <Link
            href="/teams"
            className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
          >
            Explore Teams
          </Link>
        </div>
      </div>
    </section>
  );
}
