import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  Code2,
  Home,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Settings,
  Smartphone,
  User,
} from "lucide-react";

const navigationLinks = [
  {
    name: "Home",
    path: "/",
    icon: Home,
  },
  {
    name: "About",
    path: "/about",
    icon: User,
  },
  {
    name: "Skills",
    path: "/skills",
    icon: Code2,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: Briefcase,
  },
  {
    name: "Services",
    path: "/services",
    icon: Settings,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: Phone,
  },
];

const serviceLinks = [
  {
    name: "Web Development",
    path: "/services",
    icon: Code2,
  },
  {
    name: "Mobile Apps",
    path: "/services",
    icon: Smartphone,
  },
  {
    name: "Dashboards",
    path: "/services",
    icon: Briefcase,
  },
  {
    name: "Backend APIs",
    path: "/services",
    icon: Settings,
  },
];

const socialLinks = [
  {
    name: "Email",
    href: "mailto:sadamkeyow2@gmail.com",
    icon: Mail,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/252619818501",
    icon: MessageCircle,
  },
  {
    name: "Phone",
    href: "tel:+252619818501",
    icon: Phone,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#071a33] text-white mt-[90px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(245,158,11,0.14),transparent_32%),radial-gradient(circle_at_10%_90%,rgba(59,130,246,0.1),transparent_35%)]" />

      <div className="container-main relative pt-10 md:pt-12">
        {/* TOP CTA */}
        <div className="bg-white/10 border border-white/15 backdrop-blur rounded-[32px] p-6 md:p-10 mb-14">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-[#f59e0b] px-4 py-2 rounded-full font-black text-xs tracking-[0.12em] mb-5">
                <Briefcase size={16} />
                AVAILABLE FOR PROJECTS
              </div>

              <h2 className="text-3xl md:text-5xl font-black leading-tight">
                Have a project idea?
              </h2>

              <p className="text-gray-300 text-lg leading-8 mt-4 max-w-2xl">
                Let’s build a modern website, dashboard, admin panel, API
                system, or mobile-friendly digital product with clean design and
                reliable structure.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#f59e0b] text-[#071323] rounded-xl px-7 py-4 font-black hover:bg-[#fbbf24] transition"
              >
                Start a Project <ArrowRight size={19} />
              </Link>

              <a
                href="mailto:sadamkeyow2@gmail.com"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white rounded-xl px-7 py-4 font-black hover:border-[#f59e0b] hover:text-[#f59e0b] transition"
              >
                Email Me <Mail size={19} />
              </a>
            </div>
          </div>
        </div>

        {/* MAIN FOOTER */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14">
          {/* BRAND */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block">
              <h3 className="text-2xl md:text-3xl font-black tracking-tight">
                Sadam Hussein
                <span className="block text-[#f59e0b]">Mohamed</span>
              </h3>
            </Link>

            <p className="text-gray-300 leading-8 mt-5 max-w-sm">
              Full-Stack Web and Mobile Developer building modern websites,
              dashboards, business systems, APIs, and responsive digital
              products.
            </p>

            <div className="flex gap-3 mt-7">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center hover:bg-[#f59e0b] hover:border-[#f59e0b] transition group"
                    aria-label={item.name}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <Icon
                      size={19}
                      className="text-[#f59e0b] group-hover:text-[#071323]"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-white font-black text-lg mb-6">Navigation</h4>

            <div className="space-y-3">
              {navigationLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="group flex items-center gap-3 text-gray-300 hover:text-[#f59e0b] transition"
                  >
                    <span className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#f59e0b] group-hover:border-[#f59e0b] transition">
                      <Icon
                        size={16}
                        className="text-[#f59e0b] group-hover:text-[#071323]"
                      />
                    </span>

                    <span className="font-bold">{link.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-white font-black text-lg mb-6">Services</h4>

            <div className="space-y-3">
              {serviceLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="group flex items-center gap-3 text-gray-300 hover:text-[#f59e0b] transition"
                  >
                    <span className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#f59e0b] group-hover:border-[#f59e0b] transition">
                      <Icon
                        size={16}
                        className="text-[#f59e0b] group-hover:text-[#071323]"
                      />
                    </span>

                    <span className="font-bold">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-black text-lg mb-6">Contact</h4>

            <div className="space-y-5">
              <a
                href="mailto:sadamkeyow2@gmail.com"
                className="flex items-start gap-3 text-gray-300 hover:text-[#f59e0b] transition"
              >
                <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-[#f59e0b]" />
                </span>

                <span>
                  <span className="block font-black text-white">Email</span>
                  <span className="text-sm">sadamkeyow2@gmail.com</span>
                </span>
              </a>

              <a
                href="https://wa.me/252619818501"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-300 hover:text-[#f59e0b] transition"
              >
                <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MessageCircle size={18} className="text-[#f59e0b]" />
                </span>

                <span>
                  <span className="block font-black text-white">WhatsApp</span>
                  <span className="text-sm">+252 61 981 8501</span>
                </span>
              </a>

              <a
                href="tel:+252619818501"
                className="flex items-start gap-3 text-gray-300 hover:text-[#f59e0b] transition"
              >
                <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-[#f59e0b]" />
                </span>

                <span>
                  <span className="block font-black text-white">Phone</span>
                  <span className="text-sm">+252 61 981 8501</span>
                </span>
              </a>

              <div className="flex items-start gap-3 text-gray-300">
                <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-[#f59e0b]" />
                </span>

                <span>
                  <span className="block font-black text-white">Location</span>
                  <span className="text-sm">Mogadishu, Somalia</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 py-7 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5">
          <p className="text-gray-400 text-sm">
            © 2026 Sadam Hussein Mohamed. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5 text-sm text-gray-400">
            <Link to="/contact" className="hover:text-[#f59e0b] transition">
              Privacy Policy
            </Link>

            <Link to="/contact" className="hover:text-[#f59e0b] transition">
              Terms of Service
            </Link>

            <Link to="/contact" className="hover:text-[#f59e0b] transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}