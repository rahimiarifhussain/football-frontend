"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          ⚽ Football League
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/leagues">Leagues</Link>
          <Link href="/teams">Teams</Link>
          <Link href="/players">Players</Link>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t px-6 py-4 space-y-3">
          <Link href="/leagues" onClick={() => setMenuOpen(false)}>
            Leagues
          </Link>
          <Link href="/teams" onClick={() => setMenuOpen(false)}>
            Teams
          </Link>
          <Link href="/players" onClick={() => setMenuOpen(false)}>
            Players
          </Link>
        </nav>
      )}
    </header>
  );
}
