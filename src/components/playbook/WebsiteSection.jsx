import React from "react";
import { SectionHeader, CopyBlock } from "../../pages/Playbook";

const PAGES = [
  {
    name: "Page d'accueil",
    url: "aiflow.fr",
    objective: "Convertir le visiteur en lead (formulaire)",
    sections: [
      { name: "Hero", desc: "Titre choc + promesse chiffrée + CTA 'Réserver un appel'" },
      { name: "Résultats clients", desc: "+220% taux de réponse, -80% temps support, etc." },
      { name: "10 Agents IA", desc: "Cards visuelles avec cas d'usage concrets" },
      { name: "Nos offres", desc: "3 cartes avec prix visible + bouton CTA" },
      { name: "Processus", desc: "Comment ça marche en 4 étapes (Audit → Config → Deploy → Suivi)" },
      { name: "FAQ", desc: "7 objections fréquentes répondues" },
      { name: "CTA final", desc: "Urgence douce + formulaire ou Calendly" },
    ],
  },
  {
    name: "Page /playbook",
    url: "aiflow.fr/playbook",
    objective: "Crédibilité + conversion prospects chauds",
    sections: [
      { name: "Sidebar navigation", desc: "11 sections accessibles en un clic" },
      { name: "Contenu riche", desc: "Scripts, agents, offres détaillées — confiance maximale" },
    ],
  },
];

const SEO_KEYWORDS = [
  { keyword: "automatisation IA PME France", volume: "1 200/mois", difficulté: "Moyenne", priorité: "🔥 Haute" },
  { keyword: "agent IA entreprise", volume: "2 400/mois", difficulté: "Moyenne", priorité: "🔥 Haute" },
  { keyword: "automatiser emails entreprise IA", volume: "480/mois", difficulté: "Faible", priorité: "⭐ Moyenne" },
  { keyword: "agence IA France 2026", volume: "320/mois", difficulté: "Faible", priorité: "⭐ Moyenne" },
  { keyword: "IA pour cabinet comptable", volume: "210/mois", difficulté: "Très faible", priorité: "⭐ Moyenne" },
  { keyword: "automatisation processus PME", volume: "590/mois", difficulté: "Faible", priorité: "✅ Facile" },
];

const COPY_PRINCIPLES = [
  { principle: "Spécifique", bad: "On améliore vos processus", good: "On automatise vos relances devis en 14 jours" },
  { principle: "Chiffré", bad: "Gain de temps significatif", good: "+8h/semaine récupérées dès le premier mois" },
  { principle: "Risque zéro", bad: "Essayez notre solution", good: "Satisfait ou remboursé 30 jours — sans engagement" },
  { principle: "Preuve sociale", bad: "Nos clients sont satisfaits", good: "27 PME françaises automatisées depuis janvier 2026" },
];

const WebsiteSection = () => (
  <div>
    <SectionHeader index="07" title="Site web" subtitle="Copywriting, SEO et architecture de conversion — aiflow.fr" />

    <div className="mb-10">
      <h3 className="font-clash text-xl font-bold text-gray-900 mb-4">Architecture des pages</h3>
      <div className="space-y-6">
        {PAGES.map((page) => (
          <div key={page.name} className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-900 text-white px-5 py-3 flex justify-between items-center">
              <div className="font-semibold">{page.name}</div>
              <div className="text-xs text-gray-400 font-mono">{page.url}</div>
            </div>
            <div className="p-5">
              <div className="text-xs text-[#002FA7] font-semibold mb-4">Objectif : {page.objective}</div>
              <div className="space-y-2">
                {page.sections.map((s, i) => (
                  <div key={i} className="flex gap-3 text-sm">
                    <span className="text-gray-400 font-mono flex-shrink-0">{String(i + 1).padStart(2, '0')}.</span>
                    <span className="font-semibold text-gray-900 flex-shrink-0">{s.name}</span>
                    <span className="text-gray-500">— {s.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="mb-10">
      <h3 className="font-clash text-xl font-bold text-gray-900 mb-4">Principes de copywriting</h3>
      <div className="space-y-3">
        {COPY_PRINCIPLES.map((p) => (
          <div key={p.principle} className="border border-gray-100 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-4 py-2 text-xs font-bold text-[#002FA7]">Principe : {p.principle}</div>
            <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-gray-100">
              <div className="px-4 py-3">
                <div className="text-xs font-semibold text-red-500 mb-1">✗ Éviter</div>
                <div className="text-sm text-gray-600 italic">"{p.bad}"</div>
              </div>
              <div className="px-4 py-3">
                <div className="text-xs font-semibold text-green-600 mb-1">✓ Préférer</div>
                <div className="text-sm text-gray-900 font-medium">"{p.good}"</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="mb-10">
      <h3 className="font-clash text-xl font-bold text-gray-900 mb-4">Stratégie SEO — Mots-clés cibles</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 px-3 text-xs font-bold text-gray-500 uppercase">Mot-clé</th>
              <th className="text-left py-2 px-3 text-xs font-bold text-gray-500 uppercase">Volume</th>
              <th className="text-left py-2 px-3 text-xs font-bold text-gray-500 uppercase">Difficulté</th>
              <th className="text-left py-2 px-3 text-xs font-bold text-gray-500 uppercase">Priorité</th>
            </tr>
          </thead>
          <tbody>
            {SEO_KEYWORDS.map((kw, i) => (
              <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-2 px-3 font-mono text-gray-800">{kw.keyword}</td>
                <td className="py-2 px-3 text-gray-600">{kw.volume}</td>
                <td className="py-2 px-3 text-gray-600">{kw.difficulté}</td>
                <td className="py-2 px-3">{kw.priorité}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <CopyBlock
      title="Hero copywriting — version A (testée)"
      content={"Automatisez les 3 tâches qui volent le plus de temps à votre équipe.\n\nEn 14 jours, on déploie des agents IA sur-mesure qui travaillent pour vous 24h/24 — sans recrutement, sans formation, sans charge.\n\n→ +8h/semaine récupérées en moyenne\n→ Satisfait ou remboursé 30 jours\n→ PME françaises uniquement"}
    />
  </div>
);

export default WebsiteSection;
