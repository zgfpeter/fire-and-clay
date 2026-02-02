import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Instagram,
  MapPin,
  Clock,
  Phone,
  ChevronRight,
  History,
  UtensilsCrossed,
  Home,
  Info,
} from "lucide-react";

// Navigation sections
const NavigationItem = () => {
  const [active, setActive] = useState("home"); // the active section (what part of the page i'm on)
  const items = [
    { id: "home", icon: <Home size={20} />, label: "Home" },
    { id: "history", icon: <History size={20} />, label: "History" },
    { id: "menu", icon: <UtensilsCrossed size={20} />, label: "Menu" },
    { id: "visit", icon: <MapPin size={20} />, label: "Visit" },
  ];

  return (
    <nav className="fixed z-50 flex items-center gap-2 px-4 py-3 -translate-x-1/2 border rounded-full shadow-2xl bottom-8 left-1/2 bg-white/10 backdrop-blur-xl border-white/20">
      {/* map the navigation items and create an anchor tag for each */}
      {/* the active item is styled differently */}
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={() => setActive(item.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 outline-none focus:ring-2 focus:ring-amber-500 ${
            active === item.id
              ? "bg-amber-500 text-white"
              : "text-amber-500 hover:text-white hover:bg-white/5"
          }`}
          aria-label={`Maps to ${item.label}`}
        >
          {item.icon}
          <span className="hidden text-xs font-medium tracking-widest uppercase md:block">
            {item.label}
          </span>
        </a>
      ))}
    </nav>
  );
};

// Holds the title and subtitle of each section of the page
const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-16">
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="flex items-center gap-4 mb-4 text-amber-600"
    >
      <div className="w-12 h-px bg-amber-600" />
      <span className="uppercase tracking-[0.3em] text-xs font-bold">
        {subtitle}
      </span>
    </motion.div>
    <h2 className="font-serif text-5xl tracking-tight md:text-7xl text-stone-900">
      {title}
    </h2>
  </div>
);

// main app
export default function App() {
  return (
    <div className="bg-[#F9F7F2] text-stone-800 font-sans selection:bg-amber-200">
      <NavigationItem />

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex flex-col justify-end p-8 overflow-hidden h-svh md:p-24"
      >
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2074&auto=format&fit=crop"
            className="object-cover w-full h-full"
            alt="Interior of Fire and Clay showing natural wood and soft lighting"
          />
          <div className="absolute inset-0 bg-linear-to-t from-stone-950/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[10rem] font-serif leading-none mb-6"
          >
            Fire
            <span className="italic opacity-50 text-[0.5em]"> &</span>Clay
          </motion.h1>
          <p className="max-w-2xl text-xl font-light leading-relaxed md:text-2xl text-stone-200">
            Elevated dining where fire-forged techniques meet the seasonal
            harvest of the North.
          </p>
        </div>
      </section>

      {/* History section */}
      <section id="history" className="px-8 py-32 mx-auto md:px-24 max-w-7xl">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div className="space-y-8">
            <SectionHeader title="The Origin Story" subtitle="Our Legacy" />
            <div className="space-y-6 text-lg leading-relaxed text-stone-600">
              <p>
                Founded in 2020, Fire & Clay was born from a simple obsession:
                the relationship between heat and earth. Our founders, a
                ceramicist and a chef, envisioned a space where every vessel and
                every ingredient shared the same origin.
              </p>
              <p>
                Everything element here is tactile. Our tables are carved from
                fallen oak; our menus are printed on recycled hemp; our food is
                cooked over embers. We don't just serve meals; we serve a
                connection to the landscape.
              </p>
            </div>
            <button className="flex items-center gap-4 font-bold tracking-widest uppercase text-stone-900 group">
              The current tasting experience{" "}
              <ChevronRight className="transition-transform group-hover:translate-x-2" />
            </button>
          </div>
          <div className="relative">
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: 1 }}
              className="overflow-hidden shadow-2xl aspect-4/5 rounded-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1697659602792-31dcb2a5a4ec?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Chef preparing food over open flame"
                className="object-cover w-full h-full transition-all duration-700 grayscale hover:grayscale-0"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu section*/}
      <section
        id="menu"
        className="py-32 overflow-hidden text-white bg-stone-900"
      >
        <div className="max-w-5xl px-8 mx-auto md:px-24">
          <div className="mb-16 text-center">
            <span className="block mb-4 text-sm tracking-widest uppercase text-amber-500">
              Spring 2026
            </span>
            <h2 className="font-serif text-5xl">
              Our Current Tasting Experience
            </h2>
          </div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative overflow-hidden border rounded-lg shadow-2xl group cursor-crosshair border-white/10"
          >
            <img
              src="menu.png"
              alt="Winter Tasting Menu printed on textured paper showing courses like Hearth-Baked Cod and Wild Venison"
              className="w-full h-auto transition-opacity opacity-95 group-hover:opacity-100"
            />
          </motion.div>

          <p className="max-w-xl mx-auto mt-12 italic text-center text-stone-500">
            Our menu is printed weekly on handmade paper. This digital replica
            represents our current seasonal offerings.
          </p>
        </div>
      </section>

      {/* Visit section (contact + map) */}
      <section id="visit" className="px-8 py-32 mx-auto md:px-24 max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="p-12 border bg-stone-100 rounded-3xl border-stone-200">
            <SectionHeader title="Join Us" subtitle="Location" />

            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex items-center p-5 bg-white shadow-sm rounded-2xl text-amber-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-bold">Hours of Operation</h4>
                  <p className="italic text-stone-500">
                    Tue — Sat / 18:00 — 23:00
                  </p>
                  <p className="italic text-stone-500">
                    Sun / 12:00 — 16:00 (Brunch)
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex items-center p-5 bg-white shadow-sm rounded-2xl text-amber-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-bold">Inquiries</h4>
                  <p className="text-stone-500">+1 (555) 234-8890</p>
                  <p className="text-stone-500">contact@fireandclay.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden group rounded-3xl h-125 lg:h-auto">
            {/* Map placeholder*/}
            <div className="relative overflow-hidden transition-all duration-1000 rounded-sm h-125 bg-stone-200 grayscale hover:grayscale-0">
              {/* Embedded map */}
              <iframe
                title="RestFirent Location"
                src="https://www.google.com/maps?q=55.6761,12.5683&z=16&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
            <div className="absolute flex items-center justify-between p-6 shadow-xl bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md rounded-2xl">
              <div>
                <p className="font-bold text-stone-900">123 Food Street</p>
                <p className="text-sm text-stone-600">Address, City</p>
              </div>
              <button className="px-6 py-2 text-sm font-medium text-white transition-colors rounded-full bg-stone-900 hover:bg-amber-600">
                Directions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with social media links */}
      <footer className="px-8 pt-24 pb-48 text-center border-t md:px-24 border-stone-200">
        <div className="mb-8 font-serif text-3xl tracking-tighter uppercase">
          Fire & Clay
        </div>
        <div className="flex justify-center gap-12 mb-12">
          {["Instagram", "Threads", "Facebook"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-stone-400 hover:text-amber-600 transition-colors uppercase text-xs tracking-[0.2em] font-bold"
            >
              {social}
            </a>
          ))}
        </div>
        <p className="text-sm italic text-stone-400 opacity-60">
          © 2026 Fire & Clay Hospitality Group. Designed for the senses.
        </p>
      </footer>
    </div>
  );
}
