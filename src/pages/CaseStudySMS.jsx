import { CheckCircle2 } from "lucide-react";

export default function CaseStudySMS() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="max-w-4xl">
          <p className="text-[#8a5200] font-black tracking-widest mb-4">
            CASE STUDY
          </p>

          <h1 className="text-5xl md:text-6xl font-black leading-tight">
            SMS Sending System
          </h1>

          <p className="text-gray-600 text-lg leading-8 mt-6">
            A professional SMS platform designed to help businesses upload
            contacts, send bulk messages, schedule campaigns, and track delivery
            performance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          <div className="card p-7">
            <h3 className="font-black text-xl mb-2">Role</h3>
            <p className="text-gray-600">Full-Stack Developer</p>
          </div>

          <div className="card p-7">
            <h3 className="font-black text-xl mb-2">Timeline</h3>
            <p className="text-gray-600">3 Months</p>
          </div>

          <div className="card p-7">
            <h3 className="font-black text-xl mb-2">Tech Stack</h3>
            <p className="text-gray-600">React, Node.js, MySQL, REST API</p>
          </div>
        </div>

        <div className="card p-10 mt-12">
          <h2 className="text-3xl font-black mb-8">Key Features</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Bulk SMS sending",
              "Excel contact upload",
              "Message scheduling",
              "Delivery tracking",
              "Campaign history",
              "Admin dashboard",
              "User management",
              "Secure API integration",
            ].map((feature) => (
              <div key={feature} className="flex gap-3">
                <CheckCircle2 className="text-[#8a5200]" />
                <span className="font-bold">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}