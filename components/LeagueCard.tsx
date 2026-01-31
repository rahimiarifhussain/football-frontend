type Props = {
  name: string;
  country: string;
};

export default function LeagueCard({ name, country }: Props) {
  return (
    <div className="border rounded p-4 hover:shadow transition">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-sm text-gray-500">{country}</p>
    </div>
  );
}
