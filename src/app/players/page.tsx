"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const players = [
  { id: 1, name: "John Smith", position: "Forward", number: 10, image: "👤" },
  {
    id: 2,
    name: "Mike Johnson",
    position: "Midfielder",
    number: 7,
    image: "👤",
  },
  {
    id: 3,
    name: "David Williams",
    position: "Defender",
    number: 4,
    image: "👤",
  },
  {
    id: 4,
    name: "Chris Brown",
    position: "Goalkeeper",
    number: 1,
    image: "👤",
  },
  { id: 5, name: "Alex Davis", position: "Forward", number: 9, image: "👤" },
  { id: 6, name: "Sam Wilson", position: "Midfielder", number: 8, image: "👤" },
  { id: 7, name: "Tom Miller", position: "Defender", number: 5, image: "👤" },
  {
    id: 8,
    name: "Ryan Taylor",
    position: "Midfielder",
    number: 6,
    image: "👤",
  },
  {
    id: 9,
    name: "James Anderson",
    position: "Forward",
    number: 11,
    image: "👤",
  },
];

export default function Players() {
  return (
    <div className="min-h-screen bg-linear-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-linear-to-r from-[#EAE59B] to-[#EAE59B]/80 bg-clip-text text-transparent">
            Our Players
          </h1>
          <p className="text-xl text-gray-300">Meet the stars of TFC</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {players.map((player, index) => (
            <Link key={player.id} href={`/players/${player.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                style={{ transformStyle: "preserve-3d" }}
                className="bg-gray-800/50 backdrop-blur-sm border border-[#EAE59B]/30 rounded-xl p-6 hover:border-[#EAE59B] transition-all cursor-pointer group"
              >
                <div className="text-center mb-4">
                  <div className="text-8xl mb-4 transform group-hover:scale-110 transition-transform">
                    {player.image}
                  </div>
                  <div className="text-4xl font-bold text-[#EAE59B] mb-2">
                    #{player.number}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {player.name}
                  </h3>
                  <p className="text-gray-400">{player.position}</p>
                </div>
                <div className="mt-4 text-center">
                  <span className="text-[#EAE59B] group-hover:text-[#EAE59B]/80 transition-colors">
                    View Details →
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
