import React, { useState } from "react";
import { Link } from "react-router-dom";
import OverviewSection from "../components/playbook/OverviewSection";
import PositioningSection from "../components/playbook/PositioningSection";
import OffersSection from "../components/playbook/OffersSection";
import AgentsSection from "../components/playbook/AgentsSection";
import AcquisitionSection from "../components/playbook/AcquisitionSection";
import ScriptsSection from "../components/playbook/ScriptsSection";
import AutomationsSection from "../components/playbook/AutomationsSection";
import WebsiteSection from "../components/playbook/WebsiteSection";
import PlanSection from "../components/playbook/PlanSection";
import FinancesSection from "../components/playbook/FinancesSection";
import AgencyAutomationSection from "../components/playbook/AgencyAutomationSection";

const SECTIONS = [
  { id: "overview", label: "00 · Vue d'ensemble", component: OverviewSection },
  { id: "positioning", label: "01 · Positionnement", component: PositioningSection },
  { id: "offers", label: "02 · Offres", component: OffersSection },
  { id: "agents", label: "03 · 10 Agents IA", component: AgentsSection },
  { id: "acquisition", label: "04 · Acquisition", component: AcquisitionSection },
  { id: "scripts", label: "05 · Scripts de vente", component: ScriptsSection },
  { id: "automations", label: "06 · Automatisations", component: AutomationsSection },
  { id: "website", label: "07 · Site web", component: WebsiteSection },
  { id: "plan", label: "08 · Plan 90 jours", component: PlanSection },
  { id: "finances", label: "09 · Finances", component: FinancesSection },
  { id: "agency-automation", label: "10 · Auto. Agence", component: AgencyAutomationSection },
];

export const SectionHeader = ({ index, title, subtitle }) => (
  <div className="mb-8 pb-6 border-b border-gray-200">
    <div className="text-xs font-semibold tracking-widest text-[#002FA7] uppercase mb-2">{index}</div>
    <h2 className="font-clash text-3xl font-bold text-gray-900">{title}</h2>
    {subtitle && <p className="text-gray-500 mt-2">{subtitle}</p>}
  </div>
);

export const CopyBlock = ({ title, content }) => {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(content); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="bg-gray-50 border border-gray-200 p-4 rounded">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-gray-700">{title}</span>
        <button onClick={copy} className="text-xs text-[#002FA7] hover:underline">
          {copied ? "Copié !" : "Copier"}
        </button>
      </div>
      <pre className="text-sm text-gray-800 whitespace-pre-wrap font-mono">{content}</pre>
    </div>
  );
};

const Playbook = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const ActiveComponent = SECTIONS.find(s => s.id === activeSection)?.component;

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 flex-shrink-0 sticky top-0 h-screen overflow-y-auto">
        <div className="p-4 border-b border-gray-200">
          <Link to="/" className="text-xs text-gray-500 hover:text-gray-900">← Site public</Link>
          <div className="font-clash text-lg font-bold mt-1">Playbook AIFlow</div>
        </div>
        <nav className="p-2">
          {SECTIONS.map(s => (
            <button key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={`w-full text-left px-3 py-2 text-sm rounded transition-colors ${activeSection === s.id ? 'bg-[#002FA7] text-white font-semibold' : 'text-gray-700 hover:bg-gray-100'}`}>
              {s.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8 overflow-auto max-h-screen">
        {ActiveComponent && <ActiveComponent />}
      </main>
    </div>
  );
};

export default Playbook;
