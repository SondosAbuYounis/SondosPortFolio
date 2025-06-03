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
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon-dark.ico",
        href: "/favicon-dark.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon-light.ico",
        href: "/favicon-light.ico",
      },
    ],
  },
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
