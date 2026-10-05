import { BrowserRouter, Routes, Route } from "react-router-dom";
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

// HomePage component wrapping your homepage sections
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

// Gallery layout page with Navbar and Footer
function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <Gallery />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
  );
}