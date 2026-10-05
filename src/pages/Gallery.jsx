import { useState } from "react";
import { ArrowLeft, Maximize2, X } from "lucide-react";

import cabinPhoto from "../assets/images/cabin_photo.jpg";
import clinicPhoto from "../assets/images/Clinic_photo.jpeg";
import outsidePhoto from "../assets/images/outside_pic.jpeg";
import overviewPhoto from "../assets/images/overview_photo.jpg";;

const galleryImages = [
  {
    id: 1,
    category: "Clinic",
    title: "Clinic Exterior",
    image: outsidePhoto,
  },
  {
    id: 2,
    category: "Clinic",
    title: "Our Clinic",
    image: clinicPhoto,
  },
  {
    id: 3,
    category: "Facilities",
    title: "Comfortable Patient Area",
    image: cabinPhoto,
  },
  {
    id: 4,
    category: "Clinic",
    title: "Clinic Overview",
    image: overviewPhoto,
  },
];
  
  //   id: 5,
  //   category: "Facilities",
  //   title: "Healthcare Environment",
  //   image:
  //     "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=1400&q=85",
  // },
  // {
  //   id: 6,
  //   category: "Doctor",
  //   title: "Patient Consultation",
  //   image:
  //     "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1400&q=85",
  // },
  // {
  //   id: 7,
  //   category: "Clinic",
  //   title: "Clinic Interior",
  //   image:
  //     "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1400&q=85",
  // },
  // {
  //   id: 8,
  //   category: "Facilities",
  //   title: "Modern Medical Facility",
  //   image:
  //     "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1400&q=85",
  // },


const categories = ["All", "Clinic", "Doctor", "Facilities"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (image) => image.category === activeCategory
        );

  return (
    <main className="min-h-screen bg-[#f7f8f4]">

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#14544f] px-6 pb-24 pt-32 md:pb-32 md:pt-40">
        {/* Decorative circles */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#4f9188] opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#b08b48] opacity-10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <a
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#dceee9] transition-colors hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to Home
          </a>

          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d4b477]" />

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d4b477]">
                Our Gallery
              </span>
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
              A closer look at
              <span className="block text-[#b9ddd5]">
                our clinic.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#d4e7e3] md:text-lg">
              Explore our clinic environment, facilities, and healthcare
              spaces designed to provide patients with a comfortable and
              welcoming experience.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">

          {/* Filter */}
          <div className="mb-12 flex flex-wrap items-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#14544f] text-white shadow-lg"
                    : "border border-[#14544f]/10 bg-white text-[#49645f] hover:border-[#14544f]/30 hover:text-[#14544f]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry-style Grid */}
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {filteredImages.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative mb-5 block w-full overflow-hidden rounded-[28px] bg-white text-left shadow-[0_15px_45px_rgba(20,84,79,0.07)]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c302d]/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#d4b477]">
                        {item.category}
                      </p>

                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                    </div>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md">
                      <Maximize2 size={17} />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="mt-16 rounded-[28px] border border-[#14544f]/10 bg-[#e7f2ee] p-8 text-center md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b08b48]">
              Your comfort matters
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#183b38] md:text-3xl">
              A welcoming environment for your healthcare needs.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#60736f] md:text-base">
              Visit our clinic for a comfortable and approachable healthcare
              experience in Thergaon, Pune.
            </p>

            <a
              href="/#appointment"
              className="mt-7 inline-flex items-center justify-center rounded-full bg-[#14544f] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#0e403c] hover:shadow-lg"
            >
              Request an Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#092522]/90 p-5 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close image"
          >
            <X size={22} />
          </button>

          <div
            className="relative max-h-[90vh] max-w-6xl overflow-hidden rounded-[24px] bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[80vh] w-auto max-w-full object-contain"
            />

            <div className="bg-white px-6 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b08b48]">
                {selectedImage.category}
              </p>

              <h3 className="mt-1 text-lg font-semibold text-[#183b38]">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}