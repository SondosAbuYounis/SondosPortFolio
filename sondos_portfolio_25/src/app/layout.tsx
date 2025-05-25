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
        url: "/favicon-light.png",
        href: "/favicon-light.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon-dark.png",
        href: "/favicon-dark.png",
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
      <head>
        <link
          rel="shortcut icon"
          href="/favicon-light.ico"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="shortcut icon"
          href="/favicon-dark.ico"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body className={`font-mainFontFamily antialiased`}>{children}</body>
    </html>
  );
}
