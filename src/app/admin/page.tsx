"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

type Tab = "textes" | "horaires" | "messages";

interface SiteContent {
  id: string;
  value: string;
}

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  read: boolean;
  created_at: string;
}

const TEXTE_FIELDS = [
  { id: "hero_title", label: "Titre Hero" },
  { id: "hero_subtitle", label: "Sous-titre Hero" },
  { id: "hero_description", label: "Description Hero" },
  { id: "esprit_text1", label: "Texte Esprit (paragraphe 1)" },
  { id: "esprit_text2", label: "Texte Esprit (paragraphe 2)" },
  { id: "adresse", label: "Adresse" },
  { id: "telephone", label: "Téléphone" },
  { id: "instagram", label: "Instagram (handle)" },
];

const HORAIRE_FIELDS = [
  { id: "horaires_semaine", label: "Lundi – Vendredi" },
  { id: "horaires_samedi", label: "Samedi" },
  { id: "horaires_dimanche", label: "Dimanche" },
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<Tab>("textes");
  const [content, setContent] = useState<Record<string, string>>({});
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [saving, setSaving] = useState<string | null>(null);
  const [saved, setSaved] = useState<string | null>(null);
  const router = useRouter();

  const loadContent = useCallback(async () => {
    const { data } = await supabase.from("site_content").select("*");
    if (data) {
      const map: Record<string, string> = {};
      (data as SiteContent[]).forEach((row) => { map[row.id] = row.value; });
      setContent(map);
    }
  }, []);

  const loadMessages = useCallback(async () => {
    const { data } = await supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setMessages(data as ContactMessage[]);
  }, []);

  useEffect(() => {
    loadContent();
  }, [loadContent]);

  useEffect(() => {
    if (activeTab === "messages") loadMessages();
  }, [activeTab, loadMessages]);

  const saveField = async (id: string) => {
    setSaving(id);
    await supabase
      .from("site_content")
      .upsert({ id, value: content[id] ?? "", updated_at: new Date().toISOString() });
    setSaving(null);
    setSaved(id);
    setTimeout(() => setSaved(null), 2000);
  };

  const markRead = async (msgId: string) => {
    await supabase.from("contact_messages").update({ read: true }).eq("id", msgId);
    setMessages((prev) => prev.map((m) => m.id === msgId ? { ...m, read: true } : m));
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  const renderField = (fieldId: string, label: string, multiline = false) => (
    <div key={fieldId} className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-gray-600" style={{ fontFamily: "var(--font-source-sans)" }}>
        {label}
      </label>
      {multiline ? (
        <textarea
          rows={3}
          value={content[fieldId] ?? ""}
          onChange={(e) => setContent((prev) => ({ ...prev, [fieldId]: e.target.value }))}
          className="border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary text-base resize-none"
          style={{ fontFamily: "var(--font-source-sans)" }}
        />
      ) : (
        <input
          type="text"
          value={content[fieldId] ?? ""}
          onChange={(e) => setContent((prev) => ({ ...prev, [fieldId]: e.target.value }))}
          className="border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary text-base"
          style={{ fontFamily: "var(--font-source-sans)" }}
        />
      )}
      <button
        onClick={() => saveField(fieldId)}
        disabled={saving === fieldId}
        className="self-end text-sm bg-brand-primary text-white px-4 py-2 rounded-lg hover:bg-brand-primary-dark transition-all disabled:opacity-60"
        style={{ fontFamily: "var(--font-source-sans)" }}
      >
        {saving === fieldId ? "Sauvegarde..." : saved === fieldId ? "✓ Sauvegardé" : "Sauvegarder"}
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-56 bg-white border-r border-gray-100 flex flex-col shrink-0">
        <div className="p-5 border-b border-gray-100">
          <div className="font-black text-brand-primary text-base" style={{ fontFamily: "var(--font-playfair)" }}>
            Les Quatre Vents
          </div>
          <div className="text-gray-400 text-xs mt-0.5" style={{ fontFamily: "var(--font-source-sans)" }}>
            Administration
          </div>
        </div>

        <nav className="flex flex-col gap-1 p-3 flex-1">
          {(["textes", "horaires", "messages"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-left px-4 py-2.5 rounded-lg text-sm font-semibold capitalize transition-all ${
                activeTab === tab
                  ? "bg-brand-primary text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              style={{ fontFamily: "var(--font-source-sans)" }}
            >
              {tab === "textes" && "✏️ "}{tab === "horaires" && "🕐 "}{tab === "messages" && "💬 "}
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-gray-100">
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2.5 rounded-lg text-sm text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-all"
            style={{ fontFamily: "var(--font-source-sans)" }}
          >
            Se déconnecter
          </button>
        </div>
      </aside>

      {/* Contenu principal */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-2xl mx-auto">
          {activeTab === "textes" && (
            <div className="flex flex-col gap-6">
              <h1 className="text-2xl font-black text-gray-800" style={{ fontFamily: "var(--font-playfair)" }}>
                Textes du site
              </h1>
              <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-6">
                {TEXTE_FIELDS.map((f) =>
                  renderField(
                    f.id,
                    f.label,
                    f.id.includes("text") || f.id.includes("description")
                  )
                )}
              </div>
            </div>
          )}

          {activeTab === "horaires" && (
            <div className="flex flex-col gap-6">
              <h1 className="text-2xl font-black text-gray-800" style={{ fontFamily: "var(--font-playfair)" }}>
                Horaires d&apos;ouverture
              </h1>
              <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-6">
                {HORAIRE_FIELDS.map((f) => renderField(f.id, f.label))}
              </div>
            </div>
          )}

          {activeTab === "messages" && (
            <div className="flex flex-col gap-6">
              <h1 className="text-2xl font-black text-gray-800" style={{ fontFamily: "var(--font-playfair)" }}>
                Messages reçus
              </h1>
              {messages.length === 0 ? (
                <div className="bg-white rounded-2xl p-8 text-center text-gray-400 shadow-sm" style={{ fontFamily: "var(--font-source-sans)" }}>
                  Aucun message pour l&apos;instant.
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`bg-white rounded-2xl p-5 shadow-sm border-l-4 ${
                        msg.read ? "border-gray-200" : "border-brand-primary"
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-bold text-gray-800" style={{ fontFamily: "var(--font-source-sans)" }}>
                            {msg.name}
                          </p>
                          <a
                            href={`mailto:${msg.email}`}
                            className="text-brand-primary text-sm hover:underline"
                            style={{ fontFamily: "var(--font-source-sans)" }}
                          >
                            {msg.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-400 text-xs" style={{ fontFamily: "var(--font-source-sans)" }}>
                            {new Date(msg.created_at).toLocaleDateString("fr-FR")}
                          </span>
                          {!msg.read && (
                            <button
                              onClick={() => markRead(msg.id)}
                              className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded hover:bg-gray-200 transition-all"
                              style={{ fontFamily: "var(--font-source-sans)" }}
                            >
                              Marquer lu
                            </button>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "var(--font-source-sans)" }}>
                        {msg.message}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
