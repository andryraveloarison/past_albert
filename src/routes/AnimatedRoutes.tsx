import { AnimatePresence, motion } from "framer-motion";
import { pageVariants } from "../animations/animation";
import { Route, Routes, useLocation } from "react-router-dom";
import  HomePage  from "../pages/HomePage";
import { BioPage } from "../pages/BioPage";
import { SermonsPage } from "../pages/SermonsPage";
import { BooksPage } from "../pages/BooksPage";
import { ResumesPage } from "../pages/ResumesPage";
import { VerseWeekPage } from "../pages/VerseWeekPage";
import TestPage from "@/pages/TestPage";

export function AnimatedRoutes() {
  const location = useLocation();
  return (
        <Routes location={location}>
          <Route path="/" element={<TestPage />} />
          <Route path="/biographie" element={<BioPage />} />
          <Route path="/predications" element={<SermonsPage />} />
          <Route path="/livres" element={<BooksPage />} />
          <Route path="/resumes" element={<ResumesPage />} />
          <Route path="/verset-semaine" element={<VerseWeekPage />} />
        </Routes>
  );
}