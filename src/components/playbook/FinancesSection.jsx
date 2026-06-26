import React from "react";
import { SectionHeader } from "../../pages/Playbook";

const PROJECTIONS = [
  { month: "Mois 1", clients: 2, mrr: 1480, cogs: 380, gross: 1100, expenses: 800, net: 300, note: "Phase démarrage" },
  { month: "Mois 2", clients: 5, mrr: 4450, cogs: 700, gross: 3750, expenses: 1100, net: 2650, note: "Croissance rapide" },
  { month: "Mois 3", clients: 9, mrr: 9450, cogs: 1200, gross: 8250, expenses: 1500, net: 6750, note: "Objectif atteint" },
  { month: "Mois 6", clients: 15, mrr: 18750, cogs: 1800, gross: 16950, expenses: 3500, net: 13450, note: "Scale" },
];

const FIXED_COSTS = [
  { item: "Make.com Pro", cost: 29, type: "Mensuel" },
  { item: "Airtable Pro", cost: 20, type: "Mensuel" },
  { item: "Instantly.ai", cost: 37, type: "Mensuel" },
  { item: "Apollo.io Basic", cost: 49, type: "Mensuel" },
  { item: "HubSpot Starter", cost: 15, type: "Mensuel" },
  { item: "Notion Team", cost: 16, type: "Mensuel" },
  { item: "Slack", cost: 8, type: "Mensuel" },
  { item: "Firecrawl", cost: 16, type: "Mensuel" },
  { item: "Hébergement n8n (VPS)", cost: 15, type: "Mensuel" },
];

const VAR_COSTS = [
  { item: "OpenAI API (GPT-4o)", cost: "~50-150€", base: "selon volume", type: "Variable" },
  { item: "Claude API", cost: "~30-80€", base: "selon volume", type: "Variable" },
  { item: "Freelance ops (déploiements)", cost: "~300-500€", base: "par client onboardé", type: "Variable" },
];

const METRICS = [
  { name: "ARR cible M+12", value: "180K€", desc: "15 clients × 1 250€/mois moyen" },
  { name: "Marge brute cible", value: "72%", desc: "Après COGS (API + outils)" },
  { name: "CAC estimé", value: "150-300€", desc: "Coût par client acquis (email + temps)" },
  { name: "LTV estimée", value: "18 000€", desc: "12 mois × 1 500€ moyen" },
  { name: "LTV/CAC ratio", value: "60-120x", desc: "Excellent (cible : >3)" },
  { name: "Churn cible", value: "< 5%/mois", desc: "Grâce au ROI démontré chaque mois" },
];

const FinancesSection = () => (
  <div>
    <SectionHeader index="09" title="Finances" subtitle="Projections MRR, coûts, marges et métriques SaaS clés" />

    <div className="mb-10">
      <h3 className="font-clash text-xl font-bold text-gray-900 mb-4">Projections MRR — 6 mois</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-900 text-white">
              <th className="text-left py-3 px-4 font-semibold">Mois</th>
              <th className="text-right py-3 px-4 font-semibold">Clients</th>
              <th className="text-right py-3 px-4 font-semibold">MRR</th>
              <th className="text-right py-3 px-4 font-semibold">COGS</th>
              <th className="text-right py-3 px-4 font-semibold">Marge brute</th>
              <th className="text-right py-3 px-4 font-semibold">Charges fixes</th>
              <th className="text-right py-3 px-4 font-semibold">Résultat net</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-400">Note</th>
            </tr>
          </thead>
          <tbody>
            {PROJECTIONS.map((row, i) => (
              <tr key={i} className={`border-b border-gray-100 ${i === 2 ? "bg-blue-50 font-semibold" : "hover:bg-gray-50"}`}>
                <td className="py-3 px-4 font-medium">{row.month}</td>
                <td className="py-3 px-4 text-right">{row.clients}</td>
                <td className="py-3 px-4 text-right font-bold text-gray-900">{row.mrr.toLocaleString()}€</td>
                <td className="py-3 px-4 text-right text-red-600">-{row.cogs}€</td>
                <td className="py-3 px-4 text-right text-green-600">{row.gross.toLocaleString()}€</td>
                <td className="py-3 px-4 text-right text-orange-600">-{row.expenses}€</td>
                <td className={`py-3 px-4 text-right font-bold ${row.net > 0 ? "text-green-600" : "text-red-600"}`}>{row.net > 0 ? "+" : ""}{row.net.toLocaleString()}€</td>
                <td className="py-3 px-4 text-xs text-gray-500">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-2 text-xs text-gray-500">* COGS = API IA + outils proportionnels aux clients</div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
      <div>
        <h3 className="font-clash text-xl font-bold text-gray-900 mb-4">Coûts fixes mensuels</h3>
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          {FIXED_COSTS.map((c, i) => (
            <div key={i} className="flex justify-between items-center px-4 py-2.5 border-b border-gray-100 last:border-0 text-sm">
              <span className="text-gray-700">{c.item}</span>
              <span className="font-semibold text-gray-900">{c.cost}€/mois</span>
            </div>
          ))}
          <div className="flex justify-between items-center px-4 py-3 bg-gray-50 text-sm font-bold">
            <span>Total charges fixes</span>
            <span className="text-[#002FA7]">{FIXED_COSTS.reduce((a, c) => a + c.cost, 0)}€/mois</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-clash text-xl font-bold text-gray-900 mb-4">Coûts variables</h3>
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          {VAR_COSTS.map((c, i) => (
            <div key={i} className="px-4 py-3 border-b border-gray-100 last:border-0">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700">{c.item}</span>
                <span className="text-sm font-bold text-orange-600">{c.cost}</span>
              </div>
              <div className="text-xs text-gray-500">{c.base}</div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <h3 className="font-clash text-lg font-bold text-gray-900 mb-3">Métriques SaaS clés</h3>
          <div className="space-y-2">
            {METRICS.map((m, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <div>
                  <div className="text-xs font-semibold text-gray-700">{m.name}</div>
                  <div className="text-xs text-gray-500">{m.desc}</div>
                </div>
                <div className="text-lg font-bold text-[#002FA7] flex-shrink-0 ml-3">{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FinancesSection;
