import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
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
  Search,
  Server,
  ShieldCheck,
  Smartphone,
  Terminal,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const coreExpertise = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Responsive websites, dashboards, admin panels, and business web applications built with clean structure.",
  },
  {
    icon: Server,
    title: "Backend APIs",
    desc: "REST APIs, authentication, backend logic, and secure workflows for real business systems.",
  },
  {
    icon: Database,
    title: "Database Systems",
    desc: "Organized database structures for management systems, dashboards, reports, and CRUD applications.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Mobile-first interfaces and cross-platform app experiences connected with backend APIs.",
  },
];

const skillGroups = [
  {
    icon: Code2,
    title: "Frontend Development",
    desc: "Building modern user interfaces with clean components, responsive layouts, and smooth user experience.",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Vite",
    ],
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "Developing secure backend systems, APIs, authentication, routing, and business logic.",
    skills: [
      "Node.js",
      "Express.js",
      "Django",
      "REST APIs",
      "JWT Auth",
      "MVC Structure",
      "API Integration",
      "Server Logic",
    ],
  },
  {
    icon: Database,
    title: "Database & Data",
    desc: "Creating reliable data structures for dashboards, admin panels, reports, and real-world systems.",
    skills: [
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "Firebase",
      "CRUD Systems",
      "Data Modeling",
      "Relationships",
      "Reports",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    desc: "Building mobile-friendly and cross-platform app experiences with clean UI and API connectivity.",
    skills: [
      "React Native",
      "Flutter",
      "Expo",
      "Mobile UI",
      "Responsive UX",
      "Android Layouts",
      "iOS Layouts",
      "API Connected Apps",
    ],
  },
];

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Secure by Design",
    desc: "Authentication, validation, protected routes, and safe data handling.",
  },
  {
    icon: Monitor,
    title: "Responsive Interfaces",
    desc: "Clean layouts for desktop, tablet, and mobile devices.",
  },
  {
    icon: Layers,
    title: "Scalable Structure",
    desc: "Reusable components, clean folders, and maintainable architecture.",
  },
];

const workflow = [
  {
    icon: Search,
    step: "01",
    title: "Discovery",
    desc: "Understanding project goals, users, requirements, and business needs.",
  },
  {
    icon: Layers,
    step: "02",
    title: "Planning",
    desc: "Structuring pages, modules, data flow, and system architecture.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Development",
    desc: "Building frontend, backend APIs, database logic, and responsive UI.",
  },
  {
    icon: ShieldCheck,
    step: "04",
    title: "Testing",
    desc: "Checking forms, APIs, routing, responsiveness, and system behavior.",
  },
  {
    icon: Rocket,
    step: "05",
    title: "Launch",
    desc: "Preparing the project for real usage with final polishing.",
  },
  {
    icon: GitBranch,
    step: "06",
    title: "Support",
    desc: "Improving, updating, and maintaining the project when needed.",
  },
];

const tools = [
  "VS Code",
  "Git",
  "GitHub",
  "Postman",
  "Figma",
  "Chrome DevTools",
  "NPM",
  "Vite",
  "XAMPP",
  "MySQL Workbench",
];

export default function Skills() {
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
              TECHNICAL SKILLS
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-7xl font-black leading-tight tracking-tight"
            >
              Full-Stack Skills
              <span className="block text-[#f59e0b]">
                Built for Real Projects.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-gray-300 text-lg leading-8 mt-7 max-w-3xl"
            >
              A practical development stack for building responsive websites,
              dashboards, APIs, database systems, and mobile-friendly digital
              products with clean structure and professional workflow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="grid sm:grid-cols-3 gap-4 mt-12 max-w-3xl"
            >
              {[
                { value: "4", label: "Core Areas" },
                { value: "20+", label: "Technologies" },
                { value: "100%", label: "Responsive Focus" },
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

      {/* CORE EXPERTISE */}
      <section className="section-padding bg-[#f7f8fa]">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-[#8a5200] px-4 py-2 rounded-full font-black text-xs tracking-[0.12em] mb-6">
              <Rocket size={16} />
              CORE EXPERTISE
            </div>

            <h2 className="text-4xl md:text-5xl font-black">
              What I Build Best
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-5">
              My skills focus on real digital products: websites, dashboards,
              APIs, databases, and mobile experiences that are easy to use and
              ready for online presentation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreExpertise.map((item, index) => {
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

      {/* MAIN SKILLS */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-[#8a5200] px-4 py-2 rounded-full font-black text-xs tracking-[0.12em] mb-6">
              <Terminal size={16} />
              MODERN DEVELOPMENT STACK
            </div>

            <h2 className="text-4xl md:text-5xl font-black">
              Technologies I Work With
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-5">
              A practical stack for building complete applications from user
              interface to backend logic, database structure, and mobile
              experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <motion.div
                  key={group.title}
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
                        {group.title}
                      </h3>

                      <p className="text-gray-600 leading-7">{group.desc}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-8">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-black text-gray-700 group-hover:bg-orange-50 group-hover:border-orange-200 transition"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="section-padding bg-[#f7f8fa]">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-orange-100 text-[#8a5200] px-4 py-2 rounded-full font-black text-xs tracking-[0.12em] mb-6">
                <Users size={16} />
                WHY CLIENTS TRUST ME
              </div>

              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Clean Development,
                <br />
                Reliable Delivery.
              </h2>

              <p className="text-gray-600 text-lg leading-8 mt-6">
                I focus on building systems that look professional, work
                smoothly, and remain easy to manage after delivery.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65 }}
              viewport={{ once: true }}
              className="grid gap-5"
            >
              {trustItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="bg-white border border-gray-200 rounded-2xl p-6 flex items-start gap-4 shadow-sm"
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-orange-100 text-[#8a5200] px-4 py-2 rounded-full font-black text-xs tracking-[0.12em] mb-6">
                <Globe size={16} />
                DEVELOPMENT TOOLS
              </div>

              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Tools That Support
                <br />
                Professional Workflow
              </h2>

              <p className="text-gray-600 text-lg leading-8 mt-6">
                I use reliable development tools for coding, version control,
                API testing, design review, database management, and project
                setup.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center gap-2 bg-[#f7f8fa] border border-gray-200 rounded-full px-5 py-3 font-black text-gray-700 hover:bg-orange-50 hover:border-orange-200 transition"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65 }}
              viewport={{ once: true }}
              className="bg-[#071a33] text-white rounded-[32px] p-8 md:p-10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.18),transparent_35%)]" />

              <div className="relative">
                <Globe className="text-[#f59e0b] mb-6" size={42} />

                <h3 className="text-3xl font-black mb-5">
                  Practical Full-Stack Workflow
                </h3>

                <p className="text-gray-300 leading-8">
                  I connect UI design, frontend components, backend APIs,
                  database relationships, authentication, routing, and
                  responsive layouts into one complete working product.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  {[
                    "Clean folder structure",
                    "Reusable components",
                    "API-ready architecture",
                    "Responsive design",
                    "Secure data handling",
                    "Maintainable code",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="text-[#f59e0b]" size={18} />
                      <span className="text-gray-200 font-bold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
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
                <ExternalLink size={16} />
                AVAILABLE FOR PROJECTS
              </div>

              <h2 className="text-4xl md:text-6xl font-black leading-tight">
                Need a Developer With Real Skills?
              </h2>

              <p className="text-gray-300 text-lg leading-8 mt-6 max-w-2xl mx-auto">
                I can help you build websites, dashboards, admin panels, backend
                APIs, database systems, and mobile-friendly applications.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">
                <Link to="/contact" className="orange-btn">
                  <Mail size={19} />
                  Work With Me
                </Link>

                <Link to="/projects" className="dark-btn">
                  View Projects <ArrowRight size={19} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}