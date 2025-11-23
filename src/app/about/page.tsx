"use client";

import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

function FloatingBox() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <Box ref={meshRef} args={[2, 2, 2]}>
      <meshStandardMaterial color="#EAE59B" metalness={0.8} roughness={0.2} />
    </Box>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-linear-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-linear-to-r from-[#EAE59B] to-[#EAE59B]/80 bg-clip-text text-transparent">
            About TFC
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#EAE59B]">Our Story</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              TFC (The Football Club) was founded with a vision to revolutionize
              the world of football. We combine passion, dedication, and
              cutting-edge technology to create an unforgettable experience for
              players and fans alike.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our team consists of world-class athletes, coaches, and support
              staff who work tirelessly to achieve excellence both on and off
              the field. We believe in fostering talent, promoting
              sportsmanship, and building a community that shares our love for
              the beautiful game.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: "Founded", value: "2020" },
                { label: "Trophies", value: "15+" },
                { label: "Players", value: "50+" },
                { label: "Fans", value: "1M+" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800/50 border border-[#EAE59B]/30 rounded-lg p-4 text-center"
                >
                  <div className="text-3xl font-bold text-[#EAE59B]">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="h-[400px]"
          >
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} />
              <FloatingBox />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
