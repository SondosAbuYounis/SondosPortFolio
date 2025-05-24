import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sondos AbuYounis",
  description: "Portfolio",
  authors: [
    {
      name: "Sondos AbuYounis",
      url: "https://www.linkedin.com/in/sundosabuyounes",
    },
  ],
  keywords: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-mainFontFamily antialiased`}>{children}</body>
    </html>
  );
}
