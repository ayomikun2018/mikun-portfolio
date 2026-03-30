import type { Metadata } from "next";
import { DM_Sans, Pathway_Extreme } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const pathway = Pathway_Extreme({
  subsets: ["latin"],
  variable: "--font-pathway",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Ayomikun Agbeja — Front-End Engineer",
  description:
    "Front-End Engineer with 4+ years experience building responsive, scalable web applications using React, Next.js, and TypeScript.",
  openGraph: {
    title: "Ayomikun Agbeja — Front-End Engineer",
    description:
      "Front-End Engineer specialising in React, Next.js and TypeScript — turning complex problems into clean, scalable products.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${pathway.variable} font-body antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
