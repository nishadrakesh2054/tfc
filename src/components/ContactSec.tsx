"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      let data;
      try {
        data = await res.json();
      } catch {
        throw new Error("Invalid response from server");
      }

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error(data.error || "Failed to send message");
      }
    } catch (err) {
      setStatus("error");
      console.error("Contact form error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-linear-to-br from-black via-gray-900 to-black text-white py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left mb-10"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#EAE59B] text-sm font-bold uppercase tracking-[0.2em] mb-3 block"
          >
            Contact Us
          </motion.span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-wider">
            Get in touch <span className="text-[#EAE59B]">with TFC</span>
          </h1>
          <div className="w-20 h-1 bg-[#EAE59B]"></div>
        </motion.div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* FORM — Shows first on mobile, second on desktop */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-5 bg-gray-800/50 backdrop-blur-sm border border-[#EAE59B]/30 rounded-xl p-8  "
          >
            {/* NAME */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full px-4 py-3 bg-gray-900 border border-[#EAE59B]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#EAE59B]"
                placeholder="Your full name"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="w-full px-4 py-3 bg-gray-900 border border-[#EAE59B]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#EAE59B]"
                placeholder="your.email@example.com"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
                className="w-full px-4 py-3 bg-gray-900 border border-[#EAE59B]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#EAE59B]"
                placeholder="+977 9800000000"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="w-full px-4 py-3 bg-gray-900 border border-[#EAE59B]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#EAE59B] resize-none"
                placeholder="Write your message..."
              />
            </div>

            {/* SUBMIT BUTTON */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-[#EAE59B] text-[#12203B] px-6 py-3 rounded-lg font-semibold hover:bg-[#EAE59B]/90 transition-colors disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>

            {/* STATUS MESSAGES */}
            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 text-center font-medium text-sm"
              >
                Message sent successfully!
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-center font-medium text-sm"
              >
                Failed to send message. Please try again.
              </motion.p>
            )}
          </motion.form>

          {/* MAP — Shows second on mobile, first on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-xl overflow-hidden border border-[#EAE59B]/30 h-[400px] lg:h-full order-1 lg:order-2"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.4274419317535!2d85.32312107611213!3d27.642244128358538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb17005434cb05%3A0xa7dc16fb1af01d1!2sThunderbolts%20Development%20Center!5e0!3m2!1sen!2snp!4v1724835834200!5m2!1sen!2snp"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              className="filter hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
