"use client";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer({ lang }) {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
        <div className="space-y-6">
          <div className="text-3xl font-black text-white tracking-tighter">
            الجزيرة<span className="text-indigo-500">.</span>
          </div>
          <p className="leading-relaxed">
            {lang === "ar"
              ? "وكالة رائدة في الابتكار، نجمع بين الدعاية والديكور وتنظيم الفعاليات تحت سقف واحد."
              : "A leading innovation agency, bringing together advertising, decor, and events under one roof."}
          </p>
          <div className="flex gap-5">
            <Facebook className="hover:text-indigo-500 cursor-pointer transition-all" />
            <Instagram className="hover:text-indigo-500 cursor-pointer transition-all" />
            <Twitter className="hover:text-indigo-500 cursor-pointer transition-all" />
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold text-xl mb-8">
            {lang === "ar" ? "الروابط" : "Links"}
          </h4>
          <ul className="space-y-4">
            <li>
              <a href="#home" className="hover:text-indigo-400">
                الرئيسية
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-indigo-400">
                تخصصاتنا
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-indigo-400">
                أعمالنا
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-xl mb-8">
            {lang === "ar" ? "تواصل معنا" : "Contact"}
          </h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-indigo-500" /> +20 123 456 789
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-indigo-500" /> impact@agency.com
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-indigo-500" />{" "}
              {lang === "ar" ? "المملكة العربية السعودية" : "Saudi Arabia"}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 pt-10 text-center opacity-30 text-sm">
        © 2026 الجزيرة. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
