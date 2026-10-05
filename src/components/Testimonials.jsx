const testimonials = [
  {
    name: "Amey Mali",
    time: "3 months ago",
    text: "I am extremely happy with the treatment and care provided by the doctor. He is always available for his patients and even when an in-person visit is not possible, he offers guidance over the phone.",
  },
  {
    name: "Abhijith Suresh",
    time: "1 month ago",
    text: "We were fortunate to meet Dr. Imtiyaz, who was extremely down-to-earth, patient, and approachable. The care and treatment provided made the experience comfortable.",
  },
  {
    name: "Yasmeen Shaikh",
    time: "5 months ago",
    text: "Very happy with the treatment and the care received from the doctor. He is always available for patients and also provides guidance over the phone when needed.",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#438278]">
              Patient Stories
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#163c3a] md:text-5xl">
              Trusted by our patients.
            </h2>
          </div>

          <div className="rounded-2xl bg-[#edf5f1] px-5 py-4">
            <p className="text-xl font-bold text-[#14544f]">★★★★★ 5.0</p>
            <p className="mt-1 text-xs text-[#71817c]">
              Based on 62 Google reviews
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((review) => (
            <article
              key={review.name}
              className="rounded-[2rem] border border-[#dce8e2] bg-white p-7 shadow-sm"
            >
              <p className="text-[#b08b48]">★★★★★</p>

              <p className="mt-6 text-sm leading-7 text-[#63756f]">
                "{review.text}"
              </p>

              <div className="mt-7 border-t border-[#e4ece8] pt-5">
                <p className="font-bold text-[#163c3a]">
                  {review.name}
                </p>

                <p className="mt-1 text-xs text-[#899791]">
                  Google Review · {review.time}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}