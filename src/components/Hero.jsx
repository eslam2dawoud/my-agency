"use client";
import { motion } from "framer-motion";

export default function Hero({ lang }) {
  const content = {
    ar: {
      title: "نصنع الإبداع ليميز علامتك التجارية",
      sub: "نحن وكالة رائدة في التصميم والدعاية، نحول الأفكار المعقدة إلى تجارب بصرية مذهلة.",
      btn: "استكشف أعمالنا",
    },
    en: {
      title: "Crafting Creativity for Your Brand",
      sub: "A leading design and advertising agency, transforming complex ideas into stunning visual experiences.",
      btn: "Explore Our Work",
    },
  };

  const text = content[lang];

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* --- الكرات الهلامية المتحركة (Blobs) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* كرة زرقاء هلامية */}
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-400/30 rounded-full blur-[80px]"
        />

        {/* كرة بنفسجية هلامية */}
        <motion.div
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 100, -80, 0],
            scale: [1, 1.3, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 -right-20 w-[450px] h-[450px] bg-purple-400/25 rounded-full blur-[100px]"
        />

        {/* كرة خضراء هلامية صغيرة للتباين */}
        <motion.div
          animate={{
            x: [0, 50, -50, 0],
            y: [0, 150, 0, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-green-200/20 rounded-full blur-[90px]"
        />
      </div>

      {/* --- الأشكال الهندسية الأصلية (التي أعجبتك) --- */}
      <div className="absolute inset-0 z-0 opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1440 810" fill="none">
          <motion.path
            d="M50 50 L200 50 L200 200 L50 200 Z"
            animate={{
              x: [-100, 150, -100],
              y: [-100, 50, -100],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
            fill="#ADD8E6"
            className="blur-md opacity-20"
          />
          <motion.circle
            cx="1200"
            cy="700"
            r="150"
            animate={{
              x: [100, -50, 100],
              y: [100, 0, 100],
              scale: [0.8, 1.1, 0.8],
            }}
            transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
            fill="#DDA0DD"
            className="blur-md opacity-20"
          />
        </svg>
      </div>

      {/* --- طبقة النقاط (Grid) لإعطاء مظهر فخم --- */}
      <div
        className="absolute inset-0 opacity-[0.03] z-[1] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* --- المحتوى النصي --- */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight text-slate-900">
            {text.title}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-gray-600 text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {text.sub}
          </motion.p>

          <div className="flex justify-center">
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl shadow-blue-300 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              {text.btn}
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* مؤشر سكرول */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30 z-10"
      >
        <div className="w-6 h-10 border-2 border-slate-900 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-slate-900 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
