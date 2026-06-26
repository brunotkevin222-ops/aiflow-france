import React, { useState } from "react";
import { SectionHeader } from "../../pages/Playbook";

const WEEKS = [
  {
    phase: "Phase 1 — Fondations",
    weeks: [
      {
        num: "S1",
        title: "Setup & infrastructure",
        tasks: [
          "Ouvrir les comptes : Make.com, Airtable, HubSpot, Instantly, Apollo",
          "Configurer le domaine email d'envoi (warm-up)",
          "Créer le Notion workspace avec templates",
          "Importer 500 premiers prospects dans Apollo",
          "Lancer l'agent Cold Email — première séquence",
        ],
        kpi: "Infrastructure prête — premiers emails envoyés",
        color: "border-l-blue-400",
      },
      {
        num: "S2",
        title: "Premier agent client",
        tasks: [
          "Onboarder le premier client pilote (offre Starter à tarif réduit)",
          "Déployer Agent Qualification Leads pour ce client",
          "Déployer Agent Support Client pour ce client",
          "Lancement LinkedIn outreach (20 connexions/jour)",
          "Recueillir retours et ajuster",
        ],
        kpi: "1er client pilote actif — 2 agents déployés",
        color: "border-l-blue-400",
      },
      {
        num: "S3",
        title: "Itération & premiers RDVs",
        tasks: [
          "Analyser les résultats cold email semaine 1-2",
          "Optimiser l'objet et le body des emails",
          "Passer les premiers RDVs discovery calls",
          "Documenter le cas client pilote (résultats, témoignage)",
          "Publier 2 posts LinkedIn avec résultats",
        ],
        kpi: "5-10 RDVs discovery call planifiés",
        color: "border-l-blue-400",
      },
      {
        num: "S4",
        title: "Premier closing",
        tasks: [
          "Convertir 1-2 prospects en clients payants",
          "Déployer agents pour nouveaux clients",
          "Mettre en place le processus de reporting mensuel",
          "Lancer SEO : publier 2 premiers articles",
          "Bilan de fin de mois 1 : MRR, coûts, leçons",
        ],
        kpi: "MRR M1 : 1 000-2 000€",
        color: "border-l-blue-400",
      },
    ],
  },
  {
    phase: "Phase 2 — Croissance",
    weeks: [
      {
        num: "S5-6",
        title: "Scale acquisition",
        tasks: [
          "Doubler le volume de cold emails (100/jour)",
          "Lancer le canal apporteurs d'affaires (3 cabinets contactés)",
          "Onboarding 2-3 nouveaux clients Growth IA",
          "Tester variantes A/B sur les séquences email",
          "Agent Relance Devis déployé pour tous les clients",
        ],
        kpi: "5 clients actifs — MRR M2 : 4 000-6 000€",
        color: "border-l-green-400",
      },
      {
        num: "S7-8",
        title: "Optimisation & montée en gamme",
        tasks: [
          "Proposer upgrade Scale IA aux meilleurs clients",
          "Déployer Agent Contenu LinkedIn (posts hebdo)",
          "Optimiser les agents existants selon retours",
          "Recruter un freelance ops pour décharger les déploiements",
          "Premier bilan ROI envoyé à tous les clients",
        ],
        kpi: "3 upgrades réalisés — 1 freelance intégré",
        color: "border-l-green-400",
      },
    ],
  },
  {
    phase: "Phase 3 — Consolidation J+90",
    weeks: [
      {
        num: "S9-12",
        title: "Objectif 10K€ MRR",
        tasks: [
          "Atteindre 8-10 clients actifs",
          "MRR stable au-dessus de 10 000€",
          "NPS clients > 8/10",
          "2 partenaires apporteurs actifs",
          "Articles SEO en top 3 Google sur 2 mots-clés",
          "Processus de livraison entièrement documenté",
          "Recrutement 2ème freelance IA ops",
        ],
        kpi: "MRR 10 000€+ — 8-10 clients — équipe 3 personnes",
        color: "border-l-purple-400",
      },
    ],
  },
];

const PlanSection = () => {
  const [openPhase, setOpenPhase] = useState(0);

  return (
    <div>
      <SectionHeader index="08" title="Plan 90 jours" subtitle="Semaine par semaine — de 0 à 10K€ MRR" />

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="text-center p-4 bg-blue-50 border border-blue-100 rounded">
          <div className="text-xs font-bold text-blue-700 mb-1">Phase 1 (J1-30)</div>
          <div className="text-lg font-bold text-gray-900">Fondations</div>
          <div className="text-xs text-gray-500 mt-1">1-2 clients · 1-2K€ MRR</div>
        </div>
        <div className="text-center p-4 bg-green-50 border border-green-100 rounded">
          <div className="text-xs font-bold text-green-700 mb-1">Phase 2 (J31-60)</div>
          <div className="text-lg font-bold text-gray-900">Croissance</div>
          <div className="text-xs text-gray-500 mt-1">5 clients · 4-6K€ MRR</div>
        </div>
        <div className="text-center p-4 bg-purple-50 border border-purple-100 rounded">
          <div className="text-xs font-bold text-purple-700 mb-1">Phase 3 (J61-90)</div>
          <div className="text-lg font-bold text-gray-900">Consolidation</div>
          <div className="text-xs text-gray-500 mt-1">8-10 clients · 10K€ MRR</div>
        </div>
      </div>

      <div className="space-y-4">
        {WEEKS.map((phase, pi) => (
          <div key={phase.phase} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setOpenPhase(openPhase === pi ? -1 : pi)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
            >
              <div className="font-clash font-bold text-gray-900">{phase.phase}</div>
              <div className="text-gray-400">{openPhase === pi ? "▲" : "▼"}</div>
            </button>

            {openPhase === pi && (
              <div className="divide-y divide-gray-100">
                {phase.weeks.map((week) => (
                  <div key={week.num} className={`p-5 border-l-4 ${week.color}`}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="text-xs font-bold text-gray-400 mr-2">{week.num}</span>
                        <span className="font-semibold text-gray-900">{week.title}</span>
                      </div>
                      <div className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded flex-shrink-0 ml-2">{week.kpi}</div>
                    </div>
                    <ul className="space-y-1">
                      {week.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-gray-300 flex-shrink-0">□</span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanSection;
