import { motion } from "framer-motion";
import { cardAnim } from "../animations/animation";
import { RESUMES_DIMANCHE } from "../data/resume_dimanche";
import { Card } from "../helpers/Card";
import { formatDate } from "../utils/formatDate";

export function ResumesPage() {
  return (
    <div className="px-4 py-24 max-w-6xl w-full mx-auto">
      <h2 className="mb-4 text-xl font-semibold text-blue-900">Résumés du dimanche</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {RESUMES_DIMANCHE.map((r) => (
          <motion.div key={r.date} {...cardAnim}>
            <Card>
              <p className="text-xs text-amber-700">{formatDate(r.date)}</p>
              <h3 className="mt-1 text-base font-semibold text-slate-900">{r.titre}</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                {r.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}