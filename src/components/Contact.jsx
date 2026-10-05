export default function Contact() {
  return (
    <section id="contact" className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#438278]">
            Visit Us
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#163c3a] md:text-5xl">
            Find our clinic.
          </h2>
        </div>

        <div className="grid overflow-hidden rounded-[2.5rem] border border-[#dce8e2] bg-white shadow-xl lg:grid-cols-2">

          <div className="min-h-[400px] bg-[#dcebe5]">
            <iframe
              title="Health Care Clinic location"
              src="https://www.google.com/maps?q=Thergaon,Pune,Maharashtra&output=embed"
              className="h-full min-h-[400px] w-full border-0"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col justify-center p-8 md:p-12">

            <h3 className="text-2xl font-bold text-[#163c3a]">
              Health Care Clinic & Hospital
            </h3>

            <div className="mt-8 space-y-6">

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#8a9a95]">
                  Address
                </p>

                <p className="mt-2 leading-7 text-[#63756f]">
                  Shop no. 2, Link Road, near Sancheti School, Krantiveer Nagar, Laxman Nagar, Thergaon, Pune, Pimpri-Chinchwad, Maharashtra 411033
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#8a9a95]">
                  Phone
                </p>

                <a
                  href="tel:+919890918684"
                  className="mt-2 block font-bold text-[#14544f]"
                >
                  +91 98909 18684
                </a>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#8a9a95]">
                  Hours
                </p>

                <p className="mt-2 text-[#63756f]">
                  Open daily · Closes at 10:00 PM
                </p>
              </div>

            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Health+Care+Clinic+Hospital+Thergaon+Pune"
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-block rounded-full bg-[#14544f] px-7 py-4 text-center text-sm font-bold text-white"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}