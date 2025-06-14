// En el archivo: app/layout.tsx

import type { Metadata } from "next";

// Si tu proyecto no tiene un archivo globals.css, puedes borrar la siguiente línea.
// import "./globals.css";

export const metadata: Metadata = {
  title: "Academia de Fundadores",
  description: "El lugar para aprender a emprender.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
