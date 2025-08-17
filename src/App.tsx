import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Achievements from "./pages/Achievements";
import Outreach from "./pages/Outreach";
import Sponsors from "./pages/Sponsors";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <ScrollToTop />
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-4 pt-12 pb-8">
          <div className="card p-8 md:p-12">
            <h1 className="font-display text-4xl md:text-6xl">
              Iron Lions <span className="text-amber-400">FTC 24089</span>
            </h1>
            <p className="mt-4 text-lg text-zinc-300 max-w-2xl">
              Subtle, premium, and fast. An animated site for a serious robotics team.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/about" className="rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-amber-300 hover:bg-amber-500/20">About the team</Link>
              <Link to="/achievements" className="rounded-xl border border-white/10 px-4 py-2 hover:bg-white/5">Achievements</Link>
            </div>
          </div>
        </div>
      </motion.section>
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/outreach" element={<Outreach />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
