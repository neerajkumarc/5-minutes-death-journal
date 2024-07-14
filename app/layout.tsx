import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner"

const myFont = localFont({ src: '../public/DeathNote.ttf' })

export const metadata: Metadata = {
  title: "Death Journal",
  description: "5 min Death Journal",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(myFont.className, "tracking-[3px] bg-[#090109] text-white")} ><Header />{children}
      <Toaster />
      <script defer src="https://umami-false-analytics.vercel.app/script.js" data-website-id="efcdbef0-b266-48c8-91d0-0a3c8afe8df2"></script> 
      </body>
    </html>
  );
}
