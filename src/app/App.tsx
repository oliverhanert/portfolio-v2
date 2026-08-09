import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { AnimatePresence } from "motion/react";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollToTop } from "@/components/ScrollToTop";
import { LanguageProvider } from "@/i18n/context";
import { HomePage } from "@/pages/HomePage";
import { ProjectPage } from "@/pages/ProjectPage";
import { FunboxPage } from "@/pages/FunboxPage";
import { ContactsPage } from "@/pages/ContactsPage";
import { CvPage } from "@/pages/CvPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

function AppInner() {
  const location = useLocation();
  const isCv = location.pathname === "/cv";

  return (
    <>
      <ScrollToTop />
      {!isCv && <CustomCursor />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/cv" element={<CvPage />} />
          <Route path="/funbox" element={<FunboxPage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AppInner />
      </LanguageProvider>
    </BrowserRouter>
  );
}
