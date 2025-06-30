const aprovados = [
  {
    nome: "Ana Paula S.",
    texto: "Consegui meu visto para o Canadá graças ao suporte incrível da Bravo Company!",
    imagem: "https://randomuser.me/api/portraits/women/44.jpg",
    destino: "Canadá"
  },
  {
    nome: "Carlos Henrique",
    texto: "Equipe dedicada, processo rápido e seguro. Estou indo para os EUA!",
    imagem: "https://randomuser.me/api/portraits/men/32.jpg",
    destino: "Estados Unidos"
  },
  {
    nome: "Juliana M.",
    texto: "Me ajudaram em cada detalhe, recomendo de olhos fechados!",
    imagem: "https://randomuser.me/api/portraits/women/68.jpg",
    destino: "Portugal"
  },
  {
    nome: "Fernando R.",
    texto: "Meu visto H-2B saiu muito mais rápido do que imaginei. Obrigado Bravo Company!",
    imagem: "https://randomuser.me/api/portraits/men/41.jpg",
    destino: "Estados Unidos"
  }
];

export default function Aprovados() {
  return (
    <section className="py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Nossos Aprovados</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {aprovados.map((a, idx) => (
          <div key={idx} className="bg-white shadow rounded-xl p-6 flex flex-col items-center w-64">
            <img
              src={a.imagem}
              alt={a.nome}
              className="w-24 h-24 rounded-full border-4 border-green-500 mb-4"
            />
            <h3 className="font-semibold text-lg">{a.nome}</h3>
            <span className="text-green-700 font-bold text-sm mt-1 mb-2">{a.destino}</span>
            <p className="text-center text-gray-600 text-sm">"{a.texto}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}