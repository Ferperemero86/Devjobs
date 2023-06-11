"use client"
import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

export default function Home() {
  const {theme} = useContext(ThemeContext);
  const {mainBg} = theme;
  console.log(mainBg);
  return (
    <main className="relative">
      <div className={`bg-${mainBg} min-h-screen w-full absolute`}></div>
      <h1>Home</h1>
    </main>
  );
}
