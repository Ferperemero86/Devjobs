"use client";

import "tailwindcss/tailwind.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import ThemeProvider from "../contexts/ThemeContext";

import Header from "../components/layout/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body>
      <ThemeProvider>
      <Header />
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
