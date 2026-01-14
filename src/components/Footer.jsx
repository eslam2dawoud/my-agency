"use client";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const footerData = {
  ar: {
    about:
      "نحن نصنع الإبداع ونبني العلامات التجارية التي تترك أثراً لا يُمحى في سوق الدعاية والإعلان.",
    linksTitle: "روابط سريعة",
    links: [
      { name: "الرئيسية", id: "home" },
      { name: "خدماتنا", id: "services" },
      { name: "أعمالنا", id: "portfolio" },
      { name: "من نحن", id: "about" },
    ],
    contactTitle: "تواصل معنا",
    rights: "© 2026 جميع الحقوق محفوظة لشركة الإبداع.",
  },
  en: {
    about:
      "We craft creativity and build brands that leave an indelible mark in the advertising world.",
    linksTitle: "Quick Links",
    links: [
      { name: "Home", id: "home" },
      { name: "Services", id: "services" },
      { name: "Portfolio", id: "portfolio" },
      { name: "About Us", id: "about" },
    ],
    contactTitle: "Contact Us",
    rights: "© 2026 All rights reserved to Creative Agency.",
  },
};

export default function Footer({ lang }) {
  const t = footerData[lang];

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
        {/* العمود الأول: نبذة عن الشركة */}
        <div className="space-y-6">
          <div className="text-3xl font-black text-white">
            CREATIVE<span className="text-blue-500">.</span>
          </div>
          <p className="leading-relaxed text-lg">{t.about}</p>
          <div className="flex gap-5">
            <Facebook className="hover:text-blue-500 cursor-pointer transition-all hover:-translate-y-1" />
            <Instagram className="hover:text-pink-500 cursor-pointer transition-all hover:-translate-y-1" />
            <Twitter className="hover:text-blue-400 cursor-pointer transition-all hover:-translate-y-1" />
          </div>
        </div>

        {/* العمود الثاني: الروابط السريعة (تأخذك للأقسام) */}
        <div>
          <h4 className="text-white font-bold text-xl mb-8 border-b border-white/10 pb-2 inline-block">
            {t.linksTitle}
          </h4>
          <ul className="space-y-4">
            {t.links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="hover:text-blue-400 hover:translate-x-2 inline-block transition-all duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* العمود الثالث: معلومات التواصل الفعلي */}
        <div>
          <h4 className="text-white font-bold text-xl mb-8 border-b border-white/10 pb-2 inline-block">
            {t.contactTitle}
          </h4>
          <ul className="space-y-5">
            <li className="flex items-center gap-4 group">
              <div className="p-2 bg-white/5 rounded-lg group-hover:bg-blue-600 transition-colors">
                <Phone
                  size={20}
                  className="text-blue-500 group-hover:text-white"
                />
              </div>
              <span dir="ltr" className="text-lg">
                +20 123 456 789
              </span>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="p-2 bg-white/5 rounded-lg group-hover:bg-blue-600 transition-colors">
                <Mail
                  size={20}
                  className="text-blue-500 group-hover:text-white"
                />
              </div>
              <span className="text-lg">info@creative-agency.com</span>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="p-2 bg-white/5 rounded-lg group-hover:bg-blue-600 transition-colors">
                <MapPin
                  size={20}
                  className="text-blue-500 group-hover:text-white"
                />
              </div>
              <span className="text-lg">
                {lang === "ar" ? "السعودية" : "Saudi Arabia"}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* حقوق النشر */}
      <div className="border-t border-white/5 pt-10 text-center text-sm">
        <p className="opacity-50">{t.rights}</p>
      </div>
    </footer>
  );
}
