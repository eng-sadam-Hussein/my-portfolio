import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Clock,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Rocket,
  Send,
  ShieldCheck,
  User,
} from "lucide-react";
import { motion } from "framer-motion";

const EMAIL = "sadamkeyow2@gmail.com";
const PHONE_DISPLAY = "+252 26 198 18501";
const PHONE_LINK = "+2522619818501";
const WHATSAPP_LINK = "https://wa.me/2522619818501";
const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=Mogadishu%2C%20Somalia";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: EMAIL,
    desc: "Send project details directly by email.",
    href: `mailto:${EMAIL}`,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: PHONE_DISPLAY,
    desc: "Best for quick project discussion.",
    href: WHATSAPP_LINK,
  },
  {
    icon: Phone,
    title: "Call",
    value: PHONE_DISPLAY,
    desc: "Call directly for project discussion.",
    href: `tel:${PHONE_LINK}`,
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Mogadishu, Somalia",
    desc: "Open location directly on Google Maps.",
    href: MAP_LINK,
  },
];

const projectTypes = [
  "Business Website",
  "Admin Dashboard",
  "Web Application",
  "Backend API",
  "Mobile App",
  "Portfolio Website",
  "E-commerce Website",
  "Management System",
];

const budgetOptions = [
  "Small project",
  "Medium project",
  "Large project",
  "Not sure yet",
];

const expectations = [
  {
    icon: Clock,
    title: "Clear Response",
    desc: "I review your request and respond with clear next steps.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Planning",
    desc: "Your project is reviewed based on pages, features, users, and workflow.",
  },
  {
    icon: Rocket,
    title: "Ready for Action",
    desc: "The request is prepared for real discussion through WhatsApp or email.",
  },
];

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone or WhatsApp number is required.";
    }

    if (!form.projectType) {
      newErrors.projectType = "Please select a project type.";
    }

    if (!form.budget) {
      newErrors.budget = "Please select a budget range.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Project message is required.";
    } else if (form.message.trim().length < 20) {
      newErrors.message = "Please describe your project with at least 20 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    const text = `
New Project Request

Full Name: ${form.fullName}
Email: ${form.email}
Phone / WhatsApp: ${form.phone}
Project Type: ${form.projectType}
Budget: ${form.budget}

Project Message:
${form.message}
    `.trim();

    const encodedMessage = encodeURIComponent(text);
    window.open(`${WHATSAPP_LINK}?text=${encodedMessage}`, "_blank", "noopener,noreferrer");
  };

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
              CONTACT SADAM
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-7xl font-black leading-tight tracking-tight"
            >
              Let’s Build
              <span className="block text-[#f59e0b]">Something Useful.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-gray-300 text-lg leading-8 mt-7 max-w-3xl"
            >
              Send your project idea, business need, or system requirements.
              Your form information will open directly in WhatsApp so you can
              send the request immediately.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="grid sm:grid-cols-3 gap-4 mt-12 max-w-3xl"
            >
              {[
                { value: "Web", label: "Applications" },
                { value: "API", label: "Backend Systems" },
                { value: "UI", label: "Responsive Design" },
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

      {/* CONTACT AREA */}
      <section className="section-padding bg-[#f7f8fa]">
        <div className="container-main grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-100 text-[#8a5200] px-4 py-2 rounded-full font-black text-xs tracking-[0.12em] mb-6">
                <MessageCircle size={16} />
                GET IN TOUCH
              </div>

              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Tell me about your project.
              </h2>

              <p className="text-gray-600 text-lg leading-8 mt-5">
                You can contact me directly by email, WhatsApp, call, or open
                my location on Google Maps.
              </p>
            </div>

            <div className="grid gap-4">
              {contactMethods.map((item) => {
                const Icon = item.icon;
                const isExternal = item.href.startsWith("http");

                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="group bg-white border border-gray-200 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#071a33] flex items-center justify-center shrink-0 group-hover:bg-[#f59e0b] transition">
                      <Icon
                        className="text-[#f59e0b] group-hover:text-[#071323]"
                        size={22}
                      />
                    </div>

                    <div>
                      <h3 className="font-black text-lg">{item.title}</h3>
                      <p className="text-gray-800 font-bold mt-1">
                        {item.value}
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-[32px] p-6 md:p-9 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[#071a33] flex items-center justify-center">
                <Send className="text-[#f59e0b]" size={25} />
              </div>

              <div>
                <h3 className="text-2xl font-black">Project Request</h3>
                <p className="text-gray-600 mt-1">
                  Fill the form and send it directly to WhatsApp.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="font-black block mb-2">Full Name *</label>
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={19}
                  />
                  <input
                    value={form.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                    className={`w-full border rounded-xl pl-12 pr-4 py-4 outline-none focus:ring-4 focus:ring-orange-100 transition ${
                      errors.fullName
                        ? "border-red-500"
                        : "border-gray-300 focus:border-[#8a5200]"
                    }`}
                    placeholder="Your full name"
                  />
                </div>
                {errors.fullName && (
                  <p className="text-red-600 text-sm font-bold mt-2">
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <label className="font-black block mb-2">Email Address *</label>
                <div className="relative">
                  <Mail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={19}
                  />
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className={`w-full border rounded-xl pl-12 pr-4 py-4 outline-none focus:ring-4 focus:ring-orange-100 transition ${
                      errors.email
                        ? "border-red-500"
                        : "border-gray-300 focus:border-[#8a5200]"
                    }`}
                    placeholder="you@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-600 text-sm font-bold mt-2">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5 mt-5">
              <div>
                <label className="font-black block mb-2">Phone / WhatsApp *</label>
                <div className="relative">
                  <Phone
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={19}
                  />
                  <input
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className={`w-full border rounded-xl pl-12 pr-4 py-4 outline-none focus:ring-4 focus:ring-orange-100 transition ${
                      errors.phone
                        ? "border-red-500"
                        : "border-gray-300 focus:border-[#8a5200]"
                    }`}
                    placeholder="+252..."
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-600 text-sm font-bold mt-2">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label className="font-black block mb-2">Project Type *</label>
                <select
                  value={form.projectType}
                  onChange={(e) => updateField("projectType", e.target.value)}
                  className={`w-full border rounded-xl px-4 py-4 outline-none focus:ring-4 focus:ring-orange-100 transition bg-white ${
                    errors.projectType
                      ? "border-red-500"
                      : "border-gray-300 focus:border-[#8a5200]"
                  }`}
                >
                  <option value="">Select project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.projectType && (
                  <p className="text-red-600 text-sm font-bold mt-2">
                    {errors.projectType}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-5">
              <label className="font-black block mb-2">Project Budget *</label>
              <select
                value={form.budget}
                onChange={(e) => updateField("budget", e.target.value)}
                className={`w-full border rounded-xl px-4 py-4 outline-none focus:ring-4 focus:ring-orange-100 transition bg-white ${
                  errors.budget
                    ? "border-red-500"
                    : "border-gray-300 focus:border-[#8a5200]"
                }`}
              >
                <option value="">Select budget range</option>
                {budgetOptions.map((budget) => (
                  <option key={budget} value={budget}>
                    {budget}
                  </option>
                ))}
              </select>
              {errors.budget && (
                <p className="text-red-600 text-sm font-bold mt-2">
                  {errors.budget}
                </p>
              )}
            </div>

            <div className="mt-5">
              <label className="font-black block mb-2">Project Message *</label>
              <textarea
                rows="6"
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                className={`w-full border rounded-xl px-4 py-4 outline-none focus:ring-4 focus:ring-orange-100 transition resize-none ${
                  errors.message
                    ? "border-red-500"
                    : "border-gray-300 focus:border-[#8a5200]"
                }`}
                placeholder="Tell me what you want to build, main features, users, and goal..."
              />
              {errors.message && (
                <p className="text-red-600 text-sm font-bold mt-2">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-black text-white rounded-xl py-4 font-black hover:bg-[#8a5200] transition flex items-center justify-center gap-2"
            >
              Send Project Request <ArrowRight size={19} />
            </button>

            <p className="text-gray-500 text-sm leading-6 mt-5 text-center">
              This form opens WhatsApp with your project details. Review the
              message there and press send.
            </p>
          </motion.form>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-[#8a5200] px-4 py-2 rounded-full font-black text-xs tracking-[0.12em] mb-6">
              <Rocket size={16} />
              WHAT HAPPENS NEXT
            </div>

            <h2 className="text-4xl md:text-5xl font-black">
              Simple Project Process
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-5">
              After you send your idea, I review the project and prepare a clear
              direction for the next step.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {expectations.map((item, index) => {
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

      {/* REMOTE WORK */}
      <section className="section-padding bg-[#071a33] text-white">
        <div className="container-main grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-[#f59e0b] px-4 py-2 rounded-full font-black text-xs tracking-[0.12em] mb-6">
              <Globe size={16} />
              REMOTE PROJECTS
            </div>

            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Available for local and remote work.
            </h2>

            <p className="text-gray-300 text-lg leading-8 mt-6">
              Based in Mogadishu, Somalia, and available to work with clients
              remotely. I can help with websites, dashboards, admin panels,
              backend APIs, and mobile-friendly systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-[32px] p-8"
          >
            <div className="space-y-5">
              {[
                "Clear communication",
                "Professional project structure",
                "Responsive design delivery",
                "Frontend and backend workflow",
                "Support after project completion",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#f59e0b]" size={20} />
                  <span className="text-gray-200 font-bold">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
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
                <BriefcaseBusiness size={16} />
                READY TO START
              </div>

              <h2 className="text-4xl md:text-6xl font-black leading-tight">
                Ready to discuss your project?
              </h2>

              <p className="text-gray-300 text-lg leading-8 mt-6 max-w-2xl mx-auto">
                Share your idea and I’ll help you turn it into a professional
                digital product with clean design and reliable structure.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">
                <a href={`mailto:${EMAIL}`} className="orange-btn">
                  <Mail size={19} />
                  Email Me
                </a>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark-btn"
                >
                  WhatsApp <ArrowRight size={19} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}