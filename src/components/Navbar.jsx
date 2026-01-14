"use client";
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ lang, setLang }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = {
    ar: [
      { name: "الرئيسية", id: "home" },
      { name: "خدماتنا", id: "services" },
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
    <nav className="fixed w-full z-[100] bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div className="text-2xl font-black text-blue-600">
          CREATIVE<span className="text-black">.</span>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {menuItems[lang].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="hover:text-blue-600 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition-all"
          >
            <Globe size={18} />
            {lang === "ar" ? "English" : "عربي"}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b absolute w-full flex flex-col items-center py-6 gap-4 shadow-xl"
          >
            {menuItems[lang].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold"
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
