import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed w-full top-0 left-0 bg-white shadow z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Bravo Company" width={45} height={45} className="rounded" />
          <span className="font-bold text-xl text-green-700">Bravo Company</span>
        </div>
        <nav className="flex gap-4 font-semibold">
          <Link href="/" className="hover:text-green-700">Início</Link>
          <Link href="/estados-unidos" className="hover:text-green-700">Estados Unidos</Link>
          <Link href="/canada" className="hover:text-green-700">Canadá</Link>
          <Link href="/portugal" className="hover:text-green-700">Portugal</Link>
          <Link href="/passagem-aerea" className="hover:text-green-700">Passagem Aérea</Link>
          <Link href="/contato" className="hover:text-green-700">Contato</Link>
        </nav>
        <div className="font-bold text-green-700">
          <a href="tel:+351927811070">+351 927 811 070</a>
        </div>
      </div>
    </header>
  );
}