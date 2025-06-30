import "../app/globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Bravo Company",
  description: "Assessoria de vistos EUA, Canadá, Portugal, Passagens aéreas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <Header />
        <main className="min-h-screen pt-24">{children}</main>
      </body>
    </html>
  );
}