import { Kumbh_Sans } from "next/font/google";
import "tailwindcss/tailwind.css";

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";

import Header from "../components/layout/Header";

const kumbSans = Kumbh_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kumbSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
