import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import ScrollToTop from "@/components/layout/ScrollToTop";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";

const AboutPage = lazy(() => import("@/pages/AboutPage"));
const ValorPage = lazy(() => import("@/pages/robots/ValorPage"));
const MufasaPage = lazy(() => import("@/pages/robots/MufasaPage"));
const SurgePage = lazy(() => import("@/pages/robots/SurgePage"));
const AchievementsPage = lazy(() => import("@/pages/AchievementsPage"));
const OutreachPage = lazy(() => import("@/pages/OutreachPage"));
const SponsorsPage = lazy(() => import("@/pages/SponsorsPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const ResourcesPage = lazy(() => import("@/pages/ResourcesPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

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
      <SiteHeader />
      <main className="min-h-[60vh]">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Render the landing page directly to avoid an extra client-side navigation. */}
            <Route path="/" element={<AboutPage />} />

            <Route path="/about" element={<AboutPage />} />
            <Route path="/robots" element={<Navigate to="/robots/valor" replace />} />
            <Route path="/robots/valor" element={<ValorPage />} />
            <Route path="/robots/mufasa" element={<MufasaPage />} />
            <Route path="/robots/surge" element={<SurgePage />} />
            <Route path="/surge" element={<Navigate to="/robots/surge" replace />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/outreach" element={<OutreachPage />} />
            <Route path="/sponsors" element={<SponsorsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <SiteFooter />
    </>
  );
}
