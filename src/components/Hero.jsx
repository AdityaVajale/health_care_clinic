export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#dcefe7] blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">

        <div className="relative z-10">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#cfe1d9] bg-white/70 px-4 py-2 text-xs font-semibold text-[#39736b]">
            <span className="h-2 w-2 rounded-full bg-[#4b9c87]" />
            Trusted Family Healthcare
          </div>

          <h2 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#163c3a] md:text-6xl lg:text-7xl">
            Compassionate care,
            <span className="block text-[#438278]">
              closer to home.
            </span>
          </h2>

          <p className="mt-7 max-w-xl text-base leading-8 text-[#61736e] md:text-lg">
            Quality medical care focused on your health, comfort and recovery.
            Our clinic provides trusted consultation and personalized treatment
            for individuals and families.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#appointment"
              className="rounded-full bg-[#14544f] px-7 py-4 text-center text-sm font-bold text-white shadow-xl shadow-[#14544f]/20 transition hover:-translate-y-1"
            >
              Request an Appointment
            </a>

            <a
              href="tel:+919890918684"
              className="rounded-full border border-[#cbdcd5] bg-white px-7 py-4 text-center text-sm font-bold text-[#14544f] transition hover:bg-[#edf5f1]"
            >
              Call +91 98909 18684
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-[#647772]">
            <div className="flex items-center gap-2">
              <span className="text-[#b08b48]">✦</span>
              Family Physician
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[#b08b48]">✦</span>
              Patient-focused care
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[#b08b48]">✦</span>
              Phone guidance
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-[#d8eee5]" />

          <div className="relative overflow-hidden rounded-[2.5rem] border-8 border-white bg-[#dfece6] shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=85"
              alt="Doctor providing professional healthcare"
              className="h-[500px] w-full object-cover"
            />

            <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/50 bg-white/90 p-5 shadow-xl backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#78908a]">
                    Patient Rating
                  </p>

                  <p className="mt-1 text-xl font-bold text-[#163c3a]">
                    5.0 / 5.0
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-[#b08b48]">★★★★★</p>
                  <p className="mt-1 text-xs text-[#71837e]">
                    62+ Google Reviews
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}