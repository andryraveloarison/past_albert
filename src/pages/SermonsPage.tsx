import { motion } from "framer-motion";
import { SERMONS } from "../data/sermons";
import { Card } from "../helpers/Card";
import { cardAnim } from "../animations/animation";
import { Aspect16x9 } from "../helpers/Aspect16x9";
import { formatDate } from "../utils/formatDate";

export function SermonsPage() {
  return (
    <div className="px-4 py-24 max-w-6xl w-full mx-auto px-4 py-8">
      <h2 className="mb-4 text-xl font-semibold text-blue-900">Prédications</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERMONS.map((s) => (
          <motion.div key={s.id} {...cardAnim}>
            <Card>
              <h3 className="text-base font-semibold text-slate-900">{s.titre}</h3>
              <small className="text-xs text-slate-500">{formatDate(s.date)} • {s.passage}</small>
              <p className="mt-3 text-sm text-slate-700">{s.resume}</p>
              {s.videoUrl ? (
                <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-slate-200">
                  <Aspect16x9>
                    <iframe
                      src={s.videoUrl}
                      title={s.titre}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </Aspect16x9>
                </div>
              ) : s.audioUrl ? (
                <audio controls className="mt-4 w-full">
                  <source src={s.audioUrl} />
                </audio>
              ) : null}
              {s.tags?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-700 ring-1 ring-inset ring-amber-300/60">
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}