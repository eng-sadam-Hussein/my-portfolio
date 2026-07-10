import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  GitBranch,
  Globe,
  Layers,
  Lightbulb,
  Mail,
  MessageCircle,
  Monitor,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Terminal,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "../assets/sadam.jpg";

const expertise = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Modern websites, dashboards, admin panels, and responsive web applications built with clean structure.",
  },
  {
    icon: Server,
    title: "Backend APIs",
    desc: "Secure APIs, authentication, server logic, and backend workflows for real business systems.",
  },
  {
    icon: Database,
    title: "Database Systems",
    desc: "Organized database structures for dashboards, management systems, reports, and CRUD applications.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Mobile-first and cross-platform app experiences with clean UI and API integration.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Clean & Secure",
    desc: "Structured code, secure data handling, validation, and safe API workflows.",
  },
  {
    icon: Target,
    title: "Business Focused",
    desc: "Every page, form, dashboard, and feature is designed around practical business needs.",
  },
  {
    icon: Monitor,
    title: "Responsive Design",
    desc: "Layouts are built to work smoothly on desktop, tablet, and mobile devices.",
  },
];

const workflow = [
  {
    icon: Lightbulb,
    step: "01",
    title: "Understand",
    desc: "I study the project idea, goals, users, and required system features.",
  },
  {
    icon: Layers,
    step: "02",
    title: "Structure",
    desc: "I plan pages, modules, database structure, and the full workflow.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Develop",
    desc: "I build frontend, backend APIs, database logic, and responsive UI.",
  },
  {
    icon: ShieldCheck,
    step: "04",
    title: "Test",
    desc: "I check forms, routing, responsiveness, APIs, and common bugs.",
  },
  {
    icon: Rocket,
    step: "05",
    title: "Launch",
    desc: "I prepare the project for real usage with final polishing.",
  },
];

const stack = [
  "React.js",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express.js",
  "Django",
  "REST APIs",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
  "React Native",
  "Flutter",
  "Git",
  "Vite",
];

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071a33] text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(245,158,11,0.18),transparent_35%),radial-gradient(circle_at_15%_80%,rgba(59,130,246,0.12),transparent_35%)]" />

        <div className="container-main relative grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-[#f59e0b] px-4 py-2 rounded-full font-black text-xs tracking-[0.12em] mb-7">
              <BadgeCheck size={16} />
              ABOUT SADAM
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              Building Digital Systems
              <span className="block text-[#f59e0b]">With Purpose.</span>
            </h1>

            <p className="text-gray-300 text-lg leading-8 mt-7 max-w-2xl">
              I’m <strong className="text-white">Sadam Hussein Mohamed</strong>,
              a Full-Stack Web and Mobile Developer focused on building real
              digital products: websites, dashboards, admin panels, backend
              APIs, database systems, and mobile-friendly applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link to="/projects" className="orange-btn">
                View My Projects <ArrowRight size={20} />
              </Link>

              <Link to="/contact" className="dark-btn">
                Contact Me
              </Link>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mt-12">
              {[
                {
                  icon: Code2,
                  title: "Full-Stack",
                  desc: "Frontend, backend, APIs",
                },
                {
                  icon: Smartphone,
                  title: "Mobile Ready",
                  desc: "Responsive and app-focused",
                },
                {
                  icon: Database,
                  title: "Database",
                  desc: "MySQL, MongoDB, logic",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="bg-white/10 border border-white/15 backdrop-blur rounded-2xl p-5"
                  >
                    <Icon className="text-[#f59e0b] mb-3" size={24} />
                    <h3 className="font-black text-white">{item.title}</h3>
                    <p className="text-gray-300 text-sm mt-1">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="relative max-w-[460px] mx-auto w-full"
          >
            <div className="absolute -inset-5 bg-[#f59e0b]/15 blur-2xl rounded-[36px]" />

            <div className="relative rounded-[32px] overflow-hidden bg-[#071a33] border border-white/15 shadow-2xl">
              <img
                src={profileImage}
                alt="Sadam Hussein Mohamed"
                className="w-full h-[460px] sm:h-[540px] object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071a33]/80 via-transparent to-transparent" />

              <div className="absolute left-5 right-5 bottom-5 bg-white/10 border border-white/15 backdrop-blur-xl rounded-2xl p-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f59e0b] flex items-center justify-center">
                    <Terminal className="text-[#071323]" />
                  </div>

                  <div>
                    <h3 className="text-white font-black">
                      Full-Stack Web Dev
                    </h3>
                    <p className="text-gray-300 text-sm font-bold">
                      Web Apps • Dashboards • APIs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden sm:flex absolute -right-4 top-8 bg-white rounded-2xl shadow-xl border border-gray-200 px-4 py-3 items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                <Sparkles className="text-[#8a5200]" size={20} />
              </div>
              <div>
                <p className="font-black text-sm text-[#071323]">Modern UI</p>
                <p className="text-gray-500 text-xs font-bold">
                  Clean & responsive
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORE EXPERTISE */}
      <section className="section-padding bg-[#f7f8fa]">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-[#8a5200] px-4 py-2 rounded-full font-black text-xs tracking-[0.12em] mb-6">
              <BriefcaseBusiness size={16} />
              CORE EXPERTISE
            </div>

            <h2 className="text-4xl md:text-5xl font-black">
              What I Build Best
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-5">
              I focus on full-stack systems that combine professional interface
              design, reliable backend logic, organized databases, and smooth
              user experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group bg-white border border-gray-200 rounded-[28px] p-7 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#071a33] flex items-center justify-center mb-6 group-hover:bg-[#f59e0b] transition">
                    <Icon
                      className="text-white group-hover:text-[#071323]"
                      size={25}
                    />
                  </div>

                  <h3 className="text-xl font-black mb-3">{item.title}</h3>

                  <p className="text-gray-600 leading-7 text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY TRUST ME */}
      <section className="section-padding bg-white">
        <div className="container-main grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80"
              alt="Professional developer workspace"
              className="rounded-[32px] shadow-xl w-full h-[410px] object-cover"
            />

            <div className="absolute -bottom-8 left-6 right-6 bg-[#071a33] text-white border border-white/10 shadow-xl rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#f59e0b] flex items-center justify-center">
                  <GitBranch className="text-[#071323]" />
                </div>

                <div>
                  <h3 className="font-black text-xl">
                    Reliable Development Process
                  </h3>
                  <p className="text-gray-300 mt-1">
                    Clear structure from idea to delivery.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-orange-100 text-[#8a5200] px-4 py-2 rounded-full font-black text-xs tracking-[0.12em] mb-6">
              <Users size={16} />
              WHY CLIENTS TRUST ME
            </div>

            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Practical Thinking,
              <br />
              Professional Delivery.
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-6">
              I don’t only focus on how a page looks. I focus on how the full
              system works: user flow, dashboard logic, forms, database
              structure, API behavior, and long-term maintainability.
            </p>

            <div className="space-y-5 mt-8">
              {values.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="bg-[#f7f8fa] border border-gray-200 rounded-2xl p-6 flex items-start gap-4 shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#071a33] flex items-center justify-center shrink-0">
                      <Icon className="text-[#f59e0b]" size={22} />
                    </div>

                    <div>
                      <h3 className="font-black text-xl mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-7">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="section-padding bg-[#f7f8fa]">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-[#8a5200] px-4 py-2 rounded-full font-black text-xs tracking-[0.12em] mb-6">
              <Globe size={16} />
              TECHNOLOGY STACK
            </div>

            <h2 className="text-4xl md:text-5xl font-black">
              Tools I Work With
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-5">
              My development stack covers frontend, backend, database, mobile,
              version control, and deployment-ready workflows.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {stack.map((tool) => (
              <span
                key={tool}
                className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-3 font-black text-gray-700 hover:bg-orange-50 hover:border-orange-200 transition"
              >
                <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="section-padding bg-[#071a33] text-white">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-[#f59e0b] px-4 py-2 rounded-full font-black text-xs tracking-[0.12em] mb-6">
              <GitBranch size={16} />
              MY WORKFLOW
            </div>

            <h2 className="text-4xl md:text-5xl font-black">
              From Idea to Working Product
            </h2>

            <p className="text-gray-300 text-lg leading-8 mt-5">
              A clear development process helps every project move from concept
              to usable system with less confusion and better results.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-5">
            {workflow.map((item, index) => {
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
                <Rocket size={16} />
                AVAILABLE FOR PROJECTS
              </div>

              <h2 className="text-4xl md:text-6xl font-black leading-tight">
                Ready to Build a Real Digital Product?
              </h2>

              <p className="text-gray-300 text-lg leading-8 mt-6 max-w-2xl mx-auto">
                I’m available for websites, dashboards, admin panels, API
                systems, and mobile-friendly platforms. Let’s discuss your
                project and build something useful.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">
                <Link to="/contact" className="orange-btn">
                  <Mail size={19} />
                  Start a Project
                </Link>

                <Link to="/projects" className="dark-btn">
                  <MessageCircle size={19} />
                  View Portfolio
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}