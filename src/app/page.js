"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  const [lang, setLang] = useState("ar");

  return (
    <main
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="min-h-screen bg-[#0f172a]"
    >
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <ServicesGrid lang={lang} />
      <Portfolio lang={lang} />
      <About lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}
