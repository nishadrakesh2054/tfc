"use client";
import Link from "next/link";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";

import Image from "next/image";

const players = [
  {
    id: 1,
    name: "John Smith",
    position: "Forward",
    number: 10,
    age: 25,
    dob: "1998-05-12",
    gender: "Male",
    nationality: "Nepal",
    bio: "John is a dynamic forward known for his speed, agility, and goal-scoring abilities.",
    image: "/player.png",
  },
  {
    id: 2,
    name: "Mike Johnson",
    position: "Midfielder",
    number: 7,
    age: 27,
    dob: "1996-03-21",
    gender: "Male",
    nationality: "Nepal",
    bio: "Mike is a tactical midfielder who controls the game's tempo with precision passing.",
    image: "/player.png",
  },
  {
    id: 3,
    name: "David Williams",
    position: "Defender",
    number: 4,
    age: 28,
    dob: "1995-11-10",
    gender: "Male",
    nationality: "Nepal",
    bio: "David is a strong defender with excellent positioning and aerial ability.",
    image: "/player.png",
  },
  {
    id: 4,
    name: "Chris Brown",
    position: "Goalkeeper",
    number: 1,
    age: 26,
    dob: "1997-08-18",
    gender: "Male",
    nationality: "Nepal",
    bio: "Chris is a reliable goalkeeper with quick reflexes and commanding presence.",
    image: "/player.png",
  },
  {
    id: 5,
    name: "Alex Davis",
    position: "Forward",
    number: 9,
    age: 24,
    dob: "1999-02-05",
    gender: "Male",
    nationality: "Nepal",
    bio: "Alex is a fast and versatile forward with great finishing skills.",
    image: "/player.png",
  },
  {
    id: 6,
    name: "Sam Wilson",
    position: "Midfielder",
    number: 8,
    age: 27,
    dob: "1996-09-14",
    gender: "Male",
    nationality: "Nepal",
    bio: "Sam excels at both attacking and defensive duties in midfield, providing balance to the team.",
    image: "/player.png",
  },
  {
    id: 7,
    name: "Tom Miller",
    position: "Defender",
    number: 5,
    age: 29,
    dob: "1994-12-22",
    gender: "Male",
    nationality: "Nepal",
    bio: "Tom is a solid and dependable defender with excellent tackling and marking skills.",
    image: "/player.png",
  },
  {
    id: 8,
    name: "Ryan Taylor",
    position: "Midfielder",
    number: 6,
    age: 25,
    dob: "1998-07-03",
    gender: "Male",
    nationality: "Nepal",
    bio: "Ryan is a creative midfielder who can provide assists and contribute to scoring.",
    image: "/player.png",
  },
];

export default function PlayerDetails() {
  const params = useParams();
  const playerId = Number(params.id);
  const player = players.find((p) => p.id === playerId);

  if (!player) {
    return (
      <div className="min-h-screen bg-linear-to-br from-black via-gray-900 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Player not found</h1>
          <Link href="/" className="text-[#EAE59B] hover:text-[#EAE59B]/80">
            ← Back to Players
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-linear-to-br from-[#12203B] via-black to-[#12203B] text-white py-42 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #EAE59B 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Top of your PlayerDetails component */}

        {/* BEAUTIFUL BACK BUTTON - WORKS 100% */}
        <Link
   
          href="/"
          className="inline-flex items-center gap-3 text-[#EAE59B] hover:text-white text-sm font-bold uppercase tracking-[0.2em] mb-16 transition-all duration-300 group cursor-pointer border-b-2 border-transparent hover:border-[#EAE59B] pb-1"
        >
          <span className="group-hover:-translate-x-2 transition-transform duration-300">
            ←
          </span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            Back to Home
          </span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: Player Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] lg:h-[600px] rounded-lg overflow-hidden border-2 border-[#EAE59B]/30 shadow-2xl shadow-[#EAE59B]/10"
          >
            <Image
              src={player.image}
              alt={player.name}
              fill
              className="object-cover"
              priority
            />
            {/* Jersey Number Overlay */}
            <div className="absolute bottom-8 left-8">
              <span className="text-[#EAE59B] text-sm font-bold uppercase tracking-wider block mb-1">
                Jersey No.
              </span>
              <span className="text-5xl font-bold text-white leading-none">
                #{player.number}
              </span>
            </div>
          </motion.div>

          {/* RIGHT: Player Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* Name & Position */}
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white tracking-wider">
                {player.name}
              </h1>
              <p className="text-[#EAE59B] text-sm font-bold uppercase tracking-[0.2em]  block">
                {player.position}
              </p>
              <div className="w-24 h-1 bg-[#EAE59B] mt-3"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#12203B]/50 backdrop-blur-sm border border-[#EAE59B]/20 rounded-lg p-6">
                <p className="text-gray-400 text-sm uppercase tracking-wider">
                  Age
                </p>
                <p className="text-[#EAE59B] text-2xl font-bold uppercase tracking-[0.2em] mt-2">
                  {player.age}
                </p>
              </div>
              <div className="bg-[#12203B]/50 backdrop-blur-sm border border-[#EAE59B]/20 rounded-lg p-6">
                <p className="text-gray-400 text-sm uppercase tracking-wider">
                  Nationality
                </p>
                <p className="text-[#EAE59B] text-2xl font-bold uppercase tracking-[0.2em]  mt-2">
                  {player.nationality}
                </p>
              </div>
              <div className="bg-[#12203B]/50 backdrop-blur-sm border border-[#EAE59B]/20 rounded-lg p-6">
                <p className="text-gray-400 text-sm uppercase tracking-wider">
                  Date of Birth
                </p>
                <p className="text-[#EAE59B] text-xl font-bold uppercase tracking-[0.2em]  mt-2">
                  {new Date(player.dob).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="bg-[#12203B]/50 backdrop-blur-sm border border-[#EAE59B]/20 rounded-lg p-6">
                <p className="text-gray-400 text-sm uppercase tracking-wider">
                  Gender
                </p>
                <p className="text-[#EAE59B] text-xl font-bold uppercase tracking-[0.2em]  mt-2">
                  {player.gender}
                </p>
              </div>
            </div>

            {/* Biography */}
            <div className="bg-[#12203B]/50 backdrop-blur-sm border-l-4 border-[#EAE59B] p-8 rounded-r-lg">
              <h2 className="text-[#EAE59B] text-2xl font-bold uppercase tracking-[0.2em]  my-2">
                Biography
              </h2>
              <p className="text-gray-200 text-md leading-relaxed">
                {player.bio}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Subtle Decorative Blurs */}
        <div className="absolute -top-10 -left-10 w-80 h-80 bg-[#EAE59B]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#EAE59B]/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
