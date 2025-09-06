import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import CalcImc from "./calcimc/Calcimc";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100 font-sans">
      <CalcImc />
    </div>
  );
}
