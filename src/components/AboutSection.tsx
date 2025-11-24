"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
              <p className="text-gray-200 text-base text-justify  mb-2 leading-relaxed">
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
              <p className="text-gray-300 text-base text-justify  leading-relaxed">
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

          {/* Right Side – Team Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[480px] lg:h-[500px] order-1 lg:order-2"
          >
            <Image
              src="/grp.jpg"
              alt="TFC Team"
              fill
              className="object-cover rounded-3xl"
            />
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
                title: "Community",
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
                <div className="text-4xl text-center mb-4">{value.icon}</div>
                <div className="text-center space-y-2">
                  <h3 className="text-xl  font-bold text-[#EAE59B]">
                    {value.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
