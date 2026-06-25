import React from "react";
import { SectionHeader } from "../../pages/Playbook";

const OverviewSection = () => (
  <div>
    <SectionHeader index="00 · Vue d'ensemble" title="Vue d'ensemble AIFlow" subtitle="Agence IA pour PME françaises. Objectif : 10K€/mois en 90 jours." />
    <div className="p-8 bg-gray-50 border border-gray-200 text-center text-gray-500">
      <p className="text-lg font-semibold text-gray-700">Vue d'ensemble AIFlow</p>
      <p className="mt-2">Agence IA pour PME françaises. Objectif : 10K€/mois en 90 jours.</p>
    </div>
  </div>
);

export default OverviewSection;
