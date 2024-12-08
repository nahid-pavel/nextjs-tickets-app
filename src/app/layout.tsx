import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="flex justify-between py-2.5 px-5 border-b fixed left-0 right-0  z-20 top-0 w-full bg-background/95 backdrop-blur">
          <div>
            <Link href="/" className="text-lg font-bold">
              Home
            </Link>
          </div>
          <div>
            <Link href="/tickets" className="text-sm underline">
              Tickets
            </Link>
          </div>
        </nav>
        <main className="py-24 px-8 bg-secondary/20 min-h-screen flex-1 flex flex-col overflow-y-auto overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
