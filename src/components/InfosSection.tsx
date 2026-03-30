export default function InfosSection() {
  return (
    <section id="infos" className="bg-brand-surface py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        {/* Titre */}
        <div className="text-center mb-14">
          <span
            className="text-brand-primary text-sm font-bold uppercase tracking-widest"
            style={{ fontFamily: "var(--font-source-sans)" }}
          >
            Venez nous voir
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-brand-text mt-2"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Infos Pratiques
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Infos */}
          <div className="flex flex-col gap-8">
            {/* Adresse */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3
                className="font-bold text-brand-primary text-lg mb-3 flex items-center gap-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                <span>📍</span> Adresse
              </h3>
              <p className="text-brand-text" style={{ fontFamily: "var(--font-source-sans)" }}>
                Quai de la Douane<br />
                29200 Brest<br />
                <span className="text-brand-text/60 text-sm">À deux pas du pont de Recouvrance</span>
              </p>
              <a
                href="https://maps.google.com/?q=Les+Quatre+Vents+Brest"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-brand-primary font-semibold text-sm hover:underline"
                style={{ fontFamily: "var(--font-source-sans)" }}
              >
                Voir sur Google Maps →
              </a>
            </div>

            {/* Téléphone */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3
                className="font-bold text-brand-primary text-lg mb-3 flex items-center gap-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                <span>📞</span> Contact
              </h3>
              <a
                href="tel:+33298000000"
                className="text-brand-text text-lg font-semibold hover:text-brand-primary transition-colors"
                style={{ fontFamily: "var(--font-source-sans)" }}
              >
                02 98 00 00 00
              </a>
              <p
                className="text-brand-text/60 text-sm mt-1"
                style={{ fontFamily: "var(--font-source-sans)" }}
              >
                Pas de réservation — on vous accueille à toute heure
              </p>
            </div>

            {/* Horaires */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3
                className="font-bold text-brand-primary text-lg mb-4 flex items-center gap-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                <span>🕐</span> Horaires
              </h3>
              <div className="flex flex-col gap-2" style={{ fontFamily: "var(--font-source-sans)" }}>
                {[
                  { jour: "Lundi – Vendredi", heure: "7h30 – 23h00" },
                  { jour: "Samedi", heure: "8h00 – 23h00" },
                  { jour: "Dimanche", heure: "9h00 – 22h00", badge: "Poulet frites" },
                ].map((h) => (
                  <div key={h.jour} className="flex justify-between items-center py-2 border-b border-brand-text/10 last:border-0">
                    <span className="text-brand-text font-medium">{h.jour}</span>
                    <div className="flex items-center gap-2">
                      {h.badge && (
                        <span className="text-xs bg-brand-accent/20 text-brand-primary font-semibold px-2 py-0.5 rounded">
                          {h.badge}
                        </span>
                      )}
                      <span className="text-brand-primary font-bold">{h.heure}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Instagram */}
            <div className="bg-brand-primary rounded-2xl p-6 text-white">
              <h3
                className="font-bold text-brand-accent text-lg mb-2 flex items-center gap-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-brand-accent">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Suivez-nous
              </h3>
              <p className="text-white/70 text-sm mb-3" style={{ fontFamily: "var(--font-source-sans)" }}>
                Photos du quotidien, formules du moment, ambiance des quais.
              </p>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-accent text-brand-primary font-bold text-sm px-5 py-2 rounded hover:bg-brand-accent/90 transition-all"
                style={{ fontFamily: "var(--font-source-sans)" }}
              >
                @lesquatrevents
              </a>
            </div>
          </div>

          {/* Carte Google Maps */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[400px]">
            <iframe
              title="Localisation Les Quatre Vents Brest"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2651.8!2d-4.4833!3d48.3833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDIzJzAwLjAiTiA0wrAyOCcwMC4wIlc!5e0!3m2!1sfr!2sfr!4v1680000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
