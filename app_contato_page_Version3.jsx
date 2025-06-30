import { useEffect } from "react";

export default function Contato() {
  useEffect(() => {
    window.location.href =
      "https://wa.me/351927811070?text=Ol%C3%A1%2C%20j%C3%A1%20fiz%20meu%20formulario%20e%20gost%C3%A1ria%20de%20finalizar%20assinatura%20de%20contrato%20e%20pagamento.";
  }, []);
  return (
    <div className="text-center py-32 text-xl">
      Redirecionando para WhatsApp...
    </div>
  );
}