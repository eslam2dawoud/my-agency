"use client";
import { motion } from "framer-motion";

export default function About({ lang }) {
  return (
    <section
      id="about"
      className="py-24 bg-[#0f172a] px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-white leading-tight">
            {lang === "ar"
              ? "نحن لا نصنع مشاريع، نحن نصنع تاريخاً"
              : "We Don't Just Make Projects, We Make History"}
          </h2>
          <p className="text-indigo-100/60 text-lg md:text-xl leading-relaxed mb-8">
            {lang === "ar"
              ? 'في " الجزيرة"، نؤمن أن كل لمحة بصرية، وكل قطعة أثاث، وكل تفصيلة في حدث ما هي فرصة لترك بصمة خالدة. نحن فريق من المبدعين والمهندسين والمنظمين اجتمعنا لهدف واحد: أن يكون لكل ما نقوم به أثر حقيقي.'
              : 'At "AlJezeraa", we believe every visual glance, every piece of furniture, and every event detail is an opportunity to leave a lasting mark. We are a team of creators and engineers united by one goal: to create a real impact.'}
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-3xl font-black text-indigo-500 mb-2">150+</h4>
              <p className="text-white/50">
                {lang === "ar" ? "مشروع ناجح" : "Successful Projects"}
              </p>
            </div>
            <div>
              <h4 className="text-3xl font-black text-indigo-500 mb-2">10+</h4>
              <p className="text-white/50">
                {lang === "ar" ? "سنوات خبرة" : "Years of Experience"}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-[40px] overflow-hidden rotate-3 shadow-2xl border-8 border-white/5">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
