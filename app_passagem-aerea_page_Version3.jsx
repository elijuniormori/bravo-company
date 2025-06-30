"use client";
import { useState } from "react";

export default function PassagemAerea() {
  const [destino, setDestino] = useState("");
  const [data, setData] = useState("");
  const [pessoas, setPessoas] = useState(1);
  const [idades, setIdades] = useState([18]);
  const [mala, setMala] = useState("Sim");
  const [seguro, setSeguro] = useState("Sim");

  // Atualiza o número de campos de idade conforme o número de pessoas
  const handlePessoasChange = (e) => {
    const val = parseInt(e.target.value);
    setPessoas(val);
    setIdades((prev) => {
      const arr = [...prev];
      while (arr.length < val) arr.push(18);
      while (arr.length > val) arr.pop();
      return arr;
    });
  };

  // Monta mensagem para o WhatsApp
  const mensagem = encodeURIComponent(
    `Olá! Gostaria de uma cotação de passagem aérea:\n` +
      `- Destino: ${destino}\n` +
      `- Data da viagem: ${data}\n` +
      `- Pessoas: ${pessoas} (${idades.join(", ")})\n` +
      `- Mala despachada: ${mala}\n` +
      `- Seguro viagem: ${seguro}`
  );

  const WHATSAPP = "351927811070";

  return (
    <main className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold text-center mb-6">
        ✈️ Solicite sua cotação de passagem aérea
      </h1>
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          window.open(
            `https://wa.me/${WHATSAPP}?text=${mensagem}`,
            "_blank"
          );
        }}
      >
        <div>
          <label className="font-semibold">Destino</label>
          <input
            className="w-full border rounded px-4 py-2 mt-1"
            placeholder="Ex: Lisboa, Paris..."
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="font-semibold">Data da viagem</label>
          <input
            type="date"
            className="w-full border rounded px-4 py-2 mt-1"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="font-semibold">Quantidade de pessoas</label>
          <select
            className="w-full border rounded px-4 py-2 mt-1"
            value={pessoas}
            onChange={handlePessoasChange}
            required
          >
            {Array.from({ length: 60 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="font-semibold">Idade de cada passageiro</label>
          <div className="flex flex-wrap gap-2 mt-1">
            {idades.map((idade, idx) => (
              <select
                key={idx}
                className="w-20 border rounded px-2 py-1"
                value={idade}
                onChange={(e) => {
                  const arr = [...idades];
                  arr[idx] = parseInt(e.target.value);
                  setIdades(arr);
                }}
                required
              >
                {Array.from({ length: 61 }, (_, i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          <div>
            <label className="font-semibold block mb-1">Mala despachada?</label>
            <select
              className="border rounded px-4 py-2"
              value={mala}
              onChange={(e) => setMala(e.target.value)}
            >
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>
          <div>
            <label className="font-semibold block mb-1">Seguro viagem?</label>
            <select
              className="border rounded px-4 py-2"
              value={seguro}
              onChange={(e) => setSeguro(e.target.value)}
            >
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white font-bold py-3 rounded-lg mt-6 text-lg hover:bg-green-700 transition"
        >
          Obter cotação no WhatsApp
        </button>
      </form>
    </main>
  );
}