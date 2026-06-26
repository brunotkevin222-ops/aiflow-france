import React, { useState } from "react";
import { SectionHeader, CopyBlock } from "../../pages/Playbook";

const SCRIPTS = [
  {
    id: "discovery",
    name: "Discovery Call (30 min)",
    description: "Premier appel après qualification. Objectif : comprendre le problème et poser le RDV démo.",
    script: [
      { speaker: "Vous", text: "Bonjour [Prénom], merci pour ce temps. Je vais commencer par quelques questions pour comprendre votre situation — ça prendra 10 minutes, puis on verra ensemble si on peut vous aider. Ça vous va ?" },
      { speaker: "Transition", text: "[Attendez leur accord]" },
      { speaker: "Vous", text: "Parlez-moi de votre équipe. Combien de personnes, et quel est leur quotidien en termes de tâches administratives ou répétitives ?" },
      { speaker: "Vous", text: "Si vous estimez le temps perdu sur ces tâches par semaine, vous êtes à combien d'heures ?" },
      { speaker: "Vous", text: "Est-ce que vous avez déjà essayé de résoudre ça — que ce soit avec un outil, un recrutement, autre chose ?" },
      { speaker: "Vous", text: "Et si ce problème était réglé, qu'est-ce que ça changerait concrètement pour vous et votre équipe ?" },
      { speaker: "Vous", text: "OK, voilà ce qu'on fait : on automatise ces processus avec des agents IA en 14 jours. Pour [leur exemple], on ferait typiquement [solution]. Est-ce que ça correspond à ce que vous cherchez ?" },
      { speaker: "Closing", text: "Je vous propose qu'on fasse une démo de 45 minutes avec votre équipe cette semaine. Vous êtes disponible mardi ou jeudi ?" },
    ],
  },
  {
    id: "objections",
    name: "Gestion des objections",
    description: "Les 6 objections les plus fréquentes et comment y répondre.",
    objections: [
      {
        objection: "C'est trop cher.",
        reponse: "Je comprends. Dites-moi — combien ça vous coûte actuellement de traiter [processus] manuellement ? Si votre équipe y passe 5h/semaine à 40€/h, ça fait 800€/mois. Notre solution coûte 490€/mois. La question, c'est pas le coût, c'est le ROI.",
      },
      {
        objection: "On n'est pas prêts techniquement.",
        reponse: "C'est exactement pour ça qu'on existe. Vous n'avez pas besoin d'être tech — on gère tout, de A à Z. Notre client [secteur similaire] avait la même inquiétude. Aujourd'hui leur agent tourne depuis 3 mois sans qu'ils y touchent.",
      },
      {
        objection: "On a déjà essayé des outils IA, ça n'a pas marché.",
        reponse: "Je vous entends. La différence avec nous : on ne vous vend pas un logiciel à configurer vous-même. On construit l'agent pour vous, on le teste, on le déploie. Et on garantit le résultat — si ça ne fonctionne pas en 30 jours, on rembourse.",
      },
      {
        objection: "Il faut que j'en parle à mon associé.",
        reponse: "Bien sûr. Est-ce qu'on peut faire une call ensemble tous les trois ? Comme ça, je réponds directement à ses questions. Je suis disponible cette semaine.",
      },
      {
        objection: "On va attendre la fin du trimestre.",
        reponse: "Je comprends. Juste pour que je comprenne : c'est une question de budget, ou c'est que le problème n'est pas urgent pour vous en ce moment ? [Selon la réponse, adapter la suite]",
      },
      {
        objection: "On peut le faire en interne.",
        reponse: "Vous pouvez, oui. Combien de temps ça prendrait à votre équipe de construire ça ? Et à quel coût ? Nos clients ont souvent essayé avant de venir nous voir — et nous confient que ça leur a coûté 3-4x plus cher qu'un abonnement avec nous.",
      },
    ],
  },
  {
    id: "closing",
    name: "Script de closing",
    description: "Pour conclure après la démo. Structurer la décision.",
    script: [
      { speaker: "Vous", text: "Alors, sur ce qu'on a vu ensemble — est-ce que c'est le type de solution qui correspond à ce que vous cherchez ?" },
      { speaker: "Transition", text: "[Attendez une réponse. Si oui, continuez. Si hésitation, retournez aux objections.]" },
      { speaker: "Vous", text: "Parfait. Voilà comment on procède : on démarre par l'offre Starter à 1490€ de setup, 490€/mois ensuite. On configure votre premier agent cette semaine. En 14 jours, vous voyez le premier résultat." },
      { speaker: "Vous", text: "Pour lancer, j'ai besoin de deux choses de votre part : un accès à votre boîte email / CRM, et une heure la semaine prochaine pour l'onboarding. Vous pouvez faire ça ?" },
      { speaker: "Vous", text: "Je vous envoie le contrat par email dans l'heure. La signature prend 5 minutes sur DocuSign. On démarre dès réception." },
    ],
  },
];

const ScriptsSection = () => {
  const [active, setActive] = useState("discovery");
  const s = SCRIPTS.find(s => s.id === active);

  return (
    <div>
      <SectionHeader index="05" title="Scripts de vente" subtitle="Scripts testés et optimisés pour le marché français PME" />

      <div className="flex gap-2 mb-6 flex-wrap">
        {SCRIPTS.map(s => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
              active === s.id ? "bg-[#002FA7] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {s.name}
          </button>
        ))}
      </div>

      {s && (
        <div className="mb-8">
          <p className="text-sm text-gray-500 mb-6">{s.description}</p>

          {s.script && (
            <div className="space-y-3">
              {s.script.map((line, i) => (
                <div key={i} className={`p-4 rounded-lg ${
                  line.speaker === "Transition" ? "bg-yellow-50 border border-yellow-200" :
                  line.speaker === "Closing" ? "bg-green-50 border border-green-200" :
                  "bg-gray-50 border border-gray-200"
                }`}>
                  <div className={`text-xs font-bold mb-1 ${
                    line.speaker === "Transition" ? "text-yellow-700" :
                    line.speaker === "Closing" ? "text-green-700" :
                    "text-[#002FA7]"
                  }`}>{line.speaker}</div>
                  <div className="text-sm text-gray-800 italic">"{line.text}"</div>
                </div>
              ))}
            </div>
          )}

          {s.objections && (
            <div className="space-y-4">
              {s.objections.map((obj, i) => (
                <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-red-50 border-b border-red-100 px-4 py-3">
                    <div className="text-xs font-bold text-red-700 mb-1">Objection</div>
                    <div className="text-sm font-semibold text-gray-900">"{obj.objection}"</div>
                  </div>
                  <div className="bg-green-50 px-4 py-3">
                    <div className="text-xs font-bold text-green-700 mb-1">Réponse</div>
                    <div className="text-sm text-gray-800">{obj.reponse}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <CopyBlock
        title="Email de suivi post-démo (template)"
        content={"Objet : Suite à notre échange — AIFlow France\n\nBonjour [Prénom],\n\nMerci pour notre appel. Comme convenu, voici le récapitulatif :\n\n→ Problème identifié : [résumer en 1-2 phrases]\n→ Solution proposée : [offre + agent(s) concernés]\n→ Résultat attendu : [ROI concret]\n→ Investissement : [prix]\n\nProchaine étape : j'envoie le contrat dès votre accord. On peut démarrer cette semaine.\n\nCordialement,\n[Votre prénom]\nAIFlow France"}
      />
    </div>
  );
};

export default ScriptsSection;
