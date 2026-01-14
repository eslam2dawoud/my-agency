"use client";
import { motion } from "framer-motion";

const services = {
  ar: [
    { title: "تصميم الهوية", desc: "بنرسم لشركتك شخصية متميزة", icon: "🎨" },
    { title: "تسويق رقمي", desc: "بنخلي اسمك في كل مكان", icon: "🚀" },
    { title: "موشن جرافيك", desc: "بنحرك أفكارك ونخليها قصة", icon: "🎬" },
    { title: "طباعة ودعاية", desc: "جودة خيال وتركيب في أسرع وقت", icon: "🖨️" },
  ],
  en: [
    {
      title: "Branding",
      desc: "We draw a unique persona for your business",
      icon: "🎨",
    },
    {
      title: "Digital Marketing",
      desc: "Making your name everywhere",
      icon: "🚀",
    },
    {
      title: "Motion Graphics",
      desc: "Moving your ideas into stories",
      icon: "🎬",
    },
    {
      title: "Print & Ads",
      desc: "Imaginary quality & fastest installation",
      icon: "🖨️",
    },
  ],
};

export default function ServicesGrid({ lang }) {
  const currentServices = services[lang];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* عنوان القسم مع أنيميشن */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-r-4 border-blue-600 pr-6"
        >
          <h2 className="text-4xl font-black">
            {lang === "ar" ? "إحنا بنعمل إيه؟" : "What We Do?"}
          </h2>
        </motion.div>

        {/* شبكة الأقسام الأربعة */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="p-8 rounded-3xl bg-gray-50 hover:bg-blue-600 hover:text-white transition-all duration-300 group shadow-sm border border-gray-100"
            >
              <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="opacity-70 group-hover:opacity-100 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
