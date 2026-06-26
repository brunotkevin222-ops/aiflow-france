import React from "react";
import { SectionHeader, CopyBlock } from "../../pages/Playbook";

const PositioningSection = () => (
  <div>
    <SectionHeader index="01" title="Positionnement" subtitle="PME françaises 10-200 salariés — secteurs à forte main d'œuvre administrative" />

    <div className="mb-8">
      <h3 className="font-clash text-xl font-bold text-gray-900 mb-4">Notre niche cible</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-50 border border-[#002FA7] p-5 rounded">
          <div className="text-xs font-bold text-[#002FA7] uppercase tracking-wider mb-2">Secteurs prioritaires</div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2"><span className="text-[#002FA7] font-bold">→</span> Cabinets comptables & juridiques (10-50 personnes)</li>
            <li className="flex items-start gap-2"><span className="text-[#002FA7] font-bold">→</span> PME industrielles (gestion administrative)</li>
            <li className="flex items-start gap-2"><span className="text-[#002FA7] font-bold">→</span> Agences immobilières & promoteurs</li>
            <li className="flex items-start gap-2"><span className="text-[#002FA7] font-bold">→</span> Cliniques & cabinets médicaux (hors actes médicaux)</li>
            <li className="flex items-start gap-2"><span className="text-[#002FA7] font-bold">→</span> Distributeurs & grossistes B2B</li>
          </ul>
        </div>
        <div className="bg-gray-50 border border-gray-200 p-5 rounded">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Critères de qualification</div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> CA > 1M€/an</li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> Dirigeant ouvert à la technologie</li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> Processus répétitifs clairement identifiables</li>
            <li className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span> Budget IT/digital > 500€/mois déjà existant</li>
            <li className="flex items-start gap-2"><span className="text-red-500 font-bold">✗</span> Pas de contraintes légales bloquantes sur les données</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="font-clash text-xl font-bold text-gray-900 mb-4">ICP — Profil client idéal</h3>
      <div className="bg-gray-900 text-white p-6 rounded">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Qui</div>
            <div className="text-sm">Dirigeant ou DAF d'une PME de 20-100 salariés, débordé par les tâches administratives répétitives</div>
          </div>
          <div>
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Problème principal</div>
            <div className="text-sm">Perd 10-20h/semaine sur des tâches qui pourraient être automatisées (emails, reporting, saisies, relances)</div>
          </div>
          <div>
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Déclencheur d'achat</div>
            <div className="text-sm">Vient de rater une opportunité, vient de recruter un énième assistant, ou a vu un concurrent utiliser l'IA</div>
          </div>
        </div>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="font-clash text-xl font-bold text-gray-900 mb-4">Différenciation concurrentielle</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 border border-gray-200 rounded">
          <div className="text-sm font-bold text-gray-900 mb-2">Vs. Consultants IA généralistes</div>
          <div className="text-xs text-gray-600">Nous livrons des agents qui tournent, pas des slides. Délai : 14 jours, pas 3 mois.</div>
        </div>
        <div className="p-5 border border-gray-200 rounded">
          <div className="text-sm font-bold text-gray-900 mb-2">Vs. Logiciels SaaS</div>
          <div className="text-xs text-gray-600">Sur-mesure pour leurs processus spécifiques, pas une solution standard qui demande 6 mois d'adaptation.</div>
        </div>
        <div className="p-5 border border-gray-200 rounded">
          <div className="text-sm font-bold text-gray-900 mb-2">Vs. Freelances tech</div>
          <div className="text-xs text-gray-600">On assure le suivi, la maintenance et l'évolution. Pas un projet livré et abandonné.</div>
        </div>
      </div>
    </div>

    <CopyBlock
      title="Pitch 30 secondes"
      content={"AIFlow France automatise les 3 processus qui volent le plus de temps à vos équipes — en 14 jours. Pas de conseil, pas de slides : des agents IA opérationnels, livrés clés en main, avec suivi mensuel inclus."}
    />
  </div>
);

export default PositioningSection;
