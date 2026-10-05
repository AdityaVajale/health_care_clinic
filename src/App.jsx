import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStats from "./components/TrustStats";
import Services from "./components/Services";
import About from "./components/About";
import Doctor from "./components/Doctor";
import Testimonials from "./components/Testimonials";
import Appointment from "./components/Appointment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStats />
        <Services />
        <About />
        <Doctor />
        <Testimonials />
        <Appointment />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const isGalleryPage = window.location.pathname === "/gallery";

  if (isGalleryPage) {
    return (
      <>
        <Navbar />
        <Gallery />
        <Footer />
      </>
    );
  }

  return <HomePage />;
}