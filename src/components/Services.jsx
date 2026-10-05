import {
  Stethoscope,
  Users,
  HeartPulse,
  Thermometer,
  ShieldCheck,
  ClipboardCheck,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "General Physician",
    description:
      "Consultation and treatment for common illnesses, infections, and everyday health concerns.",
    icon: Stethoscope,
  },
  {
    title: "Family Healthcare",
    description:
      "Accessible healthcare for individuals and families with a focus on practical and personalized care.",
    icon: Users,
  },
  {
    title: "General Health Check-ups",
    description:
      "Routine consultations and health assessments to help you stay informed about your overall health.",
    icon: HeartPulse,
  },
  {
    title: "Fever & Common Illnesses",
    description:
      "Medical consultation and treatment guidance for fever, cold, cough, infections, and common ailments.",
    icon: Thermometer,
  },
  {
    title: "Preventive Healthcare",
    description:
      "Professional guidance focused on maintaining good health and addressing concerns at an early stage.",
    icon: ShieldCheck,
  },
  {
    title: "Medical Guidance",
    description:
      "Clear medical advice and follow-up support to help patients understand and manage their health concerns.",
    icon: ClipboardCheck,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#f7f8f4] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#b08b48]" />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#14544f]">
              Our Services
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#183b38] md:text-5xl lg:text-6xl">
            Healthcare focused on
            <span className="block text-[#14544f]">
              you and your family.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#60736f] md:text-lg">
            From everyday health concerns to routine consultations, our clinic
            provides accessible and compassionate medical care for individuals
            and families.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-[28px] border border-[#14544f]/10 bg-white p-7 shadow-[0_15px_45px_rgba(20,84,79,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(20,84,79,0.12)] md:p-8"
              >
                {/* Background decoration */}
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#dceee9] opacity-50 transition-transform duration-700 group-hover:scale-150" />

                {/* Number */}
                <div className="relative mb-8 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e3f1ed] text-[#14544f] transition-all duration-500 group-hover:bg-[#14544f] group-hover:text-white">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-medium tracking-widest text-[#b08b48]">
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-semibold tracking-tight text-[#183b38] md:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#667a76] md:text-[15px]">
                    {service.description}
                  </p>
                </div>

                {/* Bottom link */}
                <div className="relative mt-7 flex items-center gap-2 text-sm font-semibold text-[#14544f]">
                  <span className="transition-all duration-300 group-hover:mr-1">
                    Learn more
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#b08b48] transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Message */}
        <div className="mt-12 rounded-[28px] border border-[#14544f]/10 bg-[#e7f2ee] px-6 py-7 md:px-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#b08b48]">
                Patient-first care
              </p>

              <p className="mt-2 max-w-2xl text-base leading-7 text-[#315b56]">
                Have a health concern? Speak with our clinic for guidance
                regarding your symptoms and healthcare needs.
              </p>
            </div>

            <a
              href="#appointment"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#14544f] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0e403c] hover:shadow-lg"
            >
              Request an Appointment
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}