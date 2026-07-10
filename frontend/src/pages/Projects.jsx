import { Link } from "react-router-dom";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Database,
  ExternalLink,
  Globe,
  Layers,
  Mail,
  MessageCircle,
  Monitor,
  Rocket,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "SMS Sending System",
    category: "Business System",
    icon: MessageCircle,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    desc: "A web-based platform that helps businesses send bulk SMS messages, manage contacts, and track campaign activity from one dashboard.",
    liveUrl: "https://your-sms-system-link.com",
    detailsUrl: "/projects/sms-sending-system",
  },
  {
    title: "QR Attendance System",
    category: "Management System",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80",
    desc: "A digital attendance system that allows students or staff to check in using QR codes with simple records and reports.",
    liveUrl: "https://your-qr-attendance-link.com",
    detailsUrl: "/projects/sms-sending-system",
  },
  {
    title: "Business Admin Dashboard",
    category: "Dashboard",
    icon: Monitor,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    desc: "A clean admin dashboard for viewing analytics, managing data, tracking activity, and improving business workflow.",
    liveUrl: "https://your-dashboard-link.com",
    detailsUrl: "/projects/sms-sending-system",
  },
  {
    title: "E-commerce Platform",
    category: "Web Application",
    icon: Globe,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    desc: "An online shopping platform with product browsing, cart experience, checkout flow, and admin product management.",
    liveUrl: "https://your-ecommerce-link.com",
    detailsUrl: "/projects/sms-sending-system",
  },
  {
    title: "Booking Management Platform",
    category: "Web Application",
    icon: Database,
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
    desc: "A booking system that helps users reserve services, manage schedules, and organize customer requests easily.",
    liveUrl: "https://your-booking-link.com",
    detailsUrl: "/projects/sms-sending-system",
  },
  {
    title: "Mobile App UI System",
    category: "Mobile App",
    icon: Smartphone,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
    desc: "A modern mobile app interface designed with clean screens, smooth navigation, and a user-friendly mobile experience.",
    liveUrl: "https://your-mobile-demo-link.com",
    detailsUrl: "/projects/sms-sending-system",
  },
];

const projectValues = [
  {
    icon: Code2,
    title: "Clean Structure",
    desc: "Each project is built with organized pages, reusable components, and readable code.",
  },
  {
    icon: ShieldCheck,
    title: "Real Usability",
    desc: "The focus is on systems that are practical, easy to use, and useful for real users.",
  },
  {
    icon: Layers,
    title: "Professional Design",
    desc: "Layouts are responsive, modern, clean, and ready for online presentation.",
  },
];

function openLiveProject(url) {
  if (!url || url.includes("your-")) {
    alert("Live project link is not added yet. Replace this with your real online project link.");
    return;
  }

  window.open(url, "_blank", "noopener,noreferrer");
}

export default function Projects() {
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
              <BriefcaseBusiness size={16} />
              REAL PORTFOLIO PROJECTS
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-7xl font-black leading-tight tracking-tight"
            >
              Projects Built
              <span className="block text-[#f59e0b]">For Real Use.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-gray-300 text-lg leading-8 mt-7 max-w-3xl"
            >
              A simple and professional showcase of real web systems,
              dashboards, business platforms, and mobile app projects created
              with clean design and practical functionality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="flex flex-col sm:flex-row gap-4 mt-10"
            >
              <Link to="/contact" className="orange-btn">
                Start a Project <ArrowRight size={19} />
              </Link>

              <a href="#project-list" className="dark-btn">
                View Projects
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#f7f8fa] py-14 border-b border-gray-200">
        <div className="container-main">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black">
                Selected Project Work
              </h2>

              <p className="text-gray-600 text-lg leading-8 mt-4 max-w-3xl">
                These projects are presented in a clean format so visitors can
                quickly understand what the project does and open the live
                version when it is available.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="card p-5 text-center">
                <h3 className="text-3xl font-black text-[#8a5200]">6+</h3>
                <p className="text-gray-600 font-bold text-sm mt-1">
                  Projects
                </p>
              </div>

              <div className="card p-5 text-center">
                <h3 className="text-3xl font-black text-[#8a5200]">4</h3>
                <p className="text-gray-600 font-bold text-sm mt-1">
                  Categories
                </p>
              </div>

              <div className="card p-5 text-center">
                <h3 className="text-3xl font-black text-[#8a5200]">100%</h3>
                <p className="text-gray-600 font-bold text-sm mt-1">
                  Responsive
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="project-list" className="section-padding bg-[#f7f8fa]">
        <div className="container-main">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: index * 0.07 }}
                  viewport={{ once: true }}
                  className="group bg-white border border-gray-200 rounded-[28px] overflow-hidden shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-[240px] overflow-hidden bg-[#071a33]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    <div className="absolute top-4 left-4 bg-white/15 border border-white/20 backdrop-blur text-white px-4 py-2 rounded-full text-xs font-black">
                      {project.category}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                      <div>
                        <h3 className="text-white text-2xl font-black leading-tight">
                          {project.title}
                        </h3>
                      </div>

                      <div className="w-12 h-12 rounded-2xl bg-[#f59e0b] flex items-center justify-center shrink-0">
                        <Icon className="text-[#071323]" size={23} />
                      </div>
                    </div>
                  </div>

                  <div className="p-7">
                    <p className="text-gray-600 leading-7 min-h-[112px]">
                      {project.desc}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mt-7">
                      <button
                        type="button"
                        onClick={() => openLiveProject(project.liveUrl)}
                        className="bg-black text-white rounded-xl py-4 text-center font-black hover:bg-[#8a5200] transition flex items-center justify-center gap-2"
                      >
                        Live Project <ExternalLink size={17} />
                      </button>

                      <Link
                        to={project.detailsUrl}
                        className="border border-gray-300 rounded-xl py-4 text-center font-black hover:border-black hover:bg-black hover:text-white transition flex items-center justify-center gap-2"
                      >
                        Read More <ArrowRight size={17} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECT VALUE */}
      <section className="bg-white section-padding">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-[#8a5200] px-4 py-2 rounded-full font-black text-xs tracking-[0.12em] mb-6">
              <Rocket size={16} />
              PROJECT APPROACH
            </div>

            <h2 className="text-4xl md:text-5xl font-black">
              Built With Purpose
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-5">
              My projects are designed to be easy to understand, simple to use,
              and professional enough to represent real work online.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projectValues.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="card p-8 text-center hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-[#8a5200]" size={25} />
                  </div>

                  <h3 className="text-xl font-black mb-3">{item.title}</h3>

                  <p className="text-gray-600 leading-7">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LIVE PROJECT NOTE */}
      <section className="bg-[#f7f8fa] section-padding">
        <div className="container-main">
          <div className="bg-[#071a33] text-white rounded-[32px] p-8 md:p-12 grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-center">
            <div className="w-20 h-20 rounded-3xl bg-[#f59e0b] flex items-center justify-center">
              <Globe className="text-[#071323]" size={38} />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-black">
                Live links make the portfolio real.
              </h2>

              <p className="text-gray-300 text-lg leading-8 mt-5">
                When each project has a working online link, visitors can test
                the project directly. This makes your portfolio stronger, more
                credible, and easier for clients or employers to trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f7f8fa] pb-28">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-black text-white rounded-[32px] px-6 py-20 md:p-20 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.18),transparent_35%)]" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-[#f59e0b] px-4 py-2 rounded-full font-black text-xs tracking-[0.12em] mb-7">
                <BriefcaseBusiness size={16} />
                AVAILABLE FOR PROJECTS
              </div>

              <h2 className="text-4xl md:text-6xl font-black leading-tight">
                Have a project idea?
              </h2>

              <p className="text-gray-300 text-lg leading-8 mt-6 max-w-2xl mx-auto">
                I can help you build a professional website, dashboard, admin
                panel, business system, or mobile-friendly platform.
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