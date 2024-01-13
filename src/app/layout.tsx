import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import React from "react";
import "./globals.css";

const inter = Poppins({ subsets: ["latin"], weight: ["200", "400", "600"] });

export const metadata: Metadata = {
  title: "Rankovies app",
  description: "Best movies and TV shows ranking app",
};

/* const NavigationLinks = [
  { label: 'Movies', route: '/movies' },
  { label: 'TV Shows', route: '/tvShows' },
] */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Rankovies</title>
      </head>
      <body className={inter.className}>
        {/* <header>
          <NavBar navLinks={NavigationLinks} />
        </header> */}
        {children}
      </body>
    </html>
  );
}
