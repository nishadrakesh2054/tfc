"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Target,
  Eye,
  Trophy,
  Heart,
  Lightbulb,
  Users,
  Zap,
  Shield,
  Globe,
} from "lucide-react";

export default function About() {
  const values = [
    {
      title: "Excellence",
      desc: "Striving for the highest standards in training, performance, and management, ensuring continual growth and development.",
      icon: Trophy,
    },
    {
      title: "Integrity",
      desc: "Upholding fairness, transparency, and ethical conduct in all our operations, fostering trust and respect within the football community.",
      icon: Shield,
    },
    {
      title: "Passion",
      desc: "Encouraging a deep love for the game and unwavering commitment to growth and success.",
      icon: Heart,
    },
    {
      title: "Community Engagement",
      desc: ": Building strong relationships with fans, supporters, and local stakeholders, ensuring that football remains an inclusive and inspiring sport for all.",
      icon: Users,
    },
    {
      title: "Innovation",
      desc: "Continuously evolving our training techniques, facilities, and strategic approaches to maintain a competitive edge in modern football.",
      icon: Lightbulb,
    },
  ];

  const aspiration = [
    "Establish a robust and well-structured pipeline of homegrown talent through our football and futsal academy, ensuring a steady influx of skilled players.",
    "Expand our reach by participating in nationally and internationally recognized tournaments, elevating the club’s profile and competitiveness.",
    "Develop state-of-the-art training facilities that cater to both player development and high-performance training, ensuring the best possible environment for athletic excellence.",
    "Forge strategic partnerships with key stakeholders, including sponsors, football organizations, and educational institutions, to elevate TFC’s brand and strengthen its resource network.",
    "Inspire the next generation of footballers by setting new benchmarks for success in the sport, ensuring that TFC remains a beacon of footballing excellence and ambition.",
  ];

  const objectives = [
    {
      id: 1,
      title: "Develop a Strong Football Academy",
      desc: " Establish a structured training program to identify, nurture, and develop young talents for both football and futsal under TDC.",
    },
    {
      id: 2,
      title: "Promote Youth Development",
      desc: "Provide a robust platform for aspiring footballers to grow, learn, and seamlessly transition into professional careers within the sport.",
    },
    {
      id: 3,
      title: "Enhance Competitive Performance",
      desc: ": Implement cutting-edge training methodologies, sports science advancements, and tactical strategies to strengthen the squad and ensure sustained success in both domestic and international competitions.",
    },
    {
      id: 4,
      title: "Build a Sustainable Club Model",
      desc: ": Focus on financial stability, diversified revenue streams, sponsorship opportunities, and strong community support to create a resilient and self-sustaining football institution.",
    },
    {
      id: 5,
      title: "Foster Team Spirit and Sportsmanship",
      desc: ": Encourage and uphold values of discipline, teamwork, and integrity both on and off the pitch, ensuring that players not only excel as athletes but also as responsible individuals.",
    },
    {
      id: 6,
      title: "Expand Club Recognition",
      desc: ": Enhance brand visibility and reputation through media presence, fan engagement initiatives, and participation in prestigious football tournaments.",
    },
  ];

  return (
    <section
   
      className="min-h-screen bg-linear-to-br from-[#12203B] via-black to-[#12203B] text-white py-42 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-linear(circle at 2px 2px, #EAE59B 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-start mb-20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-[#EAE59B] text-sm font-bold uppercase tracking-[0.3em] mb-2"
          >
            Thunderbolts Football Club
          </motion.p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold  text-white tracking-wider">
            About <span className="text-[#EAE59B]">TFC</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: Content */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-sm border-l-4 border-[#EAE59B] p-8 rounded-r-2xl shadow-2xl"
            >
              <p className="text-gray-200  leading-relaxed text-justify">
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
              <p className="text-gray-300 mt-4 leading-relaxed text-justify">
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
            </motion.div>
          </div>

          {/* Right: Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden border-4 border-[#EAE59B]/40 shadow-2xl">
              <Image
                src="/banner1.jpg" // Your company profile image
                alt="Thunderbolts FC Team"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 text-left">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="flex items-center gap-3"
                >
                  <Zap className="w-10 h-10 text-[#EAE59B]" />
                  <div>
                    <p className="text-[#EAE59B] font-bold text-sm uppercase tracking-wider">
                      Founded
                    </p>
                    <p className="text-3xl font-bold">2024</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-6 -right-6 bg-[#EAE59B] text-[#12203B] rounded-full p-6 shadow-2xl"
            >
              <Globe className="w-10 h-10" />
            </motion.div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.03, y: -8 }}
            className="bg-linear-to-br from-[#12203B] to-black border border-[#EAE59B]/30 rounded-xl p-8 hover:border-[#EAE59B] transition-all duration-500"
          >
            <Target className="w-12 h-12 text-[#EAE59B] mb-4" />
            <h3 className="text-xl font-bold text-[#EAE59B] mb-3">
              Our Mission
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed text-justify">
              At Thunderbolts Football Club, our mission is to develop and
              promote football excellence by fostering talent, instilling
              discipline, and creating a structured pathway for young athletes
              to achieve their full potential. Through our comprehensive
              training programs and professional development initiatives, we
              seek to empower players with the knowledge, skills, and experience
              required to compete at elite levels. We are dedicated to upholding
              the highest standards of professionalism, sportsmanship, and
              integrity in every aspect of our operations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.03, y: -8 }}
            className="bg-linear-to-br from-[#12203B] to-black border border-[#EAE59B]/30 rounded-xl p-8 hover:border-[#EAE59B] transition-all duration-500"
          >
            <Eye className="w-12 h-12 text-[#EAE59B] mb-4" />
            <h3 className="text-xl font-bold text-[#EAE59B] mb-3">
              Our Vision
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed text-justify">
              Our vision is to establish Thunderbolts Football Club as a premier
              football institution recognized for excellence in player
              development, competitive success, and community engagement. We
              aspire to build a sustainable football ecosystem that not only
              strengthens our club’s reputation but also contributes to the
              overall growth of football at both national and international
              levels. Through strategic partnerships, state-of-the-art
              infrastructure, and a commitment to innovation, we aim to set new
              benchmarks in football development and performance.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold  text-white tracking-wider mt-5 mb-10">
          Our  <span className="text-[#EAE59B]">Core Values</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-linear-to-br from-[#12203B]/80 to-black border border-[#EAE59B]/20 rounded-2xl p-8 text-center hover:border-[#EAE59B] transition-all duration-500 group"
                >
                  <div className="mb-5 inline-block p-4 bg-[#EAE59B]/10 rounded-full group-hover:bg-[#EAE59B] transition-colors">
                    <Icon className="w-10 h-10 text-[#EAE59B] group-hover:text-[#12203B] transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-[#EAE59B] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

             {/* Objectives Section – INSERT THIS */}
             <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold  text-white tracking-wider  mt-5 mb-10">
          Our <span className="text-[#EAE59B]">Objectives</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {objectives.map((obj, index) => (
              <motion.div
                key={obj.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group relative bg-linear-to-br from-[#12203B]/90 via-[#12203B] to-black/90 border border-[#EAE59B]/20 rounded-2xl p-8 overflow-hidden hover:border-[#EAE59B] transition-all duration-500"
              >
                {/* Golden Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#EAE59B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Number Badge */}
                <div className="w-12 h-12 bg-[#EAE59B] rounded-full flex items-center justify-center text-[#12203B] font-bold text-xl mb-6 shadow-lg">
                  {obj.id}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#EAE59B] mb-4 group-hover:text-white transition-colors">
                  {obj.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {obj.desc}
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-[#EAE59B]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </motion.div>   

        {/* Future Aspirations */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className=" "
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold  text-white tracking-wider  mt-16 mb-10">
          Future <span className="text-[#EAE59B]">Aspirations</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {aspiration.map((obj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-6 h-6 shrink-0 bg-[#EAE59B] rounded-full flex items-center justify-center text-[#12203B] font-semibold text-sm">
                  {i + 1}
                </div>
                <p className="text-gray-200 text-md leading-relaxed pt-1">
                  {obj}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-24"
        >
          <p className="text-2xl md:text-3xl font-bold text-[#EAE59B] max-w-5xl mx-auto leading-relaxed">
            Thunderbolts Football Club is more than just a team — <br />
            <span className="text-white">
              it is a movement dedicated to excellence, development, and the
              future of football. With a clear vision, structured approach, and
              unwavering determination, TFC is poised to make a lasting impact
              in the world of football.
            </span>
          </p>
        </motion.div>
      </div>

      {/* Decorative Blurs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#EAE59B]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#EAE59B]/10 rounded-full blur-3xl -z-10" />
    </section>
  );
}
