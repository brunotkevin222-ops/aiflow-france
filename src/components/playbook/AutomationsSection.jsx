import React from "react";
import { SectionHeader } from "../../pages/Playbook";

const STACK = [
  {
    category: "Orchestration",
    color: "bg-blue-600",
    tools: [
      { name: "Make.com", role: "Automatisations visuelles, intégrations SaaS", use: "80% de nos automations", cost: "29€/mois" },
      { name: "n8n (self-hosted)", role: "Flux complexes, données sensibles", use: "20% — cas avancés", cost: "~15€/mois serveur" },
    ],
  },
  {
    category: "Intelligence IA",
    color: "bg-purple-600",
    tools: [
      { name: "GPT-4o (OpenAI)", role: "Génération texte, analyse, classification", use: "Principal LLM", cost: "~50-150€/mois selon volume" },
      { name: "Claude 3.5 Sonnet", role: "Tâches longues, analyse documents", use: "Backup + cas spéciaux", cost: "~30-80€/mois" },
      { name: "Whisper API", role: "Transcription audio/vidéo", use: "Comptes-rendus réunions", cost: "~0.006$/min" },
    ],
  },
  {
    category: "Données & CRM",
    color: "bg-green-600",
    tools: [
      { name: "Airtable", role: "Base de données flexible, interface opérationnelle", use: "CRM léger + suivi agents", cost: "20€/mois" },
      { name: "HubSpot (Free)", role: "CRM commercial, pipeline deals", use: "Suivi prospects et clients", cost: "Gratuit" },
      { name: "Notion", role: "Documentation, espaces clients", use: "Base de connaissances", cost: "16€/mois" },
    ],
  },
  {
    category: "Communication",
    color: "bg-orange-600",
    tools: [
      { name: "Gmail API", role: "Envoi et lecture d'emails automatisés", use: "Agents email", cost: "Gratuit" },
      { name: "Slack", role: "Notifications internes agents", use: "Alertes et résumés", cost: "8€/mois" },
      { name: "Instantly.ai", role: "Cold email à grande échelle", use: "Campagnes acquisition", cost: "37€/mois" },
    ],
  },
  {
    category: "Enrichissement & Scraping",
    color: "bg-red-600",
    tools: [
      { name: "Apollo.io", role: "Prospection B2B, enrichissement leads", use: "Base prospects", cost: "49€/mois" },
      { name: "Firecrawl", role: "Scraping web structuré pour IA", use: "Veille, enrichissement", cost: "16€/mois" },
      { name: "Clay", role: "Enrichissement data avancé + IA", use: "Séquences outreach", cost: "149€/mois (optionnel)" },
    ],
  },
];

const AUTOMATIONS = [
  {
    name: "Séquence Onboarding Client",
    trigger: "Signature contrat",
    steps: ["Webhook CRM → Make → Créer espace Notion → Envoyer email bienvenue → Créer deal HubSpot → Notifier Slack"],
    duration: "2 minutes au lieu de 2 heures",
    complexity: "Facile",
  },
  {
    name: "Pipeline Cold Email Automatisé",
    trigger: "Import liste prospects",
    steps: ["Airtable → GPT-4o génère email → Instantly envoie → Réponse détectée → Lead qualifié → HubSpot → Notification commercial"],
    duration: "100 emails traités en 10 minutes",
    complexity: "Moyen",
  },
  {
    name: "Reporting Hebdomadaire Auto",
    trigger: "Lundi 8h (cron)",
    steps: ["Récupère données Airtable/HubSpot → GPT-4o analyse tendances → Génère PDF → Envoie par email → Archive dans Notion"],
    duration: "3h → 5 minutes",
    complexity: "Moyen",
  },
  {
    name: "Tri et réponse emails entrants",
    trigger: "Email reçu",
    steps: ["Gmail API → Classifie (urgent/normal/spam) → GPT-4o rédige réponse → Si complexe → flag humain → Sinon → envoie auto"],
    duration: "80% des emails traités sans humain",
    complexity: "Avancé",
  },
];

const complexityColors = { "Facile": "text-green-600 bg-green-50", "Moyen": "text-yellow-700 bg-yellow-50", "Avancé": "text-red-600 bg-red-50" };

const AutomationsSection = () => (
  <div>
    <SectionHeader index="06" title="Automatisations" subtitle="Stack technique et architectures d'agents déployés chez nos clients" />

    <div className="mb-10">
      <h3 className="font-clash text-xl font-bold text-gray-900 mb-4">Stack technique AIFlow</h3>
      <div className="space-y-6">
        {STACK.map((cat) => (
          <div key={cat.category}>
            <div className={`inline-flex items-center gap-2 ${cat.color} text-white text-xs font-bold px-3 py-1 rounded-full mb-3`}>
              {cat.category}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {cat.tools.map((tool) => (
                <div key={tool.name} className="border border-gray-100 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-semibold text-gray-900 text-sm">{tool.name}</div>
                    <div className="text-xs text-gray-500 flex-shrink-0 ml-2">{tool.cost}</div>
                  </div>
                  <div className="text-xs text-gray-600 mb-1">{tool.role}</div>
                  <div className="text-xs text-[#002FA7] font-medium">{tool.use}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div>
      <h3 className="font-clash text-xl font-bold text-gray-900 mb-4">Automations clés déployées</h3>
      <div className="space-y-4">
        {AUTOMATIONS.map((auto) => (
          <div key={auto.name} className="border border-gray-200 rounded-lg p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="font-semibold text-gray-900">{auto.name}</div>
                <div className="text-xs text-gray-500 mt-1">Déclencheur : {auto.trigger}</div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className={`text-xs px-2 py-0.5 rounded font-medium ${complexityColors[auto.complexity]}`}>{auto.complexity}</span>
                <span className="text-xs text-green-600 font-medium text-right">{auto.duration}</span>
              </div>
            </div>
            <div className="bg-gray-50 rounded p-3 font-mono text-xs text-gray-700 leading-relaxed">
              {auto.steps[0]}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AutomationsSection;
