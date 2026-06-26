import React, { useState } from "react";
import { SectionHeader } from "../../pages/Playbook";

const AGENTS = [
  {
    num: "01",
    name: "Agent Qualification Leads",
    emoji: "🎯",
    category: "Acquisition",
    trigger: "Nouveau contact entrant (formulaire, email, LinkedIn)",
    actions: ["Score le lead sur 10 critères", "Enrichit le profil (LinkedIn, site web)", "Classe en A/B/C", "Notifie le commercial avec résumé"],
    tools: ["Make.com", "Apollo.io API", "GPT-4o", "Slack"],
    roi: "Économise 2-3h/jour de qualification manuelle",
    status: "Production",
  },
  {
    num: "02",
    name: "Agent Cold Email",
    emoji: "📧",
    category: "Acquisition",
    trigger: "Liste de prospects importée",
    actions: ["Génère un email personnalisé par prospect", "Adapte le ton selon le secteur", "Programme les séquences de follow-up", "Analyse les taux d'ouverture et ajuste"],
    tools: ["Instantly.ai", "GPT-4o", "Make.com", "Airtable"],
    roi: "+220% taux de réponse vs template générique",
    status: "Production",
  },
  {
    num: "03",
    name: "Agent Support Client",
    emoji: "💬",
    category: "Service",
    trigger: "Email ou message entrant client",
    actions: ["Lit et catégorise la demande", "Répond aux questions fréquentes", "Escalade les cas complexes", "Mémorise le contexte client"],
    tools: ["n8n", "GPT-4o", "Notion", "Gmail API"],
    roi: "Traite 80% des demandes sans intervention humaine",
    status: "Production",
  },
  {
    num: "04",
    name: "Agent Reporting Financier",
    emoji: "📊",
    category: "Finance",
    trigger: "Automatique chaque lundi à 8h",
    actions: ["Consolide les données de vente", "Calcule MRR, churn, CAC", "Génère un rapport PDF", "L'envoie au dirigeant par email"],
    tools: ["Make.com", "Google Sheets API", "GPT-4o", "Gmail"],
    roi: "3h/semaine économisées sur le reporting",
    status: "Production",
  },
  {
    num: "05",
    name: "Agent Onboarding Client",
    emoji: "🚀",
    category: "Ops",
    trigger: "Signature contrat (webhook CRM)",
    actions: ["Crée l'espace client Notion", "Envoie email de bienvenue personnalisé", "Planifie les appels de suivi", "Notifie l'équipe interne"],
    tools: ["Make.com", "Notion API", "Calendly", "Slack"],
    roi: "Onboarding de 2h réduit à 20 minutes",
    status: "Production",
  },
  {
    num: "06",
    name: "Agent Veille Concurrentielle",
    emoji: "🔍",
    category: "Stratégie",
    trigger: "Quotidien à 7h",
    actions: ["Scrape les sites concurrents", "Détecte les changements de prix/offres", "Synthétise les actualités secteur", "Résumé dans Slack"],
    tools: ["n8n", "Firecrawl", "GPT-4o", "Slack"],
    roi: "5h/semaine de veille manuelle automatisées",
    status: "Beta",
  },
  {
    num: "07",
    name: "Agent Relance Devis",
    emoji: "💼",
    category: "Sales",
    trigger: "Devis sans réponse depuis 48h",
    actions: ["Détecte les devis en attente", "Génère un message de relance personnalisé", "Adapte la tonalité selon le délai", "Log dans le CRM"],
    tools: ["HubSpot API", "GPT-4o", "Make.com", "Gmail"],
    roi: "+35% de devis signés grâce aux relances",
    status: "Production",
  },
  {
    num: "08",
    name: "Agent RH — Tri CV",
    emoji: "👥",
    category: "RH",
    trigger: "Nouveau CV reçu par email",
    actions: ["Analyse le CV contre la fiche de poste", "Attribue un score de compatibilité", "Génère un résumé pour le recruteur", "Planifie ou refuse automatiquement"],
    tools: ["Gmail API", "GPT-4o", "Airtable", "Calendly"],
    roi: "10 CV traités en 10 minutes au lieu de 3h",
    status: "Production",
  },
  {
    num: "09",
    name: "Agent Facturation",
    emoji: "🧾",
    category: "Finance",
    trigger: "Fin de mois ou jalon projet",
    actions: ["Récupère les données projet", "Génère la facture au format PDF", "L'envoie au client", "Met à jour la compta"],
    tools: ["Make.com", "Pennylane API", "GPT-4o", "Gmail"],
    roi: "Facturation mensuelle en 5 min au lieu de 2h",
    status: "Production",
  },
  {
    num: "10",
    name: "Agent Contenu LinkedIn",
    emoji: "✍️",
    category: "Marketing",
    trigger: "Lundi matin, hebdomadaire",
    actions: ["Analyse les tendances du secteur", "Génère 3 idées de posts", "Rédige les posts validés", "Programme la publication"],
    tools: ["n8n", "GPT-4o", "Buffer API", "Google Trends"],
    roi: "Présence LinkedIn constante sans y passer du temps",
    status: "Beta",
  },
];

const statusColors = {
  Production: "bg-green-100 text-green-800",
  Beta: "bg-yellow-100 text-yellow-800",
};

const categoryColors = {
  Acquisition: "text-blue-600",
  Service: "text-purple-600",
  Finance: "text-green-600",
  Ops: "text-orange-600",
  Sales: "text-red-600",
  Stratégie: "text-indigo-600",
  RH: "text-pink-600",
  Marketing: "text-teal-600",
};

const AgentsSection = () => {
  const [selected, setSelected] = useState(null);
  return (
    <div>
      <SectionHeader index="03" title="10 Agents IA" subtitle="Nos agents clés en main — déployables en 14 jours" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {AGENTS.map((agent) => (
          <div
            key={agent.num}
            onClick={() => setSelected(selected?.num === agent.num ? null : agent)}
            className={`border rounded-lg p-4 cursor-pointer transition-all ${selected?.num === agent.num ? "border-[#002FA7] bg-blue-50" : "border-gray-200 hover:border-[#002FA7]"}`}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">{agent.emoji}</span>
                <div>
                  <div className="text-xs font-bold text-gray-400">{agent.num}</div>
                  <div className="font-semibold text-gray-900 text-sm">{agent.name}</div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColors[agent.status]}`}>{agent.status}</span>
                <span className={`text-xs font-semibold ${categoryColors[agent.category] || "text-gray-600"}`}>{agent.category}</span>
              </div>
            </div>
            <div className="text-xs text-green-700 font-medium">{agent.roi}</div>

            {selected?.num === agent.num && (
              <div className="mt-4 border-t border-blue-100 pt-4">
                <div className="mb-3">
                  <div className="text-xs font-bold text-gray-500 uppercase mb-1">Déclencheur</div>
                  <div className="text-xs text-gray-700">{agent.trigger}</div>
                </div>
                <div className="mb-3">
                  <div className="text-xs font-bold text-gray-500 uppercase mb-1">Actions</div>
                  <ol className="space-y-1">
                    {agent.actions.map((action, i) => (
                      <li key={i} className="text-xs text-gray-700 flex gap-2">
                        <span className="text-[#002FA7] font-bold flex-shrink-0">{i + 1}.</span>
                        {action}
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase mb-1">Stack technique</div>
                  <div className="flex flex-wrap gap-1">
                    {agent.tools.map((tool, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-gray-50 border border-gray-200 p-4 rounded text-sm text-gray-600">
        <span className="font-semibold">Note :</span> Cliquez sur un agent pour voir les détails techniques. Les agents en statut "Beta" sont disponibles sur demande.
      </div>
    </div>
  );
};

export default AgentsSection;
