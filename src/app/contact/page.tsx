"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Torus } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

function RotatingTorus() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Torus ref={meshRef} args={[1, 0.4, 16, 100]}>
      <meshStandardMaterial color="#EAE59B" metalness={0.8} roughness={0.2} />
    </Torus>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-linear-to-r from-[#EAE59B] to-[#EAE59B]/80 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300">Get in touch with TFC</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="h-[400px]"
          >
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} />
              <RotatingTorus />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-gray-800/50 backdrop-blur-sm border border-[#EAE59B]/30 rounded-xl p-8"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full px-4 py-3 bg-gray-900 border border-[#EAE59B]/30 rounded-lg text-white focus:outline-none focus:border-[#EAE59B] transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="w-full px-4 py-3 bg-gray-900 border border-[#EAE59B]/30 rounded-lg text-white focus:outline-none focus:border-[#EAE59B] transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={6}
                className="w-full px-4 py-3 bg-gray-900 border border-green-500/30 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-[#EAE59B] text-[#12203B] px-6 py-3 rounded-lg font-semibold hover:bg-[#EAE59B]/90 transition-colors"
            >
              Send Message
            </motion.button>

            <div className="mt-8 space-y-4 text-gray-300">
              <div className="flex items-center space-x-3">
                <span className="text-[#EAE59B]">📧</span>
                <span>contact@tfc.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[#EAE59B]">📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[#EAE59B]">📍</span>
                <span>123 Football Street, Sports City</span>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
