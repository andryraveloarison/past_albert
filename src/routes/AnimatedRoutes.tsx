
import { Route, Routes, useLocation } from "react-router-dom";
import  HomePage  from "../pages/HomePage";
import { BioPage } from "../pages/BioPage";
import { SermonsPage } from "../pages/SermonsPage";
import { BooksPage } from "../pages/BooksPage";

export function AnimatedRoutes() {
  const location = useLocation();
  return (
        <Routes location={location}>
          <Route path="/" element={<HomePage/>} />
          <Route path="/bio" element={<BioPage />} />
          <Route path="/toriteny" element={<SermonsPage />} />
          <Route path="/fampianarana" element={<BooksPage />} />
        </Routes>
  );
}