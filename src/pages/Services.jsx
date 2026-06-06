import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  Code2,
  Database,
  Globe,
  Layers,
  Mail,
  MessageCircle,
  Monitor,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code2,
    title: "Web Application Development",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    desc: "I build modern, responsive, and professional web applications for businesses, organizations, and personal brands.",
    items: [
      "Business websites",
      "Company portals",
      "Admin panels",
      "React.js interfaces",
      "Responsive pages",
      "Clean UI structure",
    ],
  },
  {
    icon: Monitor,
    title: "Dashboard & Admin Systems",
    category: "Business Systems",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    desc: "I design and develop dashboards that help users manage data, track activity, view reports, and control business operations.",
    items: [
      "Admin dashboards",
      "Analytics cards",
      "Reports pages",
      "User management",
      "Data tables",
      "Activity tracking",
    ],
  },
  {
    icon: Server,
    title: "Backend API Development",
    category: "Backend Services",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    desc: "I create backend APIs and server-side logic that connect your frontend with databases, authentication, and business workflows.",
    items: [
      "REST APIs",
      "Authentication",
      "Database logic",
      "CRUD operations",
      "Validation",
      "Secure routes",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    category: "Mobile Apps",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
    desc: "I build mobile-friendly experiences and cross-platform app interfaces for Android and iOS using modern development workflows.",
    items: [
      "React Native apps",
      "Flutter interfaces",
      "Mobile UI screens",
      "API integration",
      "Responsive UX",
      "Smooth navigation",
    ],
  },
];

const process = [
  {
    icon: Target,
    step: "01",
    title: "Understand",
    desc: "I review the project idea, target users, required pages, and business goals.",
  },
  {
    icon: Layers,
    step: "02",
    title: "Plan",
    desc: "I organize the page structure, modules, features, database flow, and user journey.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Build",
    desc: "I develop the frontend, backend APIs, database logic, and responsive interface.",
  },
  {
    icon: ShieldCheck,
    step: "04",
    title: "Test",
    desc: "I check responsiveness, links, forms, routes, APIs, and common errors.",
  },
  {
    icon: Rocket,
    step: "05",
    title: "Launch",
    desc: "I prepare the final project for online use, presentation, or client delivery.",
  },
];

const packages = [
  {
    icon: Globe,
    title: "Starter Website",
    desc: "Best for personal brands, small businesses, and simple company websites.",
    includes: [
      "Responsive landing page",
      "Professional sections",
      "Contact section",
      "Clean modern design",
    ],
  },
  {
    icon: Monitor,
    title: "Business System",
    desc: "Best for dashboards, admin panels, data systems, and business workflows.",
    includes: [
      "Dashboard interface",
      "Admin pages",
      "Tables and forms",
      "Backend-ready structure",
    ],
  },
  {
    icon: Rocket,
    title: "Full Product Build",
    desc: "Best for complete web apps, SaaS MVPs, or real online platforms.",
    includes: [
      "Frontend development",
      "Backend API structure",
      "Database workflow",
      "Deployment-ready setup",
    ],
  },
];

const serviceValues = [
  {
    icon: ShieldCheck,
    title: "Clean & Secure",
    desc: "Structured code, form validation, safe routing, and secure API workflow.",
  },
  {
    icon: Sparkles,
    title: "Modern UI",
    desc: "Professional layouts, clean spacing, readable content, and consistent design.",
  },
  {
    icon: Database,
    title: "Real System Logic",
    desc: "Database-ready flow, CRUD structure, dashboards, reports, and practical features.",
  },
];

export default function Services() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071a33] text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(245,158,11,0.18),transparent_35%),radial-gradient(circle_at_15%_80%,rgba(59,130,246,0.12),transparent_35%)]" />

        <div className="container-main relative">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-[#f59e0b] px-4 py-2 rounded-full font-black text-xs tracking-[0.12em] mb-7"
            >
              <BadgeCheck size={16} />
              PROFESSIONAL SERVICES
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-7xl font-black leading-tight tracking-tight"
            >
              Services Built
              <span className="block text-[#f59e0b]">For Real Projects.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-gray-300 text-lg leading-8 mt-7 max-w-3xl"
            >
              I help individuals, businesses, and organizations build modern
              websites, dashboards, backend APIs, database systems, and
              mobile-friendly digital products with clean design and reliable
              structure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="grid sm:grid-cols-3 gap-4 mt-12 max-w-3xl"
            >
              {[
                { value: "4", label: "Main Services" },
                { value: "100%", label: "Responsive Focus" },
                { value: "Full", label: "Project Workflow" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white/10 border border-white/15 backdrop-blur rounded-2xl p-5"
                >
                  <h3 className="text-3xl font-black text-[#f59e0b]">
                    {item.value}
                  </h3>
                  <p className="text-gray-300 font-bold mt-1">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section-padding bg-[#f7f8fa]">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-[#8a5200] px-4 py-2 rounded-full font-black text-xs tracking-[0.12em] mb-6">
              <BriefcaseIcon />
              WHAT I OFFER
            </div>

            <h2 className="text-4xl md:text-5xl font-black">
              Digital Services
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-5">
              Services focused on building practical, modern, and professional
              digital products that are ready for real users.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group bg-white border border-gray-200 rounded-[28px] overflow-hidden shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-[230px] overflow-hidden bg-[#071a33]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    <div className="absolute top-4 left-4 bg-white/15 border border-white/20 backdrop-blur text-white px-4 py-2 rounded-full text-xs font-black">
                      {service.category}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                      <div>
                        <h3 className="text-white text-2xl md:text-3xl font-black leading-tight">
                          {service.title}
                        </h3>
                      </div>

                      <div className="w-14 h-14 rounded-2xl bg-[#f59e0b] flex items-center justify-center shrink-0">
                        <Icon className="text-[#071323]" size={25} />
                      </div>
                    </div>
                  </div>

                  <div className="p-7">
                    <p className="text-gray-600 leading-7">{service.desc}</p>

                    <div className="grid sm:grid-cols-2 gap-3 mt-6">
                      {service.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2 text-gray-700 font-bold text-sm"
                        >
                          <CheckCircle2 className="text-[#8a5200]" size={17} />
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className="mt-7">
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center gap-2 w-full bg-black text-white rounded-xl py-4 font-black hover:bg-[#8a5200] transition"
                      >
                        Request This Service <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-[#8a5200] px-4 py-2 rounded-full font-black text-xs tracking-[0.12em] mb-6">
              <Sparkles size={16} />
              SERVICE QUALITY
            </div>

            <h2 className="text-4xl md:text-5xl font-black">
              What You Get
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-5">
              Every service is delivered with a focus on usability, structure,
              performance, and professional presentation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {serviceValues.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-[#f7f8fa] border border-gray-200 rounded-[28px] p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#071a33] flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-[#f59e0b]" size={25} />
                  </div>

                  <h3 className="text-xl font-black mb-3">{item.title}</h3>

                  <p className="text-gray-600 leading-7">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding bg-[#071a33] text-white">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-[#f59e0b] px-4 py-2 rounded-full font-black text-xs tracking-[0.12em] mb-6">
              <Layers size={16} />
              WORK PROCESS
            </div>

            <h2 className="text-4xl md:text-5xl font-black">
              From Idea to Delivery
            </h2>

            <p className="text-gray-300 text-lg leading-8 mt-5">
              A clear process helps every project move from concept to working
              product with less confusion and better results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {process.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition"
                >
                  <div className="w-12 h-12 rounded-full border border-white/15 bg-white/5 flex items-center justify-center mx-auto mb-5">
                    <Icon className="text-[#f59e0b]" size={22} />
                  </div>

                  <p className="text-[#f59e0b] font-black text-sm">
                    {item.step}
                  </p>

                  <h3 className="font-black text-lg mt-2">{item.title}</h3>

                  <p className="text-gray-400 text-sm leading-6 mt-3">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="section-padding bg-[#f7f8fa]">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-[#8a5200] px-4 py-2 rounded-full font-black text-xs tracking-[0.12em] mb-6">
              <BarChart3 size={16} />
              SERVICE OPTIONS
            </div>

            <h2 className="text-4xl md:text-5xl font-black">
              Choose the Right Level
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-5">
              These options help visitors understand what type of project they
              can request.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {packages.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className={`rounded-[28px] border p-8 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ${
                    index === 1
                      ? "bg-[#071a33] text-white border-[#071a33]"
                      : "bg-white text-[#071323] border-gray-200"
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                      index === 1 ? "bg-[#f59e0b]" : "bg-[#071a33]"
                    }`}
                  >
                    <Icon
                      className={index === 1 ? "text-[#071323]" : "text-[#f59e0b]"}
                      size={25}
                    />
                  </div>

                  <h3 className="text-2xl font-black mb-4">{item.title}</h3>

                  <p
                    className={`leading-7 ${
                      index === 1 ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {item.desc}
                  </p>

                  <div className="space-y-3 mt-7">
                    {item.includes.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle2
                          className={
                            index === 1 ? "text-[#f59e0b]" : "text-[#8a5200]"
                          }
                          size={18}
                        />
                        <span
                          className={`font-bold ${
                            index === 1 ? "text-gray-200" : "text-gray-700"
                          }`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className={`mt-8 inline-flex items-center justify-center gap-2 w-full rounded-xl py-4 font-black transition ${
                      index === 1
                        ? "bg-[#f59e0b] text-[#071323] hover:bg-[#fbbf24]"
                        : "bg-black text-white hover:bg-[#8a5200]"
                    }`}
                  >
                    Discuss Project <ArrowRight size={18} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f7f8fa] pb-28 pt-8 text-center">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-black text-white rounded-[32px] px-6 py-20 md:p-20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.18),transparent_35%)]" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-[#f59e0b] px-4 py-2 rounded-full font-black text-xs tracking-[0.12em] mb-7">
                <Rocket size={16} />
                READY TO START
              </div>

              <h2 className="text-4xl md:text-6xl font-black leading-tight">
                Have a project you want to build?
              </h2>

              <p className="text-gray-300 text-lg leading-8 mt-6 max-w-2xl mx-auto">
                I can help you turn your idea into a professional website,
                dashboard, admin panel, API system, or mobile-friendly platform.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">
                <Link to="/contact" className="orange-btn">
                  <Mail size={19} />
                  Start a Project
                </Link>

                <Link to="/contact" className="dark-btn">
                  <MessageCircle size={19} />
                  Contact Me
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function BriefcaseIcon() {
  return <Rocket size={16} />;
}