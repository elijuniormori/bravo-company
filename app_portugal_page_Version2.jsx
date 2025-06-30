export default function Portugal() {
  return (
    <section className="max-w-xl mx-auto bg-white shadow-lg rounded-xl mt-10 p-8">
      <h1 className="text-2xl font-bold text-green-700 mb-2">BRAVO COMPANY</h1>
      <h2 className="text-xl font-semibold mb-4">
        ⚠ COTAÇÃO VISTO DE PROCURA DE TRABALHO ✈️ ⚠
      </h2>
      <div className="mb-4">
        <h3 className="font-bold mb-1">Inclui:</h3>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>💵 Taxas consulares</li>
          <li>📄 Preenchimento de todos os formulários</li>
          <li>📲 Vídeo chamada para assinar e tirar dúvidas referente ao processo</li>
          <li>✈️ Passagem reserva de retorno (solicitação do visto / apresentar na imigração)</li>
          <li>👩🏼‍💻 Acompanhamento exclusivo</li>
          <li>⁉️ Plantão tira dúvidas 24hs</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-bold mb-1">Documentos Necessários:</h3>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>🍀 Cópia do passaporte em PDF</li>
          <li>🏘️ Comprovante de endereço</li>
          <li>🎫 Foto do RG</li>
          <li>🎟️ CPF</li>
          <li>
            💵 Extrato bancário contendo o montante de 3 salários mínimos de Portugal (aprox. R$ 16.700,00 por aplicante)
          </li>
        </ul>
      </div>
      <div className="mb-4 text-xl text-green-700 font-bold">
        Valor Total: R$ 3.700,00
      </div>
      <a
        href="https://wa.me/351927811070?text=Desejo%20mais%20detalhes%20sobre%20processo%20para%20Portugal"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-8 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition"
      >
        Obter orçamento
      </a>
    </section>
  );
}