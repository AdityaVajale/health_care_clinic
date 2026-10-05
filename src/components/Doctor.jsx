export default function Doctor() {
  return (
    <section id="doctor" className="bg-[#14544f] px-5 py-20 text-white lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">

        <div className="overflow-hidden rounded-[2.5rem] border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=85"
            alt="Doctor"
            className="h-[520px] w-full object-cover"
          />
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b8d9cc]">
            Meet Your Doctor
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Dr. Imtiyaz
          </h2>

          <p className="mt-3 text-lg text-[#c4ded6]">
            Family Physician
          </p>

          <div className="mt-8 h-px w-20 bg-[#b08b48]" />

          <p className="mt-8 max-w-2xl text-base leading-8 text-[#c4ded6]">
            Known for a calm, approachable and patient-focused style of care,
            with an emphasis on understanding each patient's concerns before
            recommending treatment.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xl">♡</p>
              <p className="mt-3 text-sm font-semibold">
                Patient First
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xl">✚</p>
              <p className="mt-3 text-sm font-semibold">
                Medical Care
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xl">☎</p>
              <p className="mt-3 text-sm font-semibold">
                Phone Guidance
              </p>
            </div>
          </div>

          <a
            href="#appointment"
            className="mt-9 inline-block rounded-full bg-white px-7 py-4 text-sm font-bold text-[#14544f] transition hover:bg-[#edf5f1]"
          >
            Schedule a Consultation
          </a>
        </div>

      </div>
    </section>
  );
}