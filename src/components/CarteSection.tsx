import Image from "next/image";

const plats = [
  { nom: "Entrecôte du boucher", desc: "Frites maison, sauce au choix, salade", categorie: "Grillades" },
  { nom: "Moules marinières", desc: "Frites maison, pain grillé", categorie: "Poissons & mer" },
  { nom: "Assiette de charcuterie", desc: "Sélection du moment, cornichons, pain", categorie: "À partager" },
  { nom: "Croque-monsieur", desc: "Jambon, fromage fondu, salade verte", categorie: "Brasserie" },
];

const bieres = [
  { nom: "Wicklow Wolf Blonde", origine: "Irlande", type: "Pression" },
  { nom: "Bière du moment", origine: "Bretagne", type: "Pression" },
  { nom: "Coreff Ambrée", origine: "Morlaix", type: "Bouteille" },
  { nom: "Sélection de bières artisanales", origine: "Rotation", type: "Bouteille" },
];

export default function CarteSection() {
  return (
    <section id="carte" className="bg-brand-surface py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        {/* Titre */}
        <div className="text-center mb-14">
          <span
            className="text-brand-primary text-sm font-bold uppercase tracking-widest"
            style={{ fontFamily: "var(--font-source-sans)" }}
          >
            Cuisine généreuse
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-brand-text mt-2"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            La Carte
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Colonne gauche : plats + bières */}
          <div className="flex flex-col gap-10">
            {/* Plats */}
            <div>
              <h3
                className="text-xl font-bold text-brand-primary mb-5 pb-3 border-b-2 border-brand-primary"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Plats du moment
              </h3>
              <div className="flex flex-col gap-4">
                {plats.map((plat) => (
                  <div key={plat.nom} className="flex justify-between items-start gap-4 pb-4 border-b border-brand-text/10">
                    <div>
                      <p
                        className="font-semibold text-brand-text"
                        style={{ fontFamily: "var(--font-source-sans)" }}
                      >
                        {plat.nom}
                      </p>
                      <p
                        className="text-sm text-brand-text/60 mt-0.5"
                        style={{ fontFamily: "var(--font-source-sans)" }}
                      >
                        {plat.desc}
                      </p>
                    </div>
                    <span
                      className="shrink-0 text-xs bg-brand-primary/10 text-brand-primary font-semibold px-2 py-1 rounded"
                      style={{ fontFamily: "var(--font-source-sans)" }}
                    >
                      {plat.categorie}
                    </span>
                  </div>
                ))}
                <p
                  className="text-sm text-brand-text/50 italic"
                  style={{ fontFamily: "var(--font-source-sans)" }}
                >
                  Carte complète disponible sur place · Elle change selon les arrivages
                </p>
              </div>
            </div>

            {/* Bières */}
            <div>
              <h3
                className="text-xl font-bold text-brand-primary mb-5 pb-3 border-b-2 border-brand-primary"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Nos Bières Pression & Bouteilles
              </h3>
              <div className="flex flex-col gap-3">
                {bieres.map((biere) => (
                  <div key={biere.nom} className="flex justify-between items-center pb-3 border-b border-brand-text/10">
                    <div>
                      <p
                        className="font-semibold text-brand-text"
                        style={{ fontFamily: "var(--font-source-sans)" }}
                      >
                        {biere.nom}
                      </p>
                      <p
                        className="text-xs text-brand-text/50"
                        style={{ fontFamily: "var(--font-source-sans)" }}
                      >
                        {biere.origine}
                      </p>
                    </div>
                    <span
                      className="text-xs font-semibold text-brand-secondary"
                      style={{ fontFamily: "var(--font-source-sans)" }}
                    >
                      {biere.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne droite : photos */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-md col-span-2">
              <Image
                src="/images/plat.png"
                alt="Entrecôte frites — plat signature des Quatre Vents"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/biere.png"
                alt="Bière pression Wicklow Wolf au bar des Quatre Vents"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/vin.png"
                alt="Sélection de vins — carte des vins des Quatre Vents"
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
