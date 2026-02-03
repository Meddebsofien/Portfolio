import {
  Playfair_Display,
  DM_Sans,
  Cormorant_Garamond,
} from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Soufiene Meddeb | Ingénieur Full-Stack & DevOps Innovant",
  description:
    "Portfolio de Soufiene Meddeb - Ingénieur Logiciel Full-Stack & DevOps innovant, passionné par les technologies modernes : Spring Boot, Angular, Kafka, Docker, CI/CD",
  keywords:
    "Soufiene Meddeb, Ingénieur Logiciel, Full-Stack Developer, Spring Boot, Angular, React, DevOps, Cloud, Capgemini, Germany",
  authors: [{ name: "Soufiene Meddeb" }],
  openGraph: {
    title: "Soufiene Meddeb - Ingénieur Logiciel",
    description:
      "Portfolio professionnel - Ingénieur Logiciel Full-Stack & DevOps passionné par l'innovation et l'architecture des systèmes",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${dmSans.variable} ${cormorant.variable} font-sans antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
