"use client";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { playersQueryLimited } from "@/sanity/lib/queries";

interface Player {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  position: string;
  number: number;
  age: number;
  dob: string;
  gender: string;
  nationality: string;
  bio: string;
  image: {
    asset: {
      _id: string;
      url: string;
      metadata?: {
        dimensions?: {
          width: number;
          height: number;
          aspectRatio: number;
        };
      };
    };
    alt: string;
  };
}

export default function PlayerSec() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlayers() {
      try {
        const data = await client.fetch(playersQueryLimited(8));
        setPlayers(data || []);
      } catch (error) {
        console.error("Error fetching players:", error);
        setPlayers([]);
      } finally {
        setLoading(false);
      }
    }
    fetchPlayers();
  }, []);
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
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="relative bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-80 animate-pulse"
              />
            ))}
          </div>
        ) : players.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {players.map((player, index) => {
              const imageUrl = player.image?.asset?.url
                ? urlFor(player.image)?.auto("format").url()
                : null;

              return (
                <Link key={player._id} href={`/players/${player.slug.current}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.01 }}
                    className="group relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-black/30 p-2 shadow-xl transition-all duration-500"
                  >
                    {/* Box Frame */}
                    <div className="relative w-full aspect-4/5 rounded-2xl overflow-hidden bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 shadow-inner">
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={player.name}
                          fill
                          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 320px"
                          className="object-cover"
                          priority={index < 6}
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-gray-600">
                          {player.name.charAt(0)}
                        </div>
                      )}

                      {/* Player Details */}
                      <div className="absolute inset-x-0 bottom-0 p-4">
                        <div className="text-center">
                          <h3 className="text-xl font-semibold text-white tracking-wide">
                            {player.name}
                          </h3>
                          <p className="text-sm uppercase tracking-[0.4em] text-[#c9c372] mt-2">
                            {player.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-400">
            <p>No players found. Add some in the Sanity Studio!</p>
          </div>
        )}
        <div className=" sm:flex items-center justify-center pt-10">
          <Link href="/players">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#EAE59B] text-[#12203B] px-6 py-2 rounded-sm font-bold text-sm uppercase tracking-wider hover:bg-[#12203B] hover:text-[#EAE59B] transition-all  border-transparent hover:border-[#EAE59B]"
            >
              show all players
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
