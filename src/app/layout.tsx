import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavMenu from "@/components/NavMenu";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Salesforce",
  description: "Página criada na sprint 3 do challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col h-screen">
        <NavMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
