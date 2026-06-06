import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  GitBranch,
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
  Terminal,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "../assets/sadam.jpg";

const specialties = [
  {
    icon: Monitor,
    title: "WEB APPLICATIONS",
  },
  {
    icon: BarChart3,
    title: "BUSINESS DASHBOARDS",
  },
  {
    icon: Server,
    title: "API DEVELOPMENT",
  },
  {
    icon: Smartphone,
    title: "MOBILE-FIRST DESIGN",
  },
];

const techStacks = [
  {
    icon: Code2,
    title: "Modern Frontend Development",
    desc: "Responsive interfaces, clean components, smooth user experience, and professional layouts.",
    tools: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript", "Vite"],
  },
  {
    icon: Server,
    title: "Backend & API Development",
    desc: "Secure backend systems, REST APIs, authentication, business logic, and database-connected apps.",
    tools: ["Node.js", "Express.js", "Django", "REST APIs", "JWT Auth", "MVC Structure"],
  },
  {
    icon: Database,
    title: "Database & System Logic",
    desc: "Organized database structures for dashboards, admin panels, reports, and real business systems.",
    tools: ["MySQL", "MongoDB", "PostgreSQL", "Firebase", "Data Modeling", "CRUD Systems"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Mobile-first and cross-platform applications focused on speed, usability, and clean interface design.",
    tools: ["React Native", "Flutter", "Expo", "Mobile UI", "Responsive UX", "API Integration"],
  },
];

const projects = [
  {
    title: "SMS Sending System",
    category: "Business System",
    desc: "A professional SMS platform for bulk messaging, contact upload, scheduling, and delivery tracking.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Business Admin Dashboard",
    category: "Dashboard",
    desc: "A modern dashboard for managing users, reports, analytics, operations, and business workflows.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Home() {
  const fullName = "Sadam Hussein Mohamed";
  const [typedName, setTypedName] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (!isDeleting && typedName.length < fullName.length) {
      timer = setTimeout(() => {
        setTypedName(fullName.slice(0, typedName.length + 1));
      }, 420);
    } else if (!isDeleting && typedName.length === fullName.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 3200);
    } else if (isDeleting && typedName.length > 0) {
      timer = setTimeout(() => {
        setTypedName(fullName.slice(0, typedName.length - 1));
      }, 220);
    } else if (isDeleting && typedName.length === 0) {
      timer = setTimeout(() => {
        setIsDeleting(false);
      }, 900);
    }

    return () => clearTimeout(timer);
  }, [typedName, isDeleting]);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071a33] text-white min-h-[860px] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(245,158,11,0.18),transparent_35%),radial-gradient(circle_at_15%_80%,rgba(59,130,246,0.12),transparent_35%)]" />

        <div className="container-main relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-24">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-[#f59e0b] rounded-full px-4 py-2 text-xs md:text-sm font-black tracking-[0.12em] mb-7"
            >
              <BadgeCheck size={18} />
              AVAILABLE FOR NEW PROJECTS
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.22, duration: 0.65 }}
              className="text-gray-300 text-base md:text-lg font-semibold mb-3"
            >
              Hi, I’m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.75 }}
              className="leading-[1.08] tracking-tight"
            >
              <span
                className="block min-h-[56px] md:min-h-[78px] lg:min-h-[86px] text-white text-[36px] md:text-[54px] lg:text-[60px] font-bold"
                style={{
                  fontFamily:
                    "Georgia, Cambria, 'Times New Roman', Times, serif",
                }}
              >
                {typedName}
                <span className="text-[#f59e0b] animate-pulse">|</span>
              </span>

              <span className="block text-[#f59e0b] text-[32px] md:text-[48px] lg:text-[56px] font-extrabold mt-4">
                Full-Stack Web &
              </span>

              <span className="block text-white text-[32px] md:text-[48px] lg:text-[56px] font-extrabold">
                Mobile Developer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.7 }}
              className="text-gray-300 text-base md:text-lg leading-8 mt-7 max-w-xl"
            >
              I build modern websites, mobile apps, dashboards, and business
              systems using clean code, responsive design, and scalable
              full-stack architecture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 mt-9"
            >
              <Link to="/projects" className="orange-btn">
                View My Work <ArrowRight size={20} />
              </Link>

              <Link to="/contact" className="dark-btn">
                Hire Me
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2 }}
            className="relative order-1 lg:order-2 w-full max-w-[460px] mx-auto"
          >
            <div className="absolute -inset-5 rounded-[36px] bg-[#f59e0b]/15 blur-2xl" />

            <div className="relative rounded-[32px] border border-white/15 bg-white/5 overflow-hidden shadow-2xl">
              <img
                src={profileImage}
                alt="Sadam Hussein Mohamed"
                className="w-full h-[430px] sm:h-[510px] lg:h-[540px] object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071a33]/85 via-[#071a33]/10 to-transparent" />

              {/* Main professional badge */}
              <div className="absolute left-5 right-5 bottom-5 grid gap-3">
                <div className="bg-[#071a33]/85 border border-white/15 backdrop-blur-xl rounded-2xl p-5 flex items-center gap-4 shadow-xl">
                  <div className="w-13 h-13 rounded-2xl bg-[#f59e0b] flex items-center justify-center shrink-0 p-3">
                    <Terminal className="text-[#071323]" size={25} />
                  </div>

                  <div>
                    <p className="text-white text-lg font-black leading-tight">
                      Full-Stack Web Dev
                    </p>
                    <p className="text-sm text-gray-300 font-bold mt-1">
                      Frontend • Backend • APIs
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/10 border border-white/15 backdrop-blur-xl rounded-2xl p-4 hover:bg-white/15 transition">
                    <div className="w-10 h-10 rounded-xl bg-[#f59e0b]/15 flex items-center justify-center mb-3">
                      <Server className="text-[#f59e0b]" size={22} />
                    </div>
                    <p className="text-white text-sm font-black">
                      Backend Logic
                    </p>
                    <p className="text-gray-300 text-xs font-semibold mt-1">
                      APIs • Auth • Data
                    </p>
                  </div>

                  <div className="bg-white/10 border border-white/15 backdrop-blur-xl rounded-2xl p-4 hover:bg-white/15 transition">
                    <div className="w-10 h-10 rounded-xl bg-[#f59e0b]/15 flex items-center justify-center mb-3">
                      <Smartphone className="text-[#f59e0b]" size={22} />
                    </div>
                    <p className="text-white text-sm font-black">
                      Responsive UI
                    </p>
                    <p className="text-gray-300 text-xs font-semibold mt-1">
                      Mobile • Tablet • Web
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating system badge */}
            <div className="hidden sm:flex absolute -right-4 top-8 bg-white rounded-2xl shadow-xl border border-gray-200 px-4 py-3 items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#071a33] flex items-center justify-center">
                <Monitor className="text-[#f59e0b]" size={21} />
              </div>

              <div>
                <p className="text-[#071323] text-sm font-black">
                  Modern Systems
                </p>
                <p className="text-gray-500 text-xs font-bold">
                  Web • Mobile • Dashboard
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SPECIALTIES */}
      <section className="bg-white border-b border-gray-200 py-12">
        <div className="container-main text-center">
          <p className="text-sm font-black tracking-[0.22em] mb-9 text-gray-800">
            SPECIALIZED IN MODERN FULL-STACK SOLUTIONS
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {specialties.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-gray-200 bg-[#f7f8fa] px-4 py-6 hover:bg-[#071a33] hover:border-[#071a33] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-orange-100 flex items-center justify-center mb-4 group-hover:bg-[#f59e0b] transition">
                    <Icon
                      size={24}
                      className="text-[#8a5200] group-hover:text-[#071323]"
                    />
                  </div>

                  <p className="text-gray-500 group-hover:text-white font-black text-xs md:text-sm tracking-[0.12em]">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT MINI */}
      <section className="section-padding bg-[#f7f8fa]">
        <div className="container-main grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80"
              alt="Full-stack developer workspace"
              className="rounded-[32px] shadow-xl w-full h-[420px] object-cover"
            />

            <div className="absolute -bottom-8 right-3 bg-[#071a33] text-white rounded-2xl p-7 w-60 shadow-2xl">
              <div className="w-12 h-12 rounded-xl bg-[#f59e0b] flex items-center justify-center mb-4">
                <Code2 className="text-[#071323]" />
              </div>

              <h3 className="text-4xl font-black">Full-Stack</h3>

              <p className="text-gray-300 mt-2">
                Web applications, dashboards, APIs, and responsive business
                systems.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-orange-100 text-[#8a5200] px-4 py-2 rounded-full font-black text-xs tracking-[0.12em] mb-6">
              <Rocket size={16} />
              MODERN FULL-STACK SOLUTIONS
            </div>

            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Building Digital Systems
              <br />
              With Purpose
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-7 max-w-xl">
              I design and develop full-stack solutions that combine attractive
              interfaces with strong system functionality. From dashboards and
              admin panels to business platforms and responsive websites, I
              focus on building software that is practical, clean, and ready for
              real users.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mt-10">
              <div className="group">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4 group-hover:bg-[#071a33] transition">
                  <Layers className="text-[#8a5200] group-hover:text-white" />
                </div>

                <h4 className="font-black mb-2">Practical System Design</h4>

                <p className="text-gray-600 leading-7">
                  I turn business requirements into organized pages, workflows,
                  and features that are simple to manage.
                </p>
              </div>

              <div className="group">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4 group-hover:bg-[#071a33] transition">
                  <Server className="text-[#8a5200] group-hover:text-white" />
                </div>

                <h4 className="font-black mb-2">
                  Reliable Full-Stack Workflow
                </h4>

                <p className="text-gray-600 leading-7">
                  I connect frontend design, backend logic, APIs, and databases
                  into one smooth working system.
                </p>
              </div>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-black mt-10 hover:text-[#8a5200]"
            >
              Explore my development approach <ArrowRight size={19} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* TECH ECOSYSTEM */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-[#8a5200] px-4 py-2 rounded-full font-black text-xs tracking-[0.12em] mb-6">
              <Code2 size={16} />
              PROFESSIONAL DEVELOPMENT STACK
            </div>

            <h2 className="text-4xl md:text-5xl font-black">
              Modern Full-Stack & Mobile Technologies
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-5">
              I use modern frontend, backend, database, and mobile technologies
              to build fast, secure, scalable, and user-friendly digital
              products for real business needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {techStacks.map((stack, index) => {
              const Icon = stack.icon;

              return (
                <motion.div
                  key={stack.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group bg-[#f7f8fa] border border-gray-200 rounded-[28px] p-8 md:p-9 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#071a33] flex items-center justify-center shrink-0 group-hover:bg-[#f59e0b] transition">
                      <Icon
                        className="text-white group-hover:text-[#071323]"
                        size={26}
                      />
                    </div>

                    <div>
                      <h3 className="text-2xl md:text-3xl font-black mb-3">
                        {stack.title}
                      </h3>

                      <p className="text-gray-600 leading-7">{stack.desc}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-8">
                    {stack.tools.map((tool) => (
                      <span
                        key={tool}
                        className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-black text-gray-700 group-hover:bg-orange-50 group-hover:border-orange-200 transition"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              viewport={{ once: true }}
              className="bg-[#071a33] text-white rounded-3xl p-8 shadow-xl"
            >
              <ShieldCheck className="text-[#f59e0b] mb-5" size={34} />

              <h3 className="text-xl font-black mb-3">Secure by Design</h3>

              <p className="text-gray-300 leading-7">
                Authentication, validation, protected routes, clean API
                structure, and safe data handling for reliable applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-[#f7f8fa] border border-gray-200 rounded-3xl p-8 shadow-sm"
            >
              <Monitor className="text-[#8a5200] mb-5" size={34} />

              <h3 className="text-xl font-black mb-3">Responsive UI</h3>

              <p className="text-gray-600 leading-7">
                Desktop, tablet, and mobile layouts designed with clean spacing,
                readable content, and professional structure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#f7f8fa] border border-gray-200 rounded-3xl p-8 shadow-sm"
            >
              <GitBranch className="text-[#8a5200] mb-5" size={34} />

              <h3 className="text-xl font-black mb-3">Clean Workflow</h3>

              <p className="text-gray-600 leading-7">
                Organized components, reusable code, proper routing, clear
                folder structure, and maintainable project architecture.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section-padding bg-[#f7f8fa]">
        <div className="container-main">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-8 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-100 text-[#8a5200] px-4 py-2 rounded-full font-black text-xs tracking-[0.12em] mb-6">
                <Sparkles size={16} />
                FEATURED WORK
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-5">
                Featured Projects
              </h2>

              <p className="text-gray-600 text-lg max-w-xl leading-8">
                Practical projects focused on clean development, business
                workflows, and professional user experience.
              </p>
            </div>

            <Link to="/projects" className="outline-btn">
              View All Projects
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-9">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="rounded-[28px] overflow-hidden bg-white border border-gray-200 shadow-sm group-hover:shadow-2xl transition">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[330px] object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="mt-6">
                  <span className="inline-flex items-center gap-2 bg-orange-100 text-[#8a5200] rounded-full px-4 py-2 text-xs font-black tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
                    {project.category}
                  </span>
                </div>

                <h3 className="text-3xl font-black mt-4">{project.title}</h3>

                <p className="text-gray-600 leading-7 mt-3">{project.desc}</p>

                <Link
                  to="/projects/sms-sending-system"
                  className="inline-flex items-center gap-2 font-black mt-6 hover:text-[#8a5200]"
                >
                  Case Study <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-[#8a5200] px-4 py-2 rounded-full font-black text-xs tracking-[0.12em] mb-6">
              <Rocket size={16} />
              SERVICES
            </div>

            <h2 className="text-4xl md:text-5xl font-black">
              How I Can Help You
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Rocket,
                title: "Product MVP",
                desc: "Fast development of working products to test ideas and launch quickly.",
              },
              {
                icon: TrendingUp,
                title: "Business Systems",
                desc: "Dashboards, admin panels, and systems that improve daily operations.",
              },
              {
                icon: Users,
                title: "Project Support",
                desc: "I can work independently or support your team with clean development.",
              },
            ].map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#f7f8fa] border border-gray-200 rounded-[28px] p-10 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#071a33] flex items-center justify-center mx-auto mb-8">
                    <Icon className="text-[#f59e0b]" />
                  </div>

                  <h3 className="text-2xl font-black mb-5">{service.title}</h3>
                  <p className="text-gray-600 leading-7">{service.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f7f8fa] pb-28 pt-24 text-center">
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
                <ExternalLink size={16} />
                AVAILABLE FOR PROJECTS
              </div>

              <h2 className="text-4xl md:text-6xl font-black">
                Ready to Build Something Great?
              </h2>

              <p className="text-gray-300 text-lg leading-8 mt-8 max-w-2xl mx-auto">
                I’m available for new projects. Let’s work together to create a
                modern website, mobile app, dashboard, or business system.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">
                <Link to="/contact" className="orange-btn">
                  <Mail size={19} />
                  Get in Touch
                </Link>

                <Link to="/contact" className="dark-btn">
                  <MessageCircle size={19} />
                  WhatsApp / Call
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}