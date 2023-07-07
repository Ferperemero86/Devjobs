"use client";

import "tailwindcss/tailwind.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import ThemeProvider from "../contexts/ThemeContext";

import Header from "../components/layout/Header";

import {store} from "../state/store";
import { Provider } from "react-redux";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Provider store={store}>
          <Header />
            {children}
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
