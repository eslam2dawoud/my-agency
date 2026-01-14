"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; // تأكد من تثبيتها أو استخدم أي أيقونة قفل

const portfolioData = {
  ar: {
    title: "معرض أعمالنا",
    categories: ["الكل", "هوية بصرية", "سوشيال ميديا", "مطبوعات"],
  },
  en: {
    title: "Our Portfolio",
    categories: ["All", "Branding", "Social Media", "Printing"],
  },
};

const projects = [
  {
    id: 1,
    category: "branding",
    img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=500",
    album: [
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800",
      "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800",
    ],
    catEn: "Branding",
    catAr: "هوية بصرية",
  },
  {
    id: 2,
    category: "social",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=500",
    album: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800",
      "https://images.unsplash.com/photo-1611926653458-09294b319dd7?q=80&w=800",
    ],
    catEn: "Social Media",
    catAr: "سوشيال ميديا",
  },
  // أضف باقي المشاريع بنفس الطريقة (album يحتوي على مصفوفة صور)
];

export default function Portfolio({ lang }) {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null); // حالة المشروع المختار لفتحه
  const t = portfolioData[lang];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-10">{t.title}</h2>

        {/* أزرار الفلترة */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {t.categories.map((cat, i) => (
            <button
              key={i}
              onClick={() =>
                setFilter(
                  i === 0 ? "all" : ["branding", "social", "printing"][i - 1]
                )
              }
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                (i === 0 && filter === "all") ||
                ["branding", "social", "printing"][i - 1] === filter
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* عرض الصور بأنيميشن - الجريد هنا اصبح 4 في الشاشات الكبيرة */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)} // عند الضغط يفتح الألبوم
                className="relative h-64 rounded-2xl overflow-hidden group shadow-md cursor-pointer"
              >
                <img
                  src={project.img}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-center p-4">
                  <p className="text-white font-bold text-lg">
                    {lang === "ar" ? project.catAr : project.catEn}
                  </p>
                  <span className="text-white/80 text-sm mt-2">
                    {lang === "ar" ? "عرض الألبوم" : "View Album"}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* النافذة المنبثقة (Modal) لعرض صور الألبوم */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 text-white p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <X size={30} />
            </button>

            <div className="max-w-6xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedProject.album.map((pic, index) => (
                  <motion.img
                    key={index}
                    src={pic}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full rounded-xl shadow-lg"
                    alt={`work-${index}`}
                  />
                ))}
              </div>
              <div className="text-center mt-8 text-white">
                <h3 className="text-2xl font-bold">
                  {lang === "ar"
                    ? selectedProject.catAr
                    : selectedProject.catEn}
                </h3>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
