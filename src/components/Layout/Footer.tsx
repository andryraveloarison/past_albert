import { BIO } from "@/data/bio";
import "@/styles/Layout/Footer.css";

export function Footer() {
  return (
    <footer className="footer">
        <div>© {new Date().getFullYear()} │ {BIO.nom}</div>
        <div className="footer-contact">
        <a href="mailto:alberavelo@gmail.com" className="footer-email">
          alberavelo@gmail.com
        </a>
        </div>
    </footer>
  );
}