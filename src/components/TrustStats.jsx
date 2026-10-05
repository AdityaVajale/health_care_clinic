const stats = [
  {
    value: "5.0★",
    label: "Google Rating",
  },
  {
    value: "62+",
    label: "Patient Reviews",
  },
  {
    value: "24/7",
    label: "Patient Guidance",
  },
  {
    value: "100%",
    label: "Patient Focused",
  },
];

export default function TrustStats() {
  return (
    <section className="border-y border-[#dce8e2] bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`px-6 py-8 text-center ${
              index !== 0 ? "border-l border-[#dce8e2]" : ""
            }`}
          >
            <p className="text-2xl font-bold tracking-tight text-[#14544f]">
              {stat.value}
            </p>

            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[#788983]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}