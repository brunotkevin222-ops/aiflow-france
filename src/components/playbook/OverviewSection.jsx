import React from "react";
import { SectionHeader } from "../../pages/Playbook";

const OverviewSection = () => (
  <div>
    <SectionHeader index="00" title="Vue d'ensemble AIFlow" subtitle="Agence IA pour PME françaises · Objectif : 10K€/mois en 90 jours" />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-[#002FA7] text-white p-6 rounded">
        <div className="text-3xl font-bold mb-1">10K€</div>
        <div className="text-sm opacity-80">Objectif mensuel J+90</div>
      </div>
      <div className="bg-gray-900 text-white p-6 rounded">
        <div className="text-3xl font-bold mb-1">10</div>
        <div className="text-sm opacity-80">Agents IA déployés</div>
      </div>
      <div className="border border-gray-200 p-6 rounded">
        <div className="text-3xl font-bold mb-1 text-[#002FA7]">14j</div>
        <div className="text-sm text-gray-500">Délai de mise en service</div>
      </div>
    </div>

    <div className="mb-8">
      <h3 className="font-clash text-xl font-bold text-gray-900 mb-3">Qui sommes-nous ?</h3>
      <p className="text-gray-600 leading-relaxed mb-4">AIFlow France est une agence spécialisée dans le déploiement d'agents IA opérationnels pour les PME françaises ambitieuses. Nous ne vendons pas du conseil — nous livrons des systèmes qui travaillent à votre place, 24h/24, sans charge sociale.</p>
      <p className="text-gray-600 leading-relaxed">Notre modèle : identifier les 3 processus qui vous coûtent le plus cher en temps humain, les automatiser avec des agents IA sur-mesure, et vous remettre les clés en 14 jours ouvrés.</p>
    </div>

    <div className="bg-gray-50 border border-gray-200 p-6 rounded mb-8">
      <h3 className="font-clash text-xl font-bold text-gray-900 mb-3">Pourquoi ce Playbook ?</h3>
      <p className="text-gray-600 leading-relaxed mb-3">Ce playbook est le document opérationnel interne d'AIFlow France. Il contient tout ce dont vous avez besoin pour comprendre notre positionnement, nos offres, nos agents IA, notre stratégie d'acquisition et notre plan financier.</p>
      <p className="text-gray-600 leading-relaxed">Chaque section est actionnable. Pas de théorie creuse — uniquement des éléments testés et validés sur le marché français.</p>
    </div>

    <div className="border-t border-gray-200 pt-6">
      <h3 className="font-clash text-xl font-bold text-gray-900 mb-4">Modèle économique cible</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center"><div className="text-2xl font-bold text-gray-900">2-3</div><div className="text-xs text-gray-500 mt-1">Clients actifs mois 1</div></div>
        <div className="text-center"><div className="text-2xl font-bold text-gray-900">3500€</div><div className="text-xs text-gray-500 mt-1">Panier moyen mensuel</div></div>
        <div className="text-center"><div className="text-2xl font-bold text-gray-900">70%</div><div className="text-xs text-gray-500 mt-1">Marge brute cible</div></div>
        <div className="text-center"><div className="text-2xl font-bold text-gray-900">J+90</div><div className="text-xs text-gray-500 mt-1">Point mort estimé</div></div>
      </div>
    </div>
  </div>
);

export default OverviewSection;
