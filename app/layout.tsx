import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tang Siyu — AI Research & Product Portfolio",
  description: "Multimodal AI research, AI products, agents, experiments and interactive prototypes."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
