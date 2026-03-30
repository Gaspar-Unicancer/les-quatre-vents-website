import Image from "next/image";

export default function TerrasseSection() {
  return (
    <section id="terrasse" className="bg-brand-secondary py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div>
            <span
              className="text-brand-accent text-sm font-bold uppercase tracking-widest"
              style={{ fontFamily: "var(--font-source-sans)" }}
            >
              Sur les quais de Brest
            </span>
            <h2
              className="text-4xl md:text-5xl font-black text-white mt-2 mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              La Terrasse
            </h2>
            <p
              className="text-white/80 text-lg leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-source-sans)" }}
            >
              Face au port de Brest, notre terrasse est l&apos;une des plus animées
              des quais dès les premiers rayons de soleil. On y sert à toute heure :
              café du matin, verre de l&apos;apéro, plat du soir.
            </p>
            <p
              className="text-white/65 text-base leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-source-sans)" }}
            >
              Une adresse incontournable pour les visiteurs de passage à Brest —
              et un rendez-vous hebdomadaire pour les habitués du dimanche.
            </p>

            {/* Points forts terrasse */}
            <div className="flex flex-col gap-3">
              {[
                "Vue sur les quais et le port de Brest",
                "Terrasse couverte et ensoleillée",
                "Service continu 7j/7",
                "Idéale pour touristes et familles",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3" style={{ fontFamily: "var(--font-source-sans)" }}>
                  <div className="w-2 h-2 rounded-full bg-brand-accent shrink-0" />
                  <span className="text-white/80 text-base">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Photos terrasse */}
          <div className="grid grid-cols-1 gap-4">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/terrasse.jpg"
                alt="Terrasse des Quatre Vents sur les quais de Brest"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/service-terrasse.png"
                alt="Service en terrasse — Les Quatre Vents, Brest"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
