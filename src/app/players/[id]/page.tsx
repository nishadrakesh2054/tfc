"use client";
import Link from "next/link";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { playerBySlugQuery } from "@/sanity/lib/queries";

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

export default function PlayerDetails() {
  const params = useParams();
  const router = useRouter();
  const slug = params.id as string;
  const [player, setPlayer] = useState<Player | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlayer() {
      try {
        const data = await client.fetch(playerBySlugQuery, { slug });
        setPlayer(data);
      } catch (error) {
        console.error("Error fetching player:", error);
        setPlayer(null);
      } finally {
        setLoading(false);
      }
    }
    if (slug) {
      fetchPlayer();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-[#12203B] via-black to-[#12203B] text-white flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #EAE59B 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="text-center relative z-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-[#EAE59B]/30 border-t-[#EAE59B] rounded-full mx-auto mb-4"
          />
          <div className="animate-pulse text-[#EAE59B] font-semibold">
            Loading player...
          </div>
        </div>
      </div>
    );
  }

  if (!player) {
    return (
      <div className="min-h-screen bg-linear-to-br from-black via-gray-900 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Player not found</h1>
          <Link
            href="/players"
            className="text-[#EAE59B] hover:text-[#EAE59B]/80"
          >
            ← Back to Players
          </Link>
        </div>
      </div>
    );
  }

  const imageUrl = player.image?.asset?.url
    ? urlFor(player.image)?.auto("format").url()
    : null;

  return (
    <section className="min-h-screen bg-linear-to-br from-[#12203B] via-black to-[#12203B] text-white py-20 lg:py-24 relative overflow-hidden">
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

      {/* Subtle Decorative Blurs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#EAE59B]/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#EAE59B]/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EAE59B]/3 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 relative z-10">
        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-4 mb-12 lg:mb-16"
        >
          <button
            onClick={() => router.back()}
            className="text-[#EAE59B] hover:text-white text-sm font-semibold uppercase tracking-wider transition-colors duration-300"
          >
            <span className="group-hover:-translate-x-2 transition-transform duration-300">
              ←
            </span>
            <span>Back</span>
          </button>
          <span className="text-gray-500">|</span>
          <Link
            href="/players"
            className="text-[#EAE59B] hover:text-white text-sm font-semibold uppercase tracking-wider transition-colors duration-300"
          >
            All Players
          </Link>
          <span className="text-gray-500">|</span>
          <Link
            href="/"
            className="text-[#EAE59B] hover:text-white text-sm font-semibold uppercase tracking-wider transition-colors duration-300"
          >
            Home
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* LEFT: Player Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full"
          >
            <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] rounded-2xl overflow-hidden border-2 border-[#EAE59B]/30 shadow-2xl shadow-[#EAE59B]/20 bg-gray-900/50 backdrop-blur-sm">
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={player.image?.alt || player.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="w-full h-full bg-linear-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <span className="text-gray-600 text-6xl font-bold">
                    {player.name.charAt(0)}
                  </span>
                </div>
              )}

              {/* Gradient Overlay for better text readability */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

              {/* Jersey Number Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-6 left-6 right-6"
              >
                <div className="bg-black/40 backdrop-blur-md border border-[#EAE59B]/30 rounded-xl p-4 lg:p-6">
                  <span className="text-[#EAE59B] text-xs lg:text-sm font-bold uppercase tracking-wider block mb-2">
                    Jersey No.
                  </span>
                  <span className="text-4xl lg:text-6xl font-bold text-white leading-none block">
                    #{player.number}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: Player Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 lg:space-y-10"
          >
            {/* Name & Position */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-white tracking-tight leading-tight">
                {player.name}
              </h1>
              <div className="flex items-center gap-3 mb-4">
                <p className="text-[#EAE59B] text-sm lg:text-base font-semibold uppercase tracking-[0.15em]">
                  {player.position}
                </p>
                <div className="h-0.5 w-14 bg-[#EAE59B]"></div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4 lg:gap-6"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-[#12203B]/60 backdrop-blur-md border border-[#EAE59B]/20 rounded-xl p-5 lg:p-6 shadow-lg hover:shadow-[#EAE59B]/20 hover:border-[#EAE59B]/40 transition-all duration-300"
              >
                <p className="text-gray-400 text-xs lg:text-sm uppercase tracking-wider mb-2">
                  Age
                </p>
                <p className="text-[#EAE59B] text-xl lg:text-2xl font-semibold uppercase tracking-[0.15em]">
                  {player.age}
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-[#12203B]/60 backdrop-blur-md border border-[#EAE59B]/20 rounded-xl p-5 lg:p-6 shadow-lg hover:shadow-[#EAE59B]/20 hover:border-[#EAE59B]/40 transition-all duration-300"
              >
                <p className="text-gray-400 text-xs lg:text-sm uppercase tracking-wider mb-2">
                  Nationality
                </p>
                <p className="text-[#EAE59B] text-base lg:text-xl font-semibold uppercase tracking-[0.15em]">
                  {player.nationality}
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-[#12203B]/60 backdrop-blur-md border border-[#EAE59B]/20 rounded-xl p-5 lg:p-6 shadow-lg hover:shadow-[#EAE59B]/20 hover:border-[#EAE59B]/40 transition-all duration-300"
              >
                <p className="text-gray-400 text-xs lg:text-sm uppercase tracking-wider mb-2">
                  Date of Birth
                </p>
                <p className="text-[#EAE59B] text-xs lg:text-base font-semibold uppercase tracking-[0.15em] leading-tight">
                  {new Date(player.dob).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-[#12203B]/60 backdrop-blur-md border border-[#EAE59B]/20 rounded-xl p-5 lg:p-6 shadow-lg hover:shadow-[#EAE59B]/20 hover:border-[#EAE59B]/40 transition-all duration-300"
              >
                <p className="text-gray-400 text-xs lg:text-sm uppercase tracking-wider mb-2">
                  Gender
                </p>
                <p className="text-[#EAE59B] text-base lg:text-lg font-semibold uppercase tracking-[0.15em]">
                  {player.gender}
                </p>
              </motion.div>
            </motion.div>

            {/* Biography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-[#12203B]/60 backdrop-blur-md border-l-4 border-[#EAE59B] p-6 lg:p-8 rounded-r-xl shadow-xl"
            >
              <h2 className="text-[#EAE59B] text-lg lg:text-xl font-semibold uppercase tracking-[0.15em] mb-3 lg:mb-5">
                Biography
              </h2>
              <p className="text-gray-200 text-sm lg:text-base leading-relaxed">
                {player.bio}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
