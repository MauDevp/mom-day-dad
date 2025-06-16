"use client"

import { motion } from "framer-motion"
import { Heart, Star, Sparkles } from "lucide-react"
import { memo, useMemo } from "react"

const LoveParticles = memo(() => {
  const particles = useMemo(() => 
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      icon: i % 3 === 0 ? Heart : i % 3 === 1 ? Star : Sparkles,
      delay: i * 0.8,
      duration: 8 + (i % 3) * 2,
      x: (i * 13) % 100,
      y: (i * 17) % 100,
      size: 16 + (i % 3) * 8,
    })), []
  )

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {particles.map(({ id, icon: Icon, delay, duration, x, y, size }) => (
        <motion.div
          key={id}
          className="absolute text-rose-300/40"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            fontSize: `${size}px`,
          }}
          animate={{
            y: [-20, -100, -20],
            x: [-10, 10, -10],
            rotate: [0, 360, 0],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
        >
          <Icon className="w-full h-full fill-current" />
        </motion.div>
      ))}
    </div>
  )
})

LoveParticles.displayName = "LoveParticles"

export default LoveParticles
