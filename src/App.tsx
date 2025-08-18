import { Routes, Route, Navigate } from "react-router-dom";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

import About from "@/pages/About";
import Robots from "@/pages/Robots";          // <-- new page
import Achievements from "@/pages/Achievements";
import Outreach from "@/pages/Outreach";
import Sponsors from "@/pages/Sponsors";
import Contact from "@/pages/Contact";
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
          <Route path="/robots" element={<Robots />} />     {/* <-- route added */}
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/outreach" element={<Outreach />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
