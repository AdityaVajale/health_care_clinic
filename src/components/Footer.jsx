export default function Footer() {
  return (
    <footer className="bg-[#103f3b] px-5 pb-24 pt-14 text-white md:pb-10 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 md:grid-cols-3">

          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-xl font-bold text-[#14544f]">
                +
              </div>

              <div>
                <p className="font-bold">HealthCare</p>
                <p className="text-[10px] uppercase tracking-widest text-[#9fc1b7]">
                  Clinic & Hospital
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#b7d0c9]">
              Compassionate, accessible healthcare for individuals and
              families in the Thergaon community.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold">Quick Links</p>

            <div className="mt-5 flex flex-col gap-3 text-sm text-[#b7d0c9]">
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#doctor">Doctor</a>
              <a href="#reviews">Reviews</a>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold">Contact</p>

            <div className="mt-5 space-y-3 text-sm text-[#b7d0c9]">
              <p>Thergaon, Pune – 411033</p>

              <a href="tel:+919890918684" className="block">
                +91 98909 18684
              </a>

              <p>Open daily · Until 10 PM</p>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-[#8eafa6]">
          © {new Date().getFullYear()} HealthCare Clinic & Hospital. All
          rights reserved.
        </div>

      </div>
    </footer>
  );
}