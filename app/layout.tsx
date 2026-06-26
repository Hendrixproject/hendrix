import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConfigureAmplify from "./ConfigureAmplify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hendrix — admin that rocks",
  description:
    "A Django-like admin interface built on Next.js 15, React 19, and AWS Amplify.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfigureAmplify />
        {children}
      </body>
    </html>
  );
}
