"use client";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
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
    
export default function PlayerSec() {
  return (

<section
id="players"
className="min-h-screen bg-linear-to-br from-black via-gray-900 to-black text-white py-20"
>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  
  {/* Header Section */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-left mb-16"
  >
    <motion.span
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="text-[#EAE59B] text-sm font-bold uppercase tracking-[0.2em] mb-4 block"
    >
      tfc players
    </motion.span>

    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white tracking-wider">
      Meet the <span className="text-[#EAE59B]">TFC Squad</span>
    </h1>

    <div className="w-24 h-1 bg-[#EAE59B]"></div>
  </motion.div>

  {/* Players Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
    {players.map((player, index) => (
      <Link key={player.id} href={`/players/${player.id}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.04 }}
          className="relative bg-gray-900/60 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-yellow-300/20 rounded-2xl p-6 transition-all group cursor-pointer overflow-hidden"
        >
          {/* Glow Background */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity to-white blur-2xl"></div>

          {/* Player Image */}
          <div className="w-full flex justify-center mb-6">
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="w-52 h-52 overflow-hidden shadow-lg mx-auto rounded-lg">
                <Image
                  src={player.image}
                  alt={player.name}
                  width={208}
                  height={208}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>

          {/* Player Details */}
          <div className="text-center relative">
            <h3 className="text-2xl font-bold text-white tracking-wide group-hover:text-[#EAE59B] transition">
              {player.name}
            </h3>

            <p className="text-gray-300 mt-1 text-sm uppercase tracking-wider group-hover:text-gray-200">
              {player.position}
            </p>
          </div>
        </motion.div>
      </Link>
    ))}
  </div>
</div>
</section>
  );
}
