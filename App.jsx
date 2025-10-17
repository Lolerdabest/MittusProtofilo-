import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Code, Rocket, Palette, Cloud, Star } from "lucide-react";

export default function MittuCartoonSite() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-pink-200 via-yellow-100 to-sky-200 text-gray-900 font-sans overflow-x-hidden">

      {/* FLOATING BACKGROUND ANIMATIONS */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-yellow-400 opacity-40"
          style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, delay: i * 0.5 }}
        >
          <Star size={20 + Math.random() * 20} />
        </motion.div>
      ))}

      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`cloud-${i}`}
          className="absolute text-white opacity-50"
          style={{ top: `${Math.random() * 80}%`, left: `${Math.random() * 100}%` }}
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 10 + Math.random() * 5, repeat: Infinity, delay: i * 1 }}
        >
          <Cloud size={100 + Math.random() * 50} />
        </motion.div>
      ))}

      {/* HEADER */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between relative z-10">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-yellow-400 border-4 border-pink-300 flex items-center justify-center text-black font-extrabold shadow-lg animate-bounce">M</div>
          <div className="text-xl font-extrabold text-pink-600 drop-shadow-md">Mittu Creates</div>
        </motion.div>
        <nav className="hidden md:flex gap-6 text-sm text-gray-700 font-medium">
          <a href="#portfolio" className="hover:text-pink-500">Portfolio</a>
          <a href="#pricing" className="hover:text-pink-500">Pricing</a>
          <a href="#about" className="hover:text-pink-500">About</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="text-center px-6 py-20 relative z-10">
        <motion.h1 initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} className="text-5xl md:text-6xl font-extrabold text-gray-900">
          Websites That <span className="text-pink-600">Pop</span> with Personality 🎨
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-lg text-gray-700 mt-6 max-w-2xl mx-auto">
          I'm Mittu — I design <strong>fun, cartoon-inspired websites</strong> for portfolios, small businesses, and creators. Fast, affordable, and packed with creative flair.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }} className="mt-8 flex justify-center gap-4">
          <motion.button whileHover={{ scale: 1.1 }} className="px-6 py-3 rounded-full bg-pink-500 text-white font-semibold shadow-lg hover:bg-pink-600 transition">Get Started</motion.button>
          <motion.button whileHover={{ scale: 1.1 }} className="px-6 py-3 rounded-full bg-yellow-400 text-black font-semibold shadow-lg hover:bg-yellow-500 transition">View Work</motion.button>
        </motion.div>
        <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity }} className="mt-12 flex justify-center">
          <img src="/cartoon-mittu.png" alt="Cartoon Mittu" className="w-40 h-40 rounded-full border-4 border-yellow-400 shadow-lg" />
        </motion.div>
      </section>

      {/* PORTFOLIO, PRICING, ABOUT, FOOTER */}
      {/* Paste the rest of your sections exactly as in your original code */}
    </div>
  );
}