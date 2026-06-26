import React from "react";
import { SectionHeader } from "../../pages/Playbook";

const OFFERS = [
  {
    id: "starter",
    name: "Starter IA",
    price: "1 490€",
    recurrence: "setup + 490€/mois",
    tagline: "1 agent IA opérationnel en 7 jours",
    description: "Idéal pour tester l'IA sur un processus précis et mesurer le ROI avant d'aller plus loin.",
    includes: [
      "Audit processus (2h visio)",
      "1 agent IA sur-mesure (email, reporting ou relance)",
      "Intégration dans votre stack existante",
      "Formation équipe (1h)",
      "Support mensuel inclus (2h/mois)",
    ],
    target: "PME 10-30 salariés, première expérience IA",
    color: "border-gray-200",
    badge: "",
  },
  {
    id: "growth",
    name: "Growth IA",
    price: "3 490€",
    recurrence: "setup + 990€/mois",
    tagline: "3 agents IA + tableau de bord ROI",
    description: "Notre offre phare. 3 agents coordonnés qui couvrent acquisition, ops et reporting.",
    includes: [
      "Audit approfondi (demi-journée)",
      "3 agents IA sur-mesure",
      "Dashboard ROI en temps réel",
      "Intégrations CRM/ERP incluses",
      "Formation équipe complète",
      "Support mensuel prioritaire (5h/mois)",
      "Optimisation trimestrielle incluse",
    ],
    target: "PME 30-100 salariés, croissance active",
    color: "border-[#002FA7]",
    badge: "Le plus populaire",
  },
  {
    id: "scale",
    name: "Scale IA",
    price: "Sur devis",
    recurrence: "à partir de 2 490€/mois",
    tagline: "Transformation complète — 5 à 10 agents",
    description: "Pour les PME qui veulent faire de l'IA un avantage compétitif durable et mesurable.",
    includes: [
      "Audit stratégique complet",
      "5 à 10 agents IA déployés",
      "Architecture IA sur-mesure",
      "Intégration full-stack",
      "Accompagnement mensuel dédié (10h/mois)",
      "Roadmap évolutive 12 mois",
      "SLA garanti 99% uptime",
    ],
    target: "PME 100-200 salariés, enjeux stratégiques",
    color: "border-gray-200",
    badge: "",
  },
];

const OffersSection = () => (
  <div>
    <SectionHeader index="02" title="Offres" subtitle="3 paliers clairs, ROI mesurable dès le premier mois" />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {OFFERS.map((offer) => (
        <div key={offer.id} className={`border-2 ${offer.color} rounded-lg p-6 relative`}>
          {offer.badge && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#002FA7] text-white text-xs font-bold px-3 py-1 rounded-full">
              {offer.badge}
            </div>
          )}
          <div className="mb-4">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{offer.name}</div>
            <div className="font-clash text-3xl font-bold text-gray-900">{offer.price}</div>
            <div className="text-xs text-gray-500 mt-1">{offer.recurrence}</div>
          </div>
          <div className="text-sm font-semibold text-[#002FA7] mb-3">{offer.tagline}</div>
          <p className="text-xs text-gray-600 mb-4 leading-relaxed">{offer.description}</p>
          <div className="space-y-2 mb-4">
            {offer.includes.map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>
                {item}
              </div>
            ))}
          </div>
          <div className="border-t border-gray-100 pt-3">
            <div className="text-xs text-gray-400">Cible : {offer.target}</div>
          </div>
        </div>
      ))}
    </div>

    <div className="bg-gray-50 border border-gray-200 p-6 rounded mb-8">
      <h3 className="font-clash text-xl font-bold text-gray-900 mb-4">Options add-on</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { name: "Agent supplémentaire", price: "+390€/mois", desc: "Ajout d'un agent IA au-delà du package inclus" },
          { name: "Formation avancée équipe", price: "+590€", desc: "Demi-journée de formation approfondie pour 5 personnes" },
          { name: "Intégration API sur-mesure", price: "+890€", desc: "Connexion à un système métier spécifique (ERP, outil interne)" },
          { name: "Rapport ROI mensuel", price: "+190€/mois", desc: "Dashboard personnalisé avec métriques de performance" },
        ].map((addon, i) => (
          <div key={i} className="flex justify-between items-start p-4 bg-white border border-gray-100 rounded">
            <div>
              <div className="text-sm font-semibold text-gray-900">{addon.name}</div>
              <div className="text-xs text-gray-500 mt-1">{addon.desc}</div>
            </div>
            <div className="text-sm font-bold text-[#002FA7] flex-shrink-0 ml-4">{addon.price}</div>
          </div>
        ))}
      </div>
    </div>

    <div className="border-t border-gray-200 pt-6">
      <h3 className="font-clash text-xl font-bold text-gray-900 mb-4">Politique tarifaire</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
        <div>
          <div className="font-semibold text-gray-900 mb-2">Ce qui est inclus partout</div>
          <ul className="space-y-1">
            <li>✓ Onboarding et configuration initiale</li>
            <li>✓ Documentation technique complète</li>
            <li>✓ Garantie de résultat 30 jours (ou remboursement)</li>
            <li>✓ Hébergement infrastructure inclus</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-gray-900 mb-2">Ce qui n'est pas inclus</div>
          <ul className="space-y-1">
            <li>✗ Licences logicielles tierces (Make, Airtable...)</li>
            <li>✗ Coûts API OpenAI/Anthropic (facturés au réel)</li>
            <li>✗ Développement de fonctionnalités hors scope initial</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default OffersSection;
