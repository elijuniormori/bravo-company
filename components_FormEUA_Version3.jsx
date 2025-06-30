"use client";
import { useState } from "react";

export default function FormEUA() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    dataNascimento: "",
    motivo: "",
    passaporte: "",
    outros: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const next = () => setStep((s) => s + 1);
  const prev = () => setStep((s) => s - 1);

  // Mensagem para análise (pode ser ajustada conforme campos)
  const mensagem = encodeURIComponent(
    `Formulário EUA:\nNome: ${form.nome}\nEmail: ${form.email}\nTelefone: ${form.telefone}\nData de Nascimento: ${form.dataNascimento}\nMotivo da viagem: ${form.motivo}\nPassaporte: ${form.passaporte}\nOutros: ${form.outros}`
  );

  const WHATSAPP = "351927811070";

  const steps = [
    <>
      <label className="font-semibold">Nome completo</label>
      <input name="nome" className="w-full border rounded px-4 py-2 mb-3" value={form.nome} onChange={handleChange} required autoFocus />
      <label className="font-semibold">Email</label>
      <input name="email" className="w-full border rounded px-4 py-2 mb-3" value={form.email} onChange={handleChange} required />
      <label className="font-semibold">Telefone</label>
      <input name="telefone" className="w-full border rounded px-4 py-2 mb-3" value={form.telefone} onChange={handleChange} required />
    </>,
    <>
      <label className="font-semibold">Data de nascimento</label>
      <input type="date" name="dataNascimento" className="w-full border rounded px-4 py-2 mb-3" value={form.dataNascimento} onChange={handleChange} required />
      <label className="font-semibold">Motivo da viagem</label>
      <select name="motivo" className="w-full border rounded px-4 py-2 mb-3" value={form.motivo} onChange={handleChange} required>
        <option value="">Selecione</option>
        <option>Turismo</option>
        <option>Trabalho - H-2A</option>
        <option>Trabalho - H-2B</option>
        <option>Estudo</option>
        <option>Outro</option>
      </select>
      <label className="font-semibold">Número do passaporte</label>
      <input name="passaporte" className="w-full border rounded px-4 py-2 mb-3" value={form.passaporte} onChange={handleChange} required />
    </>,
    <>
      <label className="font-semibold">Outras informações relevantes</label>
      <textarea name="outros" className="w-full border rounded px-4 py-2 mb-3" value={form.outros} onChange={handleChange} />
      <div className="text-center mt-6">
        <a
          href={`https://wa.me/${WHATSAPP}?text=${mensagem}`}
          className="bg-green-600 text-white px-6 py-3 rounded text-lg font-bold hover:bg-green-700 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enviar para análise da equipe
        </a>
      </div>
    </>,
  ];

  return (
    <form className="bg-white shadow rounded-xl p-8">
      <h2 className="text-xl font-bold mb-4">Formulário para Visto EUA</h2>
      <div className="mb-4">{steps[step - 1]}</div>
      <div className="flex justify-between">
        {step > 1 && (
          <button type="button" onClick={prev} className="bg-gray-200 px-4 py-2 rounded font-semibold">
            Voltar
          </button>
        )}
        {step < steps.length && (
          <button type="button" onClick={next} className="bg-green-600 text-white px-4 py-2 rounded font-bold hover:bg-green-700 transition">
            Próximo
          </button>
        )}
      </div>
    </form>
  );
}