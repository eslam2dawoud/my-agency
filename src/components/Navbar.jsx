"use client";
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ lang, setLang }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = {
    ar: [
      { name: "الرئيسية", id: "home" },
      { name: "تخصصاتنا", id: "services" },
      { name: "أعمالنا", id: "portfolio" },
      { name: "من نحن", id: "about" },
    ],
    en: [
      { name: "Home", id: "home" },
      { name: "Services", id: "services" },
      { name: "Portfolio", id: "portfolio" },
      { name: "About Us", id: "about" },
    ],
  };

  return (
    <nav className="fixed w-full z-[100] bg-[#0f172a]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div className="text-4xl font-black text-white tracking-tighter">
          الجزيرة<span className="text-indigo-500">.</span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium">
          {menuItems[lang].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-white/80 hover:text-indigo-400 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="bg-white/10 px-4 py-2 rounded-full text-sm"
          >
            {lang === "ar" ? "English" : "عربي"}
          </button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#0f172a] absolute w-full flex flex-col items-center py-8 gap-6 shadow-2xl"
          >
            {menuItems[lang].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className="text-xl font-bold"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => {
                setLang(lang === "ar" ? "en" : "ar");
                setIsOpen(false);
              }}
              className="text-blue-600 font-bold"
            >
              {lang === "ar" ? "English" : "عربي"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
