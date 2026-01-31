import FeaturedLeagues from "@/components/FeaturedLeagues";
import HeroSection from "@/components/HeroSection";
import PopularTeams from "@/components/PopularTeams";

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* بعداً Featured Leagues, Stats, CTA اضافه می‌شود */}
      <FeaturedLeagues />
      <PopularTeams />
    </main>
  );
}
