import React from "react";
import NavBar from "./components/navigation/navbar/navBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Movies</title>
      </head>
      <body>
        <header>
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  );
}
