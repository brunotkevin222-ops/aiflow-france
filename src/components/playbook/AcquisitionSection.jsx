import React, { useState } from "react";
import { SectionHeader, CopyBlock } from "../../pages/Playbook";

const CHANNELS = [
  {
    id: "cold-email",
    name: "Cold Email",
    icon: "📧",
    priority: "Priorité #1",
    volume: "50-100 emails/jour",
    conversion: "2-5% → RDV",
    description: "Canal principal d'acquisition. Entièrement automatisé avec l'Agent Cold Email.",
    steps: [
      "Scraping Apollo.io : 200 prospects/semaine dans la niche cible",
      "Enrichissement automatique (poste, secteur, pain points)",
      "Génération email personnalisé par GPT-4o",
      "Séquence 3 emails sur 10 jours",
      "Qualification automatique des réponses",
      "Passage en RDV Calendly si intéressé",
    ],
    kpis: ["Taux ouverture : 45-55%", "Taux réponse : 8-15%", "Taux RDV : 2-5%"],
    tools: ["Apollo.io", "Instantly.ai", "GPT-4o", "Make.com"],
  },
  {
    id: "linkedin",
    name: "LinkedIn Outreach",
    icon: "💼",
    priority: "Priorité #2",
    volume: "20-30 connexions/jour",
    conversion: "5-10% → RDV",
    description: "Approche plus personnalisée, taux de conversion plus élevé. Complémentaire au cold email.",
    steps: [
      "Recherche Sales Navigator : DRH, DAF, Dirigeants PME",
      "Connexion avec note personnalisée",
      "Message 1 : valeur immédiate (exemple concret de gain)",
      "Message 2 (J+3) : cas client similaire",
      "Message 3 (J+7) : CTA direct pour démo",
      "Suivi dans CRM HubSpot",
    ],
    kpis: ["Taux d'acceptation : 25-35%", "Taux de réponse : 15-20%", "Taux RDV : 5-10%"],
    tools: ["Sales Navigator", "Dux-Soup", "HubSpot", "Slack"],
  },
  {
    id: "seo",
    name: "SEO & Contenu",
    icon: "🔍",
    priority: "Priorité #3",
    volume: "2 articles/semaine",
    conversion: "Long terme — 3-6 mois",
    description: "Génération de leads entrants qualifiés sur le long terme. ROI exponentiel.",
    steps: [
      "Mots-clés : 'automatisation IA PME France', 'agent IA [secteur]'",
      "Articles de 1500+ mots générés + relus par humain",
      "Optimisation SEO technique (Core Web Vitals)",
      "Backlinks via partenariats cabinets comptables",
      "Google Business Profile optimisé",
    ],
    kpis: ["Objectif : 5 000 visiteurs/mois à M+6", "Taux de conversion : 0.5-1%", "25-50 leads/mois organiques"],
    tools: ["Ahrefs", "GPT-4o", "WordPress", "Agent Contenu"],
  },
  {
    id: "referral",
    name: "Apporteurs d'affaires",
    icon: "🤝",
    priority: "Priorité #4",
    volume: "3-5 partenaires actifs",
    conversion: "Leads chauds — 30-40%",
    description: "Les leads les plus qualifiés. Partenariats avec cabinets comptables, ESN, consultants RH.",
    steps: [
      "Identifier 20 cabinets comptables dans la région cible",
      "Pitch partenariat : 10% de commission sur contrat signé",
      "Kit partenaire (one-pager, cas clients, FAQ)",
      "Suivi trimestriel des apporteurs actifs",
    ],
    kpis: ["Objectif : 2 deals/mois via apporteurs à M+3", "Commission : 10% première année", "CLV partenaire > 5 000€/an"],
    tools: ["HubSpot", "Notion", "DocuSign"],
  },
];

const AcquisitionSection = () => {
  const [active, setActive] = useState("cold-email");
  const channel = CHANNELS.find(c => c.id === active);

  return (
    <div>
      <SectionHeader index="04" title="Acquisition" subtitle="4 canaux complémentaires pour atteindre 10K€/mois en 90 jours" />

      <div className="flex gap-2 mb-6 flex-wrap">
        {CHANNELS.map(c => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`flex items-center gap-1 px-4 py-2 rounded text-sm font-medium transition-colors ${
              active === c.id ? "bg-[#002FA7] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {c.icon} {c.name}
          </button>
        ))}
      </div>

      {channel && (
        <div className="border border-gray-200 rounded-lg p-6 mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">{channel.icon}</span>
                <h3 className="font-clash text-xl font-bold text-gray-900">{channel.name}</h3>
              </div>
              <p className="text-gray-600 text-sm">{channel.description}</p>
            </div>
            <div className="text-right flex-shrink-0 ml-4">
              <div className="text-xs font-bold text-[#002FA7] bg-blue-50 px-3 py-1 rounded-full">{channel.priority}</div>
              <div className="text-xs text-gray-500 mt-2">{channel.volume}</div>
              <div className="text-xs text-green-600 font-medium mt-1">{channel.conversion}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Processus étape par étape</div>
              <ol className="space-y-2">
                {channel.steps.map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-700">
                    <span className="flex-shrink-0 w-5 h-5 bg-[#002FA7] text-white rounded-full flex items-center justify-center text-xs font-bold">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">KPIs cibles</div>
              <div className="space-y-2 mb-4">
                {channel.kpis.map((kpi, i) => (
                  <div key={i} className="text-sm text-gray-700 bg-green-50 border border-green-100 px-3 py-2 rounded">{kpi}</div>
                ))}
              </div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Stack</div>
              <div className="flex flex-wrap gap-1">
                {channel.tools.map((t, i) => (
                  <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <CopyBlock
        title="Message LinkedIn — Template validation"
        content={"Bonjour [Prénom],\n\nJe vois que vous dirigez [Entreprise] dans [secteur]. On automatise la gestion admin des PME comme la vôtre — typiquement relances, reporting, tri emails.\n\nOn vient d'aider [cas client similaire] à récupérer 8h/semaine.\n\nVous avez 20 min cette semaine pour voir si c'est pertinent pour vous ?"}
      />
    </div>
  );
};

export default AcquisitionSection;
