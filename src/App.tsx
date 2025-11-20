// src/App.tsx
import { Routes, Route, Navigate } from "react-router-dom";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

import About from "@/pages/About";
import Valor from "@/pages/Valor";
import Mufasa from "@/pages/Mufasa";
import Achievements from "@/pages/Achievements";
import Outreach from "@/pages/Outreach";
import Sponsors from "@/pages/Sponsors";
import Contact from "@/pages/Contact";
import Resources from "@/pages/Resources";  // <-- NEW
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <main className="min-h-[60vh]">
        <Routes>
          {/* Landing redirects to About */}
          <Route path="/" element={<Navigate to="/about" replace />} />

          <Route path="/about" element={<About />} />
          <Route path="/robots" element={<Navigate to="/robots/valor" replace />} />
          <Route path="/robots/valor" element={<Valor />} />
          <Route path="/robots/mufasa" element={<Mufasa />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/outreach" element={<Outreach />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />

          {/* NEW: Resources page */}
          <Route path="/resources" element={<Resources />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
