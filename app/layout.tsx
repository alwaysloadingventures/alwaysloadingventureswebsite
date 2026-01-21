import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Container } from "@/components/layout-primitives";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AlwaysLoading Ventures — Operator-Led Venture Studio & Advisory",
    template: "%s | AlwaysLoading Ventures",
  },
  description:
    "We partner with founders and operators to scale businesses through execution, systems, and strategic leadership — not just advice.",
  keywords: [
    "venture studio",
    "advisory",
    "startup consulting",
    "operator",
    "growth strategy",
    "business scaling",
    "execution partner",
    "systems",
    "automation",
  ],
  authors: [{ name: "AlwaysLoading Ventures" }],
  creator: "AlwaysLoading Ventures",
  metadataBase: new URL("https://alwaysloading.net"),
  icons: {
    icon: [
      { url: "/favicons/favicon.ico", sizes: "any" },
      { url: "/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicons/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/favicons/apple-touch-icon.png", sizes: "180x180" },
    ],
    shortcut: "/favicons/favicon.ico",
  },
  manifest: "/favicons/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alwaysloading.net",
    siteName: "AlwaysLoading Ventures",
    title: "AlwaysLoading Ventures — Operator-Led Venture Studio & Advisory",
    description:
      "We partner with founders and operators to scale businesses through execution, systems, and strategic leadership — not just advice.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AlwaysLoading Ventures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AlwaysLoading Ventures — Operator-Led Venture Studio & Advisory",
    description:
      "We partner with founders and operators to scale businesses through execution, systems, and strategic leadership.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1 py-14 sm:py-16">
          <Container>{children}</Container>
        </main>
        <Footer />
      </body>
    </html>
  );
}
