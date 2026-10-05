export default function About() {
  return (
    <section id="about" className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

        <div className="relative">
          <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-[#dceee7]" />

          <div className="relative overflow-hidden rounded-[2.5rem]">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85"
              alt="Healthcare professional"
              className="h-[500px] w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 right-6 max-w-xs rounded-3xl bg-[#14544f] p-6 text-white shadow-2xl">
            <p className="text-3xl font-bold">62+</p>
            <p className="mt-1 text-sm text-[#cfe5dd]">
              patients have shared their experience through Google reviews.
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#438278]">
            About Our Clinic
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[#163c3a] md:text-5xl">
            Medical care with a human touch.
          </h2>

          <p className="mt-6 leading-8 text-[#63756f]">
            We believe good healthcare starts with listening. Our approach
            combines professional medical guidance with a comfortable,
            approachable environment where patients can discuss their concerns
            openly.
          </p>

          <p className="mt-5 leading-8 text-[#63756f]">
            From routine consultations to injury care and phone guidance, our
            focus remains simple — helping patients receive the right care at
            the right time.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#f0f6f3] p-5">
              <p className="font-bold text-[#14544f]">Personalized</p>
              <p className="mt-1 text-sm text-[#71817c]">
                Care for every patient
              </p>
            </div>

            <div className="rounded-2xl bg-[#f0f6f3] p-5">
              <p className="font-bold text-[#14544f]">Approachable</p>
              <p className="mt-1 text-sm text-[#71817c]">
                Comfortable consultations
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}