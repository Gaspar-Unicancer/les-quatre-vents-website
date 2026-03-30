import Image from "next/image";

export default function EspritSection() {
  return (
    <section id="esprit" className="bg-brand-surface py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        {/* Titre section */}
        <div className="text-center mb-14">
          <span
            className="text-brand-primary text-sm font-bold uppercase tracking-widest"
            style={{ fontFamily: "var(--font-source-sans)" }}
          >
            Notre histoire
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-brand-text mt-2"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            L&apos;Esprit du lieu
          </h2>
        </div>

        {/* Contenu 2 colonnes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div>
            <p
              className="text-lg text-brand-text leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-source-sans)" }}
            >
              Depuis <strong>1984</strong>, Les Quatre Vents — <em>Ar 4 Avel</em> en breton —
              est une institution sur les quais de Brest. Ici, on ne joue pas aux touristes :
              on est brestois, on est breton, et on en est fiers.
            </p>
            <p
              className="text-lg text-brand-text leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-source-sans)" }}
            >
              Bar, brasserie et restaurant tout à la fois, on accueille aussi bien
              les habitués du dimanche que les visiteurs de passage qui cherchent une
              adresse vraie, généreuse et sans chichis.
            </p>

            {/* Valeurs */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "⚓", label: "Authentique", desc: "40 ans d'histoire brestoise" },
                { icon: "🦞", label: "Produits bretons", desc: "Huîtres, poissons, saisons" },
                { icon: "☀️", label: "Terrasse", desc: "Sur les quais, face au port" },
                { icon: "🍺", label: "Bar vivant", desc: "Bières pression sélectionnées" },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <div
                    className="font-bold text-brand-primary text-sm"
                    style={{ fontFamily: "var(--font-source-sans)" }}
                  >
                    {item.label}
                  </div>
                  <div className="text-brand-text/70 text-xs mt-0.5" style={{ fontFamily: "var(--font-source-sans)" }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photos */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/interieur.webp"
                alt="Salle intérieure des Quatre Vents — tables bistrot et ardoises"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg mt-8">
              <Image
                src="/images/decoration.png"
                alt="Décoration intérieure authentique — Rue des Quatre Vents"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
