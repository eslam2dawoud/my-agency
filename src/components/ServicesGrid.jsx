"use client";
import { motion } from "framer-motion";
import { Megaphone, Sofa, Warehouse, PartyPopper } from "lucide-react";

const services = {
  ar: [
    {
      title: "دعاية وإعلان",
      icon: <Megaphone />,
      desc: "هويات بصرية وحملات تترك أثراً.",
    },
    {
      title: "أثاث وديكور",
      icon: <Sofa />,
      desc: "تصميم داخلي وتنفيذ بلمسة فنية.",
    },
    {
      title: "تنظيم معارض",
      icon: <Warehouse />,
      desc: "حلول متكاملة لتجهيز المعارض والمساحات.",
    },
    {
      title: "حفلات ومناسبات",
      icon: <PartyPopper />,
      desc: "إدارة المناسبات الرسمية والخاصة باحتراف.",
    },
  ],
  en: [
    {
      title: "Advertising",
      icon: <Megaphone />,
      desc: "Identities and campaigns that last.",
    },
    {
      title: "Furniture & Decor",
      icon: <Sofa />,
      desc: "Interior design with an artistic touch.",
    },
    {
      title: "Exhibitions",
      icon: <Warehouse />,
      desc: "Integrated booth and space solutions.",
    },
    {
      title: "Events Planning",
      icon: <PartyPopper />,
      desc: "Managing grand events professionally.",
    },
  ],
};

export default function ServicesGrid({ lang }) {
  const data = services[lang];
  return (
    <section id="services" className="py-24 bg-[#0f172a] px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-16 text-white">
          {lang === "ar" ? "تخصصاتنا" : "Our Specialties"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {data.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-indigo-600/20 transition-all"
            >
              <div className="text-indigo-400 mb-6">{s.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-white">{s.title}</h3>
              <p className="text-white/50">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
