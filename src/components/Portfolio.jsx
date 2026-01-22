"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, ChevronLeft } from "lucide-react";

const portfolioData = {
  ar: {
    title: "أثرنا في المشاريع",
    categories: [
      "الكل",
      "دعاية وإعلان",
      "أثاث وديكور",
      "تنظيم معارض",
      "مناسبات",
    ],
  },
  en: {
    title: "Our Impact in Projects",
    categories: ["All", "Advertising", "Decor", "Exhibitions", "Events"],
  },
};

const projects = [
  {
    id: 1,
    category: { ar: "دعاية وإعلان", en: "Advertising" },
    title: "هوية شركة لوجستيك",
    img: "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=800",
    album: [
      "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=800",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    ],
  },
  {
    id: 2,
    category: { ar: "أثاث وديكور", en: "Decor" },
    title: "فيلا مودرن - القاهرة",
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800",
    album: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800",
    ],
  },
  {
    id: 3,
    category: { ar: "تنظيم معارض", en: "Exhibitions" },
    title: "جناح معرض إكسبو",
    img: "https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=800",
    album: [
      "https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=800",
    ],
  },
  {
    id: 4,
    category: { ar: "مناسبات", en: "Events" },
    title: "حفل إطلاق منتج",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800",
    album: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800",
    ],
  },
];

export default function Portfolio({ lang }) {
  const [filter, setFilter] = useState(lang === "ar" ? "الكل" : "All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  const t = portfolioData[lang];
  const filteredProjects =
    filter === "الكل" || filter === "All"
      ? projects
      : projects.filter((p) => p.category[lang] === filter);

  return (
    <section id="portfolio" className="py-24 bg-[#0f172a] px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-12 text-white">
          {t.title}
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {t.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full font-bold transition-all ${
                filter === cat
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/40"
                  : "bg-white/5 text-white/60 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={project.id}
              onClick={() => {
                setSelectedProject(project);
                setCurrentImgIdx(0);
              }}
              className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-indigo-400 font-bold mb-2 block">
                  {project.category[lang]}
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-10 right-10 text-white hover:rotate-90 transition-transform"
            >
              <X size={40} />
            </button>

            <div className="relative max-w-5xl w-full aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={selectedProject.album[currentImgIdx]}
                className="w-full h-full object-contain"
              />

              {selectedProject.album.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setCurrentImgIdx((prev) =>
                        prev === 0
                          ? selectedProject.album.length - 1
                          : prev - 1,
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 p-3 rounded-full text-white hover:bg-indigo-600"
                  >
                    <ChevronLeft size={30} />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentImgIdx((prev) =>
                        prev === selectedProject.album.length - 1
                          ? 0
                          : prev + 1,
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 p-3 rounded-full text-white hover:bg-indigo-600"
                  >
                    <ChevronRight size={30} />
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
