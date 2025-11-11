import { BIO } from "@/data/bio";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/70 text-sm">
        <div>© {new Date().getFullYear()} │ {BIO.nom}</div>
        <div className="flex gap-4">
          <a href="#top" className="hover:text-white">alberavelo@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}