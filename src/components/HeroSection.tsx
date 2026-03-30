import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Photo plein écran */}
      <Image
        src="/images/terrasse.jpg"
        alt="Les Quatre Vents — Terrasse et façade sur les quais de Brest"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Contenu */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        {/* Badge depuis 1984 */}
        <div
          className="inline-block bg-brand-accent text-brand-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded mb-6"
          style={{ fontFamily: "var(--font-source-sans)" }}
        >
          Depuis 1984 · Ar 4 Avel
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Les Quatre Vents
        </h1>

        <p
          className="text-xl sm:text-2xl text-white/90 mb-3 italic"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Institution brestoise sur les quais
        </p>

        <p
          className="text-base sm:text-lg text-white/75 mb-10 max-w-xl mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-source-sans)" }}
        >
          Brasserie, bar & terrasse — Petit déjeuner, déjeuner, goûter, apéro.
          Le poulet frites, chaque dimanche.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#formules"
            className="bg-brand-primary text-white font-bold px-8 py-4 rounded text-base hover:bg-brand-primary-dark transition-all hover:scale-105"
            style={{ fontFamily: "var(--font-source-sans)" }}
          >
            Voir nos formules
          </a>
          <a
            href="#infos"
            className="border-2 border-white text-white font-bold px-8 py-4 rounded text-base hover:bg-white hover:text-brand-primary transition-all"
            style={{ fontFamily: "var(--font-source-sans)" }}
          >
            Nous trouver
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
