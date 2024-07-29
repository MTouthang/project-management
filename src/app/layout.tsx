import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../redux/provider";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My project Management app",
  description: "Web application to manage my project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="pb-24 h-screen overflow-hidden">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
