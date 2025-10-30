import { motion } from "framer-motion";
import { VERSETS_HEBDO } from "../data/verset";
import { cardAnim } from "../animations/animation";
import { Card } from "../helpers/Card";

export function VerseWeekPage() {
  return (
    <div className="px-4 py-24 max-w-6xl w-full mx-auto">
      <h2 className="mb-4 text-xl font-semibold text-blue-900">Verset de la semaine</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {VERSETS_HEBDO.map((v) => (
          <motion.div key={v.semaine} {...cardAnim}>
            <Card>
              <p className="text-xs text-slate-500">{v.semaine}</p>
              <h3 className="mt-1 text-base font-semibold text-amber-700">{v.reference}</h3>
              <p className="mt-2 text-lg leading-relaxed text-slate-900">“{v.texte}”</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}