// src/App.tsx
import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

// Lazy load pages
const About = lazy(() => import("@/pages/About"));
const Valor = lazy(() => import("@/pages/Valor"));
const Mufasa = lazy(() => import("@/pages/Mufasa"));
const Surge = lazy(() => import("@/pages/Surge"));
const Achievements = lazy(() => import("@/pages/Achievements"));
const Outreach = lazy(() => import("@/pages/Outreach"));
const Sponsors = lazy(() => import("@/pages/Sponsors"));
const Contact = lazy(() => import("@/pages/Contact"));
const Resources = lazy(() => import("@/pages/Resources"));
const NotFound = lazy(() => import("@/pages/NotFound"));

// Helper to show a loading state
function PageLoader() {
  return (
    <div className="flex h-[60vh] w-full items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-400 border-t-transparent" />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <main className="min-h-[60vh]">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Landing redirects to About */}
            <Route path="/" element={<Navigate to="/about" replace />} />

            <Route path="/about" element={<About />} />
            <Route path="/robots" element={<Navigate to="/robots/valor" replace />} />
            <Route path="/robots/valor" element={<Valor />} />
            <Route path="/robots/mufasa" element={<Mufasa />} />
            <Route path="/robots/surge" element={<Surge />} />
            <Route path="/surge" element={<Navigate to="/robots/surge" replace />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/outreach" element={<Outreach />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/contact" element={<Contact />} />

            {/* NEW: Resources page */}
            <Route path="/resources" element={<Resources />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
