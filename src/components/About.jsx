"use client";
import { motion } from "framer-motion";

const aboutData = {
  ar: {
    title: "قصتنا في سطور",
    desc: "نحن لسنا مجرد شركة دعاية، نحن شركاء نجاح. بدأنا بشغف التصميم وتطورنا لنقود السوق بحلول مبتكرة تجمع بين الفن والاستراتيجية.",
    stats: [
      { label: "عميل سعيد", value: "150+" },
      { label: "مشروع مكتمل", value: "500+" },
      { label: "سنة خبرة", value: "10+" },
    ],
  },
  en: {
    title: "Our Story",
    desc: "We are not just an advertising agency; we are success partners. We started with a passion for design and evolved to lead the market with innovative solutions.",
    stats: [
      { label: "Happy Clients", value: "150+" },
      { label: "Projects Done", value: "500+" },
      { label: "Years Experience", value: "10+" },
    ],
  },
};

export default function About({ lang }) {
  const t = aboutData[lang];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* الصورة (ممكن تحط صورة فريق العمل أو المكتب) */}
        <motion.div
          initial={{ opacity: 0, x: lang === "ar" ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="w-full md:w-1/2 relative"
        >
          <div className="aspect-square bg-blue-600 rounded-3xl rotate-3 absolute inset-0 -z-10 opacity-10"></div>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800"
            alt="Team"
            className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>

        {/* النصوص والأرقام */}
        <div className="w-full md:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black mb-6"
          >
            {t.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg leading-relaxed mb-10"
          >
            {t.desc}
          </motion.p>

          {/* الإحصائيات (Counter Grid) */}
          <div className="grid grid-cols-3 gap-4 border-t pt-10">
            {t.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-black text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm font-bold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
