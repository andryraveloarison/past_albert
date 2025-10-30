
function Hero() {
  return (

    <>
    <header
      id="top"
      className="relative h-screen w-full overflow-hidden
                 bg-[url('/bg2.png')] bg-cover bg-center bg-no-repeat"
    >
      {/* Overlay pour fondu vers le bas */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0b1020]" />


      {/* Contenu principal */}
      <div className="relative py-10 z-10 max-w-6xl mx-auto px-1 pt-2 grid gap-8 sm:gap-15 md:grid-cols-2 items-end h-full">
        <div className="glass p-6 sm:p-8 shadow-glow self-end">
          <h1 className="font-display text-3xl sm:text-5xl leading-tight text-white/80">
            Pastora Albert 
          </h1>
            <h1 className="font-display text-4xl sm:text-6xl leading-tight text-white/80">
             RAVELOARISON
          </h1>
          
        </div>

        <div className="md:pb-8 glass pr-6 sm:p-8 shadow-glow self-end"> 
            <p className="mt-4 text-white/80">
                « J’ai enfin compris pourquoi je répétais toujours les mêmes schémas. »
                Guidance immédiate, soulagement rapide, clarté émotionnelle.
            </p>
 
            <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#how"
                className="px-5 py-3 text-white/80 rounded-full border border-white/30 hover:bg-white/10 transition"
                >
                Comment ça marche ?
                </a>
            </div>
        </div>
      </div>


      {/* Chevron scroll-down */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white/70">
        <a href="#pas" aria-label="Scroll down">
          ▼
        </a>
      </div>
    </header>

    <body>
      <div>
        <h1> INTRODUCTION </h1>
      </div>
    </body>
        </>

  );
}


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
    </main>
  );
}