import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo + nom */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.jpg"
                alt="Les Quatre Vents"
                width={56}
                height={56}
                className="rounded-full"
              />
              <div>
                <div className="font-heading text-xl font-bold leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                  Les Quatre Vents
                </div>
                <div className="text-white/60 text-sm italic">Ar 4 Avel</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: "var(--font-source-sans)" }}>
              Institution brestoise depuis 1984.<br />
              Brasserie, bar & terrasse sur les quais.
            </p>
            {/* Instagram */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-brand-accent hover:text-white transition-colors text-sm font-semibold"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @lesquatrevents
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading text-base font-bold mb-4 text-brand-accent" style={{ fontFamily: "var(--font-playfair)" }}>
              Navigation
            </h3>
            <ul className="flex flex-col gap-2" style={{ fontFamily: "var(--font-source-sans)" }}>
              {[
                ["L'Esprit du lieu", "#esprit"],
                ["Nos Formules", "#formules"],
                ["La Carte", "#carte"],
                ["La Terrasse", "#terrasse"],
                ["Nous Trouver", "#infos"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Infos + horaires */}
          <div>
            <h3 className="font-heading text-base font-bold mb-4 text-brand-accent" style={{ fontFamily: "var(--font-playfair)" }}>
              Infos pratiques
            </h3>
            <div className="flex flex-col gap-2 text-sm text-white/70" style={{ fontFamily: "var(--font-source-sans)" }}>
              <p>📍 Quai de la Douane, 29200 Brest</p>
              <p>📞 <a href="tel:+33298000000" className="hover:text-white transition-colors">02 98 00 00 00</a></p>
              <div className="mt-3">
                <p className="text-white/90 font-semibold mb-1">Horaires</p>
                <p>Lun – Sam : 7h30 – 23h00</p>
                <p>Dimanche : 9h00 – 22h00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-3 text-white/40 text-xs" style={{ fontFamily: "var(--font-source-sans)" }}>
          <span>© {year} Les Quatre Vents — Brest. Tous droits réservés.</span>
          <span className="italic">Depuis 1984 · Ar 4 Avel</span>
        </div>
      </div>
    </footer>
  );
}
