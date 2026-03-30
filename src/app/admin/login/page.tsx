"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError("Email ou mot de passe incorrect.");
      setLoading(false);
    } else {
      router.push("/admin");
    }
  };

  return (
    <div className="min-h-screen bg-brand-surface flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
        <div className="text-center mb-8">
          <h1
            className="text-2xl font-black text-brand-primary"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Les Quatre Vents
          </h1>
          <p className="text-brand-text/60 text-sm mt-1" style={{ fontFamily: "var(--font-source-sans)" }}>
            Administration du site
          </p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-semibold text-brand-text mb-1" style={{ fontFamily: "var(--font-source-sans)" }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-primary text-base"
              style={{ fontFamily: "var(--font-source-sans)" }}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-brand-text mb-1" style={{ fontFamily: "var(--font-source-sans)" }}>
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-primary text-base"
              style={{ fontFamily: "var(--font-source-sans)" }}
            />
          </div>

          {error && (
            <p className="text-red-600 text-sm text-center" style={{ fontFamily: "var(--font-source-sans)" }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-brand-primary text-white font-bold py-3 rounded-lg hover:bg-brand-primary-dark transition-all disabled:opacity-60 text-base"
            style={{ fontFamily: "var(--font-source-sans)" }}
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>
      </div>
    </div>
  );
}
