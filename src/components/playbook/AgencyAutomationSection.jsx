import React from "react";
import { SectionHeader } from "../../pages/Playbook";

const INTERNAL_AUTOMATIONS = [
  {
    area: "Onboarding Clients",
    icon: "🚀",
    current: "2 heures de configuration manuelle par client",
    automated: "20 minutes — agent déclenché à la signature",
    agent: "Agent Onboarding Client",
    steps: [
      "Webhook DocuSign → Make.com",
      "Crée espace Notion client avec template pré-rempli",
      "Envoie email de bienvenue personnalisé",
      "Crée deal HubSpot avec pipeline client",
      "Planifie appel de kickoff via Calendly",
      "Notifie l'équipe dans Slack",
    ],
    savings: "~6h/semaine avec 3 clients/semaine",
  },
  {
    area: "Reporting & Facturation",
    icon: "📊",
    current: "3-4 heures par mois de reporting manuel",
    automated: "Entièrement automatisé — livré le 1er du mois",
    agent: "Agent Reporting Financier + Agent Facturation",
    steps: [
      "Le 1er du mois à 7h : Make.com démarre",
      "Récupère données Airtable (clients, heures, résultats)",
      "GPT-4o génère rapport PDF personnalisé par client",
      "Pennylane génère et envoie les factures",
      "Résumé financier envoyé au dirigeant",
      "Archive tout dans Notion",
    ],
    savings: "~4h/mois épargnées",
  },
  {
    area: "Suivi Prospects & Relances",
    icon: "💼",
    current: "Relances manuelles oubliées, deals qui meurent",
    automated: "Pipeline auto-géré — 0 deal oublié",
    agent: "Agent Relance Devis",
    steps: [
      "HubSpot détecte deal sans activité depuis 48h",
      "GPT-4o génère message de relance personnalisé",
      "Email envoyé automatiquement",
      "Si réponse → notifie commercial",
      "Si pas de réponse J+7 → dernier message breakup",
      "Deal archivé ou rouvert selon réponse",
    ],
    savings: "+35% deals fermés grâce aux relances auto",
  },
  {
    area: "Content Marketing",
    icon: "✍️",
    current: "0 contenu publié (manque de temps)",
    automated: "3 posts LinkedIn/semaine + 2 articles/mois",
    agent: "Agent Contenu LinkedIn",
    steps: [
      "Lundi 7h : agent analyse tendances (Google Trends + LinkedIn)",
      "GPT-4o génère 3 idées de posts",
      "Sélection automatique du meilleur (score d'engagement estimé)",
      "Posts programmés dans Buffer",
      "Vendredi : rapport performance de la semaine",
    ],
    savings: "5h/semaine → 0h (présence continue)",
  },
  {
    area: "Veille & Intelligence",
    icon: "🔍",
    current: "Pas de veille — décisions sans data",
    automated: "Brief quotidien à 8h dans Slack",
    agent: "Agent Veille Concurrentielle",
    steps: [
      "Chaque matin à 7h : scrape 5 sites concurrents + actualités secteur",
      "GPT-4o détecte changements (prix, offres, messages)",
      "Synthèse en 5 points clés",
      "Envoyé dans le canal #veille de Slack",
      "Alertes urgentes si changement de prix concurrent",
    ],
    savings: "5h/semaine → 5 minutes (lecture du brief)",
  },
  {
    area: "Support & Communication",
    icon: "💬",
    current: "Emails entrants non triés, réponses en retard",
    automated: "80% des emails répondus automatiquement",
    agent: "Agent Support Client",
    steps: [
      "Email reçu → Gmail API → Make.com",
      "Classification : urgent / demande info / demande technique / autre",
      "Urgents → notification Slack immédiate",
      "Infos simples → réponse auto GPT-4o",
      "Techniques → ticket Notion créé + assigné",
      "Satisfaction trackée : lien de retour dans chaque réponse auto",
    ],
    savings: "2-3h/jour → 30 min de supervision",
  },
];

const AgencyAutomationSection = () => (
  <div>
    <SectionHeader index="10" title="Auto. Agence" subtitle="Automatiser la gestion interne d'AIFlow France — dogfooding total" />

    <div className="bg-blue-50 border border-[#002FA7] p-4 rounded mb-8">
      <p className="text-sm text-[#002FA7] font-semibold">
        Principe : on utilise nous-mêmes tous les agents qu'on déploie pour nos clients. C'est notre meilleur argument de vente — et notre meilleur outil de test.
      </p>
    </div>

    <div className="space-y-6">
      {INTERNAL_AUTOMATIONS.map((auto) => (
        <div key={auto.area} className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{auto.icon}</span>
              <div>
                <h3 className="font-semibold text-gray-900">{auto.area}</h3>
                <div className="text-xs text-green-600 font-medium mt-0.5">{auto.savings}</div>
              </div>
            </div>
            <div className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded flex-shrink-0 ml-2">{auto.agent}</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="p-4">
              <div className="text-xs font-bold text-red-500 mb-2">Avant (manuel)</div>
              <div className="text-sm text-gray-600">{auto.current}</div>
            </div>
            <div className="p-4">
              <div className="text-xs font-bold text-green-600 mb-2">Après (automatisé)</div>
              <div className="text-sm text-gray-800 font-medium">{auto.automated}</div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 border-t border-gray-100">
            <div className="text-xs font-bold text-gray-500 uppercase mb-2">Flux technique</div>
            <div className="flex flex-wrap gap-1">
              {auto.steps.map((step, i) => (
                <span key={i} className="text-xs bg-white border border-gray-200 text-gray-600 px-2 py-1 rounded">
                  {i + 1}. {step}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-8 bg-gray-900 text-white p-6 rounded-lg">
      <h3 className="font-clash text-lg font-bold mb-4">Résultat : temps libéré pour la croissance</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-[#002FA7]">25h+</div>
          <div className="text-xs text-gray-400 mt-1">Économisées par semaine</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-[#002FA7]">6</div>
          <div className="text-xs text-gray-400 mt-1">Processus automatisés</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-[#002FA7]">~200€</div>
          <div className="text-xs text-gray-400 mt-1">Coût mensuel total</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-[#002FA7]">100%</div>
          <div className="text-xs text-gray-400 mt-1">Dogfooding de nos agents</div>
        </div>
      </div>
    </div>
  </div>
);

export default AgencyAutomationSection;
