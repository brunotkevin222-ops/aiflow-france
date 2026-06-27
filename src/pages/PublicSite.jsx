import React, { useState } from "react";
import { Link } from "react-router-dom";
import LeadForm from "../components/LeadForm";

const PublicSite = () => {
  const [showForm, setShowForm] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="section-container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#002FA7] flex items-center justify-center text-white font-bold text-sm">A</div>
            <span className="font-semibold text-gray-900">AIFlow.fr</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#offres" className="nav-link">Offres</a>
            <a href="#agents" className="nav-link">10 Agents IA</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <Link to="/playbook" className="nav-link">Playbook ↗</Link>
          </div>
          <a href="https://calendly.com/brunotkevin222/30min" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
            Réserver un appel
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-16 bg-gray-50">
        <div className="section-container py-20">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-6">
              AGENCE IA · FRANCE · 2026
            </p>
            <h1 className="font-clash text-6xl md:text-8xl font-bold leading-none mb-4 text-gray-900">
              Automatisez.
            </h1>
            <h1 className="font-clash text-6xl md:text-8xl font-bold leading-none text-[#002FA7]">
              Dominez.
            </h1>
            <p className="mt-8 text-xl text-gray-600 max-w-2xl">
              Agents IA sur-mesure pour PME françaises. Prospection, support, RDV, relance — automatisés. 
              Vos concurrents courent encore. Vous, vous avez déjà gagné.
            </p>
            <div className="mt-10 flex gap-4">
              <a href="https://calendly.com/brunotkevin222/30min" target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
                Audit IA Gratuit →
              </a>
              <Link to="/playbook" className="px-8 py-4 border-2 border-gray-900 font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">
                Voir le Playbook
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-b border-gray-200">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "+220%", label: "Taux de réponse cold email" },
              { value: "73h", label: "Économisées par semaine/client" },
              { value: "8 jours", label: "Délai de mise en production" },
              { value: "€0", label: "Frais cachés" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-clash text-4xl font-bold text-[#002FA7]">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offres */}
      <section id="offres" className="py-20">
        <div className="section-container">
          <h2 className="font-clash text-4xl font-bold text-center mb-16">Nos Offres</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter", price: "890€/mois",
                desc: "1 agent IA + setup + support",
                features: ["Agent commercial ou support", "Setup en 5 jours", "Intégration CRM", "Support email 48h"]
              },
              {
                name: "Growth", price: "1 490€/mois",
                desc: "3 agents IA + automatisations",
                features: ["3 agents sur-mesure", "n8n/Make inclus", "Dashboard analytics", "Support prioritaire 24h"],
                featured: true
              },
              {
                name: "Scale", price: "2 990€/mois",
                desc: "Agence IA complète",
                features: ["10 agents illimités", "Équipe dédiée", "Stratégie croissance", "SLA garanti"]
              }
            ].map((offer, i) => (
              <div key={i} className={`p-8 border-2 ${offer.featured ? 'border-[#002FA7] bg-[#002FA7]/5' : 'border-gray-200'}`}>
                {offer.featured && <div className="text-xs font-bold text-[#002FA7] uppercase tracking-wider mb-4">⭐ Le plus populaire</div>}
                <h3 className="font-clash text-2xl font-bold">{offer.name}</h3>
                <div className="font-clash text-3xl font-bold text-[#002FA7] my-4">{offer.price}</div>
                <p className="text-gray-600 mb-6">{offer.desc}</p>
                <ul className="space-y-3 mb-8">
                  {offer.features.map((f, j) => <li key={j} className="flex gap-2 text-sm"><span className="text-[#002FA7]">✓</span>{f}</li>)}
                </ul>
                <button onClick={() => setShowForm(offer.name + " - " +offer.price)} className="w-full btn-primary text-center">
                  Démarrer →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="section-container text-center">
          <div className="font-clash text-2xl font-bold mb-4">AIFlow.fr</div>
          <p className="text-gray-400">Agence IA France 2026 — Automatisation des PME françaises</p>
        </div>
      </footer>

      {showForm && <LeadForm onClose={() => setShowForm(null)} source={showForm} />}
    </div>
  );
};

export default PublicSite;

