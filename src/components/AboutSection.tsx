"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen bg-linear-to-br from-[#12203B] via-black to-[#12203B] text-white py-20 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-15">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #EAE59B 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left mb-16"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#EAE59B] text-sm font-bold uppercase tracking-[0.2em] mb-4 block"
          >
            Our Story
          </motion.span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white tracking-wider">
            About <span className="text-[#EAE59B]">TFC</span>
          </h1>
          <div className="w-24 h-1 bg-[#EAE59B]"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-[#12203B]/50 backdrop-blur-sm border-l-4 border-[#EAE59B] p-6 rounded-r-lg">
              <p className="text-gray-200 text-base text-justify  mb-2">
                Thunderbolts Football Club (TFC) is a dynamic and ambitious
                football club operating as a subsidiary of TDC. Established with
                the goal of becoming a dominant force in the football landscape,
                TFC is dedicated to achieving success at the highest levels of
                the sport through strategic planning, talent development, and
                competitive excellence. The club is committed to fostering a
                culture of discipline, teamwork, and continuous improvement,
                ensuring that it remains a formidable contender in every
                competition it enters.
              </p>
              <p className="text-gray-300 text-base text-justify ">
                Beyond its professional football ambitions, TFC has taken on the
                responsibility of managing and developing the football and
                futsal academy under TDC. This initiative is designed to create
                a structured and well-organized talent pipeline that will
                provide young athletes with world-class training and development
                programs. By investing in grassroots football, TFC aims to
                cultivate the next generation of footballers, instilling in them
                the technical skills, mental resilience, and strategic
                understanding needed to excel on the field.
              </p>
            </div>

            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#EAE59B] text-[#12203B] px-6 py-2.5 rounded-sm font-bold text-sm uppercase tracking-wider hover:bg-[#12203B] hover:text-[#EAE59B] transition-all shadow-md borde border-transparent hover:border-[#EAE59B]"
              >
                view more
                <span className="group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Side – Animated Football Rolling Across the Pitch (GIF-like, but pure code) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[480px] lg:h-[580px] flex items-center justify-center order-1 lg:order-2"
          >
            <div className="relative w-full max-w-2xl">
              {/* Mini Stadium Pitch */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                <svg viewBox="0 0 600 700" className="w-full h-full">
                  <defs>
                    <linearGradient
                      id="pitch"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#0f4d2f" />
                      <stop offset="100%" stopColor="#0a3d22" />
                    </linearGradient>
                    <radialGradient id="spotlight">
                      <stop
                        offset="0%"
                        stopColor="#EAE59B"
                        stopOpacity="0.25"
                      />
                      <stop offset="100%" stopColor="#EAE59B" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Pitch */}
                  <rect width="600" height="700" fill="url(#pitch)" rx="30" />
                  <rect
                    x="60"
                    y="100"
                    width="480"
                    height="500"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="12"
                    rx="12"
                  />
                  <line
                    x1="300"
                    y1="100"
                    x2="300"
                    y2="600"
                    stroke="#ffffff"
                    strokeWidth="10"
                  />
                  <circle
                    cx="300"
                    cy="350"
                    r="70"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="10"
                  />
                  <circle cx="300" cy="350" r="8" fill="#EAE59B" />

                  {/* Stadium Spotlights */}
                  <circle cx="150" cy="80" r="220" fill="url(#spotlight)" />
                  <circle cx="450" cy="80" r="220" fill="url(#spotlight)" />
                </svg>
              </div>

              {/* Rolling Football – Infinite Loop (Looks exactly like a GIF) */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  animate={{
                    x: [-100, 580, -100], // rolls left → right → left
                    y: [320, 280, 320],
                    rotate: [0, 1080, 2160],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute"
                >
                  <svg width="110" height="110" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="48" fill="#EAE59B" />
                    <path
                      d="M50 8 L64 30 L86 36 L68 56 L76 80 L50 68 L24 80 L32 56 L14 36 L36 30 Z"
                      fill="#12203B"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="16"
                      fill="#12203B"
                      opacity="0.4"
                    />
                    {/* Glow ring */}
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      fill="none"
                      stroke="#EAE59B"
                      strokeWidth="6"
                      opacity="0"
                    >
                      <animate
                        attributeName="opacity"
                        values="0;0.8;0"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </svg>
                </motion.div>
              </div>

              {/* Subtle glow orbs */}
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#EAE59B]/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#EAE59B]/15 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20"
        >
          <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold text-white mb-8 text-left">
            Our <span className="text-[#EAE59B]">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                title: "Excellence",
                icon: "⭐",
              },
              {
                title: "Integrity",
                icon: "⚖️",
              },
              {
                title: "Passion",
                icon: "🔥",
              },
              {
                title: "Community Engagement",
                icon: "🤝",
              },
              {
                title: "Innovation",
                icon: "💡",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-linear-to-br from-[#12203B] to-black rounded-lg p-6"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-[#EAE59B] mb-2">
                  {value.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
