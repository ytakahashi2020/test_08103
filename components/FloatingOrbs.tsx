'use client';

import { motion } from 'framer-motion';

export default function FloatingOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Large orb */}
      <motion.div
        className="absolute w-[600px] h-[600px] -top-48 -left-48"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-transparent blur-3xl" />
      </motion.div>

      {/* Medium orb */}
      <motion.div
        className="absolute w-[400px] h-[400px] top-1/3 -right-32"
        animate={{
          x: [0, -70, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-tl from-purple-500/20 via-pink-500/20 to-transparent blur-3xl" />
      </motion.div>

      {/* Small orb */}
      <motion.div
        className="absolute w-[300px] h-[300px] bottom-0 left-1/3"
        animate={{
          x: [0, 50, 0],
          y: [0, -70, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-pink-500/20 via-cyan-500/20 to-transparent blur-3xl" />
      </motion.div>

      {/* Tiny floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}