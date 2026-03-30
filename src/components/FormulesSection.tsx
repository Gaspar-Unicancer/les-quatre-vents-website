import Image from "next/image";

const formules = [
  {
    id: "petit-dej",
    image: "/images/formule-petit-dej.png",
    titre: "Le P'tit Déj",
    horaire: "7h30 – 10h30",
    description: "Croissant, jus d'orange pressé, café ou thé. Commencez la journée comme il se doit.",
    bgColor: "bg-brand-primary",
    badge: "Tous les jours",
    badgeColor: "bg-brand-accent text-brand-primary",
  },
  {
    id: "gouter",
    image: "/images/formule-gouter.png",
    titre: "Le Goûter",
    horaire: "15h00 – 18h00",
    description: "Café gourmand ou thé, gâteau du jour maison. La pause méritée de l'après-midi.",
    bgColor: "bg-brand-primary",
    badge: "Tous les jours",
    badgeColor: "bg-brand-accent text-brand-primary",
  },
  {
    id: "huitres",
    image: "/images/formule-huitres.png",
    titre: "Le Six à Huîtres",
    horaire: "12h00 – 22h00",
    description: "6 huîtres fraîches de Bretagne, pain beurre et mignonette. L'apéro breton par excellence.",
    bgColor: "bg-brand-secondary",
    badge: "Produit breton",
    badgeColor: "bg-white/20 text-white",
  },
  {
    id: "poulet",
    image: "/images/formule-poulet-dimanche.png",
    titre: "Le Poulet Frites du Dimanche",
    horaire: "Le dimanche uniquement",
    description: "Poulet rôti entier, frites maison croustillantes. Le rendez-vous dominical des Brestois depuis 1984.",
    bgColor: "bg-brand-primary",
    badge: "⭐ Dimanche seulement",
    badgeColor: "bg-brand-accent text-brand-primary",
    highlight: true,
  },
];

export default function FormulesSection() {
  return (
    <section id="formules" className="bg-brand-text py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        {/* Titre */}
        <div className="text-center mb-14">
          <span
            className="text-brand-accent text-sm font-bold uppercase tracking-widest"
            style={{ fontFamily: "var(--font-source-sans)" }}
          >
            À toute heure
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-white mt-2"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Nos Formules
          </h2>
          <p
            className="text-white/60 text-lg mt-3 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-source-sans)" }}
          >
            Du matin jusqu&apos;au soir, une formule pour chaque moment.
          </p>
        </div>

        {/* Grille formules */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {formules.map((formule) => (
            <div
              key={formule.id}
              className={`${formule.bgColor} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 ${
                formule.highlight ? "ring-2 ring-brand-accent" : ""
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={formule.image}
                  alt={`Formule ${formule.titre} — Les Quatre Vents`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Texte */}
              <div className="p-4">
                <span
                  className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${formule.badgeColor}`}
                  style={{ fontFamily: "var(--font-source-sans)" }}
                >
                  {formule.badge}
                </span>
                <h3
                  className="text-white font-black text-lg leading-tight mb-1"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {formule.titre}
                </h3>
                <p
                  className="text-white/60 text-xs font-semibold mb-2 uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-source-sans)" }}
                >
                  {formule.horaire}
                </p>
                <p
                  className="text-white/80 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-source-sans)" }}
                >
                  {formule.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
