"use client";

import { motion } from "framer-motion";

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
              <p className="text-gray-200 text-lg leading-relaxed mb-4">
                TFC (The Football Club) was founded with a vision to
                revolutionize the world of football. We combine passion,
                dedication, and cutting-edge technology to create an
                unforgettable experience for players and fans alike.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                Our team consists of world-class athletes, coaches, and support
                staff who work tirelessly to achieve excellence both on and off
                the field. We believe in fostering talent, promoting
                sportsmanship, and building a community that shares our love for
                the beautiful game.
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-[#12203B] border border-[#EAE59B]/20 rounded-lg p-6 hover:border-[#EAE59B]/50 transition-all"
              >
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-xl font-bold text-[#EAE59B] mb-2">
                  Our Mission
                </h3>
                <p className="text-gray-300 text-sm">
                  To excel on the field and inspire the next generation of
                  football talent.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-[#12203B] border border-[#EAE59B]/20 rounded-lg p-6 hover:border-[#EAE59B]/50 transition-all"
              >
                <div className="text-3xl mb-3">🌟</div>
                <h3 className="text-xl font-bold text-[#EAE59B] mb-2">
                  Our Vision
                </h3>
                <p className="text-gray-300 text-sm">
                  To become a global leader in football excellence and community
                  impact.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="h-[510px] rounded-lg overflow-hidden border-2 border-[#EAE59B]/30 shadow-2xl shadow-[#EAE59B]/10 bg-linear-to-br from-[#12203B] to-black relative">
              {/* Football Field Pattern Background */}
              <div className="absolute inset-0 opacity-20">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 400 600"
                  preserveAspectRatio="none"
                >
                  {/* Field */}
                  <rect width="400" height="600" fill="#0a4d2e" />
                  {/* Center Circle */}
                  <circle
                    cx="200"
                    cy="300"
                    r="60"
                    fill="none"
                    stroke="#EAE59B"
                    strokeWidth="2"
                  />
                  <circle cx="200" cy="300" r="5" fill="#EAE59B" />
                  {/* Center Line */}
                  <line
                    x1="200"
                    y1="0"
                    x2="200"
                    y2="600"
                    stroke="#EAE59B"
                    strokeWidth="2"
                  />
                  {/* Penalty Areas */}
                  <rect
                    x="0"
                    y="200"
                    width="80"
                    height="200"
                    fill="none"
                    stroke="#EAE59B"
                    strokeWidth="2"
                  />
                  <rect
                    x="320"
                    y="200"
                    width="80"
                    height="200"
                    fill="none"
                    stroke="#EAE59B"
                    strokeWidth="2"
                  />
                  {/* Goal Areas */}
                  <rect
                    x="0"
                    y="250"
                    width="30"
                    height="100"
                    fill="none"
                    stroke="#EAE59B"
                    strokeWidth="2"
                  />
                  <rect
                    x="370"
                    y="250"
                    width="30"
                    height="100"
                    fill="none"
                    stroke="#EAE59B"
                    strokeWidth="2"
                  />
                  {/* Corner Arcs */}
                  <path
                    d="M 0 0 Q 10 0 10 10"
                    fill="none"
                    stroke="#EAE59B"
                    strokeWidth="2"
                  />
                  <path
                    d="M 400 0 Q 390 0 390 10"
                    fill="none"
                    stroke="#EAE59B"
                    strokeWidth="2"
                  />
                  <path
                    d="M 0 600 Q 10 600 10 590"
                    fill="none"
                    stroke="#EAE59B"
                    strokeWidth="2"
                  />
                  <path
                    d="M 400 600 Q 390 600 390 590"
                    fill="none"
                    stroke="#EAE59B"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              {/* Floating Football Icons */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Large Central Football */}
                  <motion.div
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 100 100"
                      className="text-[#EAE59B]"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="currentColor"
                        opacity="0.2"
                      />
                      <path
                        d="M 50 10 L 60 30 L 80 30 L 65 45 L 70 65 L 50 55 L 30 65 L 35 45 L 20 30 L 40 30 Z"
                        fill="currentColor"
                        opacity="0.8"
                      />
                      <circle cx="50" cy="50" r="8" fill="currentColor" />
                    </svg>
                  </motion.div>

                  {/* Floating Trophy */}
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="absolute top-20 right-20"
                  >
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 100 100"
                      className="text-[#EAE59B]"
                    >
                      <path
                        d="M 30 20 L 30 50 Q 30 60 40 60 L 60 60 Q 70 60 70 50 L 70 20 L 30 20 Z"
                        fill="currentColor"
                        opacity="0.9"
                      />
                      <rect
                        x="45"
                        y="60"
                        width="10"
                        height="20"
                        fill="currentColor"
                        opacity="0.9"
                      />
                      <rect
                        x="35"
                        y="80"
                        width="30"
                        height="5"
                        fill="currentColor"
                        opacity="0.9"
                      />
                      <circle cx="50" cy="35" r="8" fill="#12203B" />
                    </svg>
                  </motion.div>

                  {/* Floating Football */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 360],
                    }}
                    transition={{
                      y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                      rotate: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }}
                    className="absolute bottom-20 left-20"
                  >
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 100 100"
                      className="text-[#EAE59B]"
                    >
                      <ellipse
                        cx="50"
                        cy="50"
                        rx="35"
                        ry="30"
                        fill="currentColor"
                        opacity="0.8"
                      />
                      <path
                        d="M 50 20 Q 65 30 65 50 Q 65 70 50 80 Q 35 70 35 50 Q 35 30 50 20 Z"
                        fill="none"
                        stroke="#12203B"
                        strokeWidth="2"
                      />
                      <path
                        d="M 20 50 Q 30 35 50 35 Q 70 35 80 50 Q 70 65 50 65 Q 30 65 20 50 Z"
                        fill="none"
                        stroke="#12203B"
                        strokeWidth="2"
                      />
                    </svg>
                  </motion.div>

                  {/* Stats Badges */}
                  <div className="absolute top-10 left-10 bg-[#12203B] border-2 border-[#EAE59B] rounded-full p-3">
                    <span className="text-[#EAE59B] font-bold text-sm">
                      2020
                    </span>
                  </div>
                  <div className="absolute bottom-10 right-10 bg-[#12203B] border-2 border-[#EAE59B] rounded-full p-3">
                    <span className="text-[#EAE59B] font-bold text-sm">
                      15+
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#EAE59B]/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#EAE59B]/5 rounded-full blur-3xl"></div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Excellence",
                desc: "Striving for the highest standards in everything we do",
                icon: "⭐",
              },
              {
                title: "Passion",
                desc: "Fueling our love for the beautiful game every single day",
                icon: "🔥",
              },
              {
                title: "Unity",
                desc: "Building a strong community that stands together",
                icon: "🤝",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-linear-to-br from-[#12203B] to-black rounded-lg p-6 "
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-[#EAE59B] mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
