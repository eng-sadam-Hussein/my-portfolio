import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  Layers,
  Mail,
  MessageCircle,
  Monitor,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Target,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const projectInfo = [
  {
    icon: Users,
    title: "Role",
    value: "Full-Stack Developer",
  },
  {
    icon: Rocket,
    title: "Timeline",
    value: "3 Months",
  },
  {
    icon: Code2,
    title: "Project Type",
    value: "Business SMS System",
  },
];

const techStack = [
  "React.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MySQL",
  "REST API",
  "JWT Auth",
  "Admin Dashboard",
];

const features = [
  "Bulk SMS sending",
  "Excel contact upload",
  "Message scheduling",
  "Delivery tracking",
  "Campaign history",
  "Admin dashboard",
  "User management",
  "Secure API integration",
];

const process = [
  {
    icon: Target,
    step: "01",
    title: "Requirement Analysis",
    desc: "Understanding how businesses manage contacts, campaigns, and SMS delivery.",
  },
  {
    icon: Layers,
    step: "02",
    title: "System Structure",
    desc: "Planning dashboard pages, contact modules, campaign flow, and backend APIs.",
  },
  {
    icon: Server,
    step: "03",
    title: "Backend Logic",
    desc: "Building APIs for users, contacts, campaigns, sending messages, and reports.",
  },
  {
    icon: Monitor,
    step: "04",
    title: "Dashboard UI",
    desc: "Designing a clean admin interface for campaign management and tracking.",
  },
];

const results = [
  {
    icon: MessageCircle,
    title: "Faster Communication",
    desc: "Businesses can send messages to many contacts from one organized dashboard.",
  },
  {
    icon: Database,
    title: "Better Contact Control",
    desc: "Contacts can be uploaded, managed, grouped, and reused for campaigns.",
  },
  {
    icon: BarChart3,
    title: "Clear Campaign Tracking",
    desc: "Campaign history and delivery status help users understand SMS activity.",
  },
];

export default function CaseStudySMS() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071a33] text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(245,158,11,0.18),transparent_35%),radial-gradient(circle_at_15%_80%,rgba(59,130,246,0.12),transparent_35%)]" />

        <div className="container-main relative grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-[#f59e0b] px-4 py-2 rounded-full font-black text-xs tracking-[0.12em] mb-7">
              <BadgeCheck size={16} />
              CASE STUDY
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              SMS Sending
              <span className="block text-[#f59e0b]">System.</span>
            </h1>

            <p className="text-gray-300 text-lg leading-8 mt-7 max-w-2xl">
              A professional SMS platform designed to help businesses upload
              contacts, send bulk messages, schedule campaigns, and track
              delivery performance from one clean dashboard.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href="#"
                className="orange-btn"
                onClick={(e) => e.preventDefault()}
              >
                Live Preview <ExternalLink size={19} />
              </a>

              <Link to="/projects" className="dark-btn">
                Back to Projects <ArrowRight size={19} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-5 bg-[#f59e0b]/15 blur-2xl rounded-[36px]" />

            <div className="relative rounded-[32px] overflow-hidden border border-white/15 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80"
                alt="SMS Sending System dashboard"
                className="w-full h-[420px] md:h-[520px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071a33]/80 via-transparent to-transparent" />

              <div className="absolute left-5 right-5 bottom-5 bg-white/10 border border-white/15 backdrop-blur-xl rounded-2xl p-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f59e0b] flex items-center justify-center">
                    <MessageCircle className="text-[#071323]" />
                  </div>

                  <div>
                    <h3 className="text-white font-black">Business SMS Tool</h3>
                    <p className="text-gray-300 text-sm font-bold">
                      Bulk SMS • Contacts • Campaigns
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECT INFO */}
      <section className="section-padding bg-[#f7f8fa]">
        <div className="container-main">
          <div className="grid md:grid-cols-3 gap-6">
            {projectInfo.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-[28px] p-8 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#071a33] flex items-center justify-center mb-6">
                    <Icon className="text-[#f59e0b]" size={25} />
                  </div>

                  <h3 className="font-black text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600 font-bold">{item.value}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section-padding bg-white">
        <div className="container-main grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-orange-100 text-[#8a5200] px-4 py-2 rounded-full font-black text-xs tracking-[0.12em] mb-6">
              <Target size={16} />
              PROJECT OVERVIEW
            </div>

            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Designed for fast business messaging.
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-6">
              The goal of this system is to help businesses manage SMS
              communication without manual work. Users can upload contacts,
              create campaigns, send messages, and monitor delivery activity
              through a simple dashboard.
            </p>
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
              <Server className="text-[#f59e0b] mb-6" size={42} />

              <h3 className="text-3xl font-black mb-5">Technical Scope</h3>

              <p className="text-gray-300 leading-8">
                The system combines frontend dashboard screens, backend APIs,
                contact management, campaign logic, database structure, and SMS
                integration-ready workflow.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {techStack.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 text-sm font-black text-gray-200"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section-padding bg-[#f7f8fa]">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-[#8a5200] px-4 py-2 rounded-full font-black text-xs tracking-[0.12em] mb-6">
              <CheckCircle2 size={16} />
              KEY FEATURES
            </div>

            <h2 className="text-4xl md:text-5xl font-black">
              Main System Features
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-5">
              The system includes practical features that make campaign
              management simple, organized, and useful for real users.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.04 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-6 flex items-start gap-3 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <CheckCircle2 className="text-[#8a5200] shrink-0 mt-1" />
                <span className="font-black text-gray-800">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="section-padding bg-white">
        <div className="container-main grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="bg-[#f7f8fa] border border-gray-200 rounded-[32px] p-8 md:p-10"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#071a33] flex items-center justify-center mb-6">
              <Target className="text-[#f59e0b]" size={25} />
            </div>

            <h2 className="text-3xl font-black mb-5">The Problem</h2>

            <p className="text-gray-600 leading-8">
              Many businesses communicate with customers manually, which wastes
              time and makes it difficult to manage contacts, campaign history,
              and delivery tracking in one place.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-[#071a33] text-white rounded-[32px] p-8 md:p-10"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#f59e0b] flex items-center justify-center mb-6">
              <Rocket className="text-[#071323]" size={25} />
            </div>

            <h2 className="text-3xl font-black mb-5">The Solution</h2>

            <p className="text-gray-300 leading-8">
              The SMS Sending System provides a centralized platform where users
              can upload contacts, create bulk campaigns, schedule messages, and
              monitor activity through a clean dashboard.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding bg-[#071a33] text-white">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-[#f59e0b] px-4 py-2 rounded-full font-black text-xs tracking-[0.12em] mb-6">
              <Layers size={16} />
              DEVELOPMENT PROCESS
            </div>

            <h2 className="text-4xl md:text-5xl font-black">
              How the System Was Built
            </h2>

            <p className="text-gray-300 text-lg leading-8 mt-5">
              The project followed a clear full-stack workflow from planning to
              dashboard design and backend logic.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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

      {/* RESULTS */}
      <section className="section-padding bg-[#f7f8fa]">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-[#8a5200] px-4 py-2 rounded-full font-black text-xs tracking-[0.12em] mb-6">
              <BarChart3 size={16} />
              PROJECT VALUE
            </div>

            <h2 className="text-4xl md:text-5xl font-black">
              What This Project Solves
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-5">
              This project shows ability to build useful business systems with
              real dashboard logic and practical workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {results.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-[28px] p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
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
                <Mail size={16} />
                BUILD SOMETHING SIMILAR
              </div>

              <h2 className="text-4xl md:text-6xl font-black leading-tight">
                Need a business system like this?
              </h2>

              <p className="text-gray-300 text-lg leading-8 mt-6 max-w-2xl mx-auto">
                I can help you build dashboards, SMS systems, admin panels,
                backend APIs, and business platforms with clean design and
                reliable structure.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">
                <Link to="/contact" className="orange-btn">
                  Start a Project <ArrowRight size={19} />
                </Link>

                <Link to="/projects" className="dark-btn">
                  View More Projects
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}