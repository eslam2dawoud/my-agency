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
    <main dir={lang === "ar" ? "rtl" : "ltr"} className="min-h-screen bg-white">
      <Navbar lang={lang} setLang={setLang} />

      <div id="home">
        <Hero lang={lang} />
      </div>

      <section id="services">
        <ServicesGrid lang={lang} />
      </section>

      <section id="portfolio">
        <Portfolio lang={lang} />
      </section>

      <section id="about">
        <About lang={lang} />
      </section>

      <Footer lang={lang} />
    </main>
  );
}
