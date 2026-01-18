import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: siteConfig.metadata.title,
  description: siteConfig.metadata.description,
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: siteConfig.name,
    description: "Builder & Engineer",
    type: "website",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      {/* Forced dark mode class for the requested aesthetic */}
      <body className={`${inter.className} min-h-screen bg-bg-dark text-foreground antialiased selection:bg-electric selection:text-black`}>
        {children}
        <Toaster position="bottom-center" toastOptions={{
          style: {
            background: '#111',
            border: '1px solid #333',
            color: '#fff'
          }
        }} />
      </body>
    </html>
  );
}
