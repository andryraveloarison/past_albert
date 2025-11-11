import NavMenu from "@/components/Layout/NavMenu";
import { LIVRES } from "../data/livre";
import "@/styles/BooksPage/Book.css";

export function BooksPage() {
  return (
    <>
      <NavMenu color="dark" />
    
        <h3 className="book-title">Fampianarana</h3>

      <div className="book-card-container">
        {LIVRES.map((s) => (
          <div key={s.id} className="book-card">
            <img
              src={s.couverture}
              alt={s.titre}
              className="h-44 w-full rounded-xl object-cover ring-1 ring-slate-200"
            />
            <h3 className="text-base font-semibold text-slate-900">
              {s.titre}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
}