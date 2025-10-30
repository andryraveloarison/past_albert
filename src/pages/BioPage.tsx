import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cardAnim } from "../animations/animation";
import { Card } from "../helpers/Card";
import { BIO } from "../data/bio";

export function BioPage() {
  const ref = useRef(null);

  // Animation de scroll pour la ligne centrale
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Ligne bleue qui s’étend progressivement
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className="relative w-full min-h-screen from-slate-50 to-slate-100 py-32"
    >
      {/* SECTION BIO */}
      <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-2 items-start">
        {/* Texte principal */}
        <motion.div {...cardAnim}>
          <Card className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-md">
            <h2 className="text-3xl font-bold text-slate-900">{BIO.nom}</h2>
            <p className="mt-2 text-lg text-blue-800">{BIO.titre}</p>
            <p className="mt-6 text-slate-700 leading-relaxed">{BIO.vision}</p>

            <div className="mt-8 space-y-5">
              <div>
                <h3 className="text-sm font-semibold text-rose-600 uppercase">
                  Famille
                </h3>
                <p className="mt-1 text-slate-700">{BIO.famille}</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Photo */}
        <motion.div {...cardAnim}>
          <Card className="overflow-hidden shadow-lg ring-1 ring-slate-200">
            <img
              src={BIO.photo}
              alt={BIO.nom}
              className="h-96 w-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
            />
          </Card>
        </motion.div>
      </div>

      {/* TIMELINE */}
      <div className="relative mt-32 max-w-4xl mx-auto">
        {/* Ligne centrale */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-200 rounded-full overflow-hidden">
          <motion.div
            style={{ height: lineHeight }}
            className="w-full bg-gradient-to-b from-blue-500 to-blue-800 rounded-full origin-top"
          />
        </div>

        {/* Points et cartes */}
        <div className="space-y-24 mt-10 relative">
          {BIO.historiqueEglises.map((h, i) => {
            // Déterminer le sens de l’animation selon la position
            const isLeft = i % 2 === 0;
            const xInitial = isLeft ? 100 : -100;

            return (
              <>

              {/* Point bleu */}
                <span className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-700 rounded-full ring-4 ring-blue-200" />
              

              <motion.div
                key={i}
                initial={{ opacity: 0, x: xInitial, y: 0 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2, type: "spring" }}
                viewport={{ once: true, amount: 0.3 }}
                className={`relative flex items-center ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                {/* Carte historique */}
                <div
                  className={`w-5/12 p-6 rounded-2xl shadow-md bg-white/90 backdrop-blur-md border border-slate-200 ${
                    isLeft ? "ml-auto text-right" : "mr-auto text-left"
                  }`}
                >
                  <h4 className="text-blue-900 font-semibold text-lg">
                    {h.eglise}
                  </h4>
                  <p className="text-sm text-slate-600">{h.role}</p>
                  <p className="mt-2 text-sm text-amber-600 font-semibold">
                    {h.annee}
                  </p>
                </div>

              </motion.div>

                </>
              
            );
          })}
          
        </div>
      </div>
    </div>
  );
}
