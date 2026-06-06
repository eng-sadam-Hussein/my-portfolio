import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Briefcase,
  Code2,
  Home,
  Menu,
  Phone,
  Settings,
  User,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: User },
  { name: "Skills", path: "/skills", icon: Code2 },
  { name: "Projects", path: "/projects", icon: Briefcase },
  { name: "Services", path: "/services", icon: Settings },
  { name: "Contact", path: "/contact", icon: Phone },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="container-main h-[72px] flex items-center justify-between gap-4">
        {/* LOGO */}
        <Link to="/" className="group flex items-center gap-3 shrink-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.86, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-[#071a33] flex items-center justify-center shadow-md group-hover:bg-[#8a5200] transition"
          >
            <Code2 className="text-white" size={23} strokeWidth={2.7} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.08 }}
            className="leading-tight"
          >
            <motion.span
              initial={{ letterSpacing: "0.02em" }}
              animate={{ letterSpacing: "0.005em" }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="block text-lg sm:text-xl md:text-2xl font-black tracking-tight"
              style={{
                fontFamily:
                  "Georgia, Cambria, 'Times New Roman', Times, serif",
              }}
            >
              <span className="text-[#071a33] group-hover:text-[#8a5200] transition">
                Sadam
              </span>{" "}
              <span className="text-[#8a5200] group-hover:text-[#071a33] transition">
                Hussein
              </span>
            </motion.span>

            <span className="block text-[9px] sm:text-[10px] md:text-xs font-black uppercase tracking-[0.14em] sm:tracking-[0.18em] text-gray-500 group-hover:text-[#8a5200] transition">
              Full-Stack Developer
            </span>
          </motion.div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-2 font-black transition ${
                    isActive
                      ? "text-[#8a5200]"
                      : "text-gray-700 hover:text-[#8a5200]"
                  }`
                }
              >
                <Icon size={16} />
                {link.name}
              </NavLink>
            );
          })}
        </nav>

        {/* DESKTOP CTA */}
        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-2 bg-[#8a5200] text-white font-extrabold px-7 py-3 rounded-lg hover:bg-[#a56508] transition"
        >
          <Phone size={17} />
          Hire Me
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden p-2 rounded-lg border border-gray-200 text-[#071a33] hover:bg-gray-100 transition"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <>
          <button
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            aria-label="Close menu overlay"
          />

          <aside className="fixed right-0 top-0 z-50 h-screen w-[78%] max-w-[360px] bg-white shadow-2xl lg:hidden">
            <div className="h-[72px] px-5 flex items-center justify-between border-b border-gray-200">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-2xl bg-[#071a33] flex items-center justify-center shrink-0">
                  <Code2 className="text-white" size={22} strokeWidth={2.7} />
                </div>

                <div className="leading-tight min-w-0">
                  <h3
                    className="font-black text-lg truncate"
                    style={{
                      fontFamily:
                        "Georgia, Cambria, 'Times New Roman', Times, serif",
                    }}
                  >
                    <span className="text-[#071a33]">Sadam</span>{" "}
                    <span className="text-[#8a5200]">Hussein</span>
                  </h3>

                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-gray-500">
                    Full-Stack Developer
                  </p>
                </div>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg border border-gray-200 text-[#071a33] hover:bg-gray-100 transition"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <div className="p-5 flex flex-col gap-3">
              {links.map((link) => {
                const Icon = link.icon;

                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-4 rounded-xl font-black transition ${
                        isActive
                          ? "bg-orange-50 text-[#8a5200]"
                          : "text-gray-700 hover:bg-orange-50 hover:text-[#8a5200]"
                      }`
                    }
                  >
                    <Icon size={20} />
                    {link.name}
                  </NavLink>
                );
              })}

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 bg-[#8a5200] text-white text-center font-extrabold px-7 py-4 rounded-xl hover:bg-[#a56508] transition"
              >
                <Phone size={18} />
                Hire Me
              </Link>
            </div>
          </aside>
        </>
      )}
    </header>
  );
}