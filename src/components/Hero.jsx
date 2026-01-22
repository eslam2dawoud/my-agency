"use client";
import { motion } from "framer-motion";

export default function Hero({ lang }) {
  const content = {
    ar: {
      title: "صناع الأثر.. حيث تنبض الأفكار بالحياة",
      sub: "نحن لا نصمم فقط، بل نترك أثراً في كل تفصيل؛ من حملات الدعاية إلى فخامة الديكور وتنظيم أضخم المناسبات.",
      btn: "شاهد أثرنا",
    },
    en: {
      title: "Impact Makers.. Where Ideas Come to Life",
      sub: "We don't just design; we leave an impact in every detail, from advertising to luxury decor and grand event planning.",
      btn: "Explore Our Impact",
    },
  };
  const text = content[lang];

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0f172a]"
    >
      {/* الكرات الهلامية */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, 80, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-10 left-10 w-96 h-96 bg-indigo-600/40 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mt-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-black mb-8 leading-tight text-white tracking-tighter"
        >
          {text.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-indigo-100/70 text-lg md:text-2xl mb-12 max-w-3xl mx-auto"
        >
          {text.sub}
        </motion.p>
        <motion.a
          href="#portfolio"
          whileHover={{ scale: 1.05 }}
          className="bg-indigo-600 text-white px-12 py-5 rounded-2xl font-black text-xl shadow-2xl inline-block transition-transform"
        >
          {text.btn}
        </motion.a>
      </div>
    </section>
  );
}
