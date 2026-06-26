import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const LeadForm = ({ onClose, source = "website" }) => {
  const [form, setForm] = useState({ name: "", email: "", company: "", sector: "" });
  const [status, setStatus] = useState("idle");

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
try {
        await emailjs.send(
                  "service_90ed2de",
                  "uz3egkd",
          {
                      from_name: form.name,
                      from_email: form.email,
                      company: form.company,
                      plan: source,
          },
                  "TecTNcsFNCrZxOZoK"
                );
        setStatus("success");
} catch (err) {
        console.error(err);
        setStatus("error");
}
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-clash text-2xl font-bold">Audit IA Gratuit</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-900 text-2xl">×</button>
        </div>
        {status === "success" ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">✅</div>
            <p className="font-semibold text-lg">Merci !</p>
            <p className="text-gray-600 mt-2">On vous recontacte sous 24h.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <input type="text" placeholder="Votre nom" required value={form.name}
              onChange={e => setForm({...form, name: e.target.value})}
              className="w-full border border-gray-300 p-3 focus:outline-none focus:border-[#002FA7]" />
            <input type="email" placeholder="Email professionnel" required value={form.email}
              onChange={e => setForm({...form, email: e.target.value})}
              className="w-full border border-gray-300 p-3 focus:outline-none focus:border-[#002FA7]" />
            <input type="text" placeholder="Entreprise" value={form.company}
              onChange={e => setForm({...form, company: e.target.value})}
              className="w-full border border-gray-300 p-3 focus:outline-none focus:border-[#002FA7]" />
            <button type="submit" disabled={status === "loading"}
              className="w-full btn-primary py-4 text-base">
              {status === "loading" ? "Envoi..." : "Réserver mon audit gratuit →"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LeadForm;
