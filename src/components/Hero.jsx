"use client";
import { motion } from "framer-motion";

export default function Hero({ lang }) {
  const content = {
    ar: {
      title: "نحول أفكارك إلى واقع إبداعي",
      sub: "شركة رائدة في مجال التصميم والدعاية والإعلان، نبتكر حلولاً تليق بطموحاتكم.",
      btn: "ابدأ مشروعك",
    },
    en: {
      title: "Turning Ideas Into Creative Reality",
      sub: "A leading advertising and design agency, creating solutions that match your ambitions.",
      btn: "Start Your Project",
    },
  };

  const text = content[lang];

  return (
    <section className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* خلفية جمالية (أنيميشن خفيف) */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60 -z-10"
      />

      <div className="text-center px-6">
        <motion.h1
          key={text.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-black mb-6 leading-tight"
        >
          {text.title}
        </motion.h1>

        <motion.p
          key={text.sub}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          {text.sub}
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-600 transition-colors shadow-xl"
        >
          {text.btn}
        </motion.button>
      </div>
    </section>
  );
}
