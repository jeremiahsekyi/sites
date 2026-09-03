import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MotionObserver } from "@/components/motion-observer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thespeechfactory.org"),
  title: {
    default: "The Speech Factory | Communication Coaching",
    template: "%s | The Speech Factory",
  },
  description:
    "Research-backed public speaking, leadership communication and workplace training for professionals, executives and teams.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>
        <MotionObserver />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
