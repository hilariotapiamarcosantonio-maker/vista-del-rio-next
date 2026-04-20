import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsappButton from "@/components/shared/WhatsappButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vista del Río | Inversiones Inmobiliarias Premium",
  description: "Ecosistema de inversión inmobiliaria de alta rentabilidad en el Caribe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-stone-950 text-stone-200 antialiased`}>
        {children}
        <WhatsappButton />
      </body>
    </html>
  );
}
