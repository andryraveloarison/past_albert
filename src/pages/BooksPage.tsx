import { motion } from "framer-motion";
import { LIVRES } from "../data/livre";
import { cardAnim } from "../animations/animation";
import { Card } from "../helpers/Card";

export function BooksPage() {
  return (
    <div className="px-4 py-24 max-w-6xl w-full mx-auto">
      <h2 className="mb-4 text-xl font-semibold text-blue-900">Livres</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {LIVRES.map((b) => (
          <motion.div key={b.id} {...cardAnim}>
            <Card>
              <img src={b.couverture} alt={b.titre} className="h-44 w-full rounded-xl object-cover ring-1 ring-slate-200" />
              <h3 className="mt-3 text-base font-semibold text-slate-900">{b.titre}</h3>
              <p className="mt-2 text-sm text-slate-700">{b.description}</p>
              {b.lien && (
                <a href={b.lien} className="mt-4 inline-flex items-center rounded-xl bg-amber-400 px-3 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-amber-300">
                  Voir / Télécharger
                </a>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}