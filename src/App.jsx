import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import CaseStudySMS from "./pages/CaseStudySMS";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/sms-sending-system" element={<CaseStudySMS />} />

          <Route
            path="*"
            element={
              <section className="min-h-[70vh] flex items-center justify-center bg-[#f7f8fa] px-6">
                <div className="text-center">
                  <h1 className="text-5xl font-black text-[#071a33]">
                    Page Not Found
                  </h1>
                  <p className="text-gray-600 mt-4">
                    The page you are looking for does not exist.
                  </p>
                </div>
              </section>
            }
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}