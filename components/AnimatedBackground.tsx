"use client"

import { motion } from "framer-motion"
import { memo } from "react"

const AnimatedBackground = memo(() => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Gradiente base animado */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(251, 207, 232, 0.1) 0%, rgba(252, 165, 165, 0.1) 25%, rgba(254, 215, 170, 0.1) 50%, rgba(251, 207, 232, 0.1) 75%, rgba(252, 165, 165, 0.1) 100%)",
            "linear-gradient(45deg, rgba(252, 165, 165, 0.1) 0%, rgba(254, 215, 170, 0.1) 25%, rgba(251, 207, 232, 0.1) 50%, rgba(252, 165, 165, 0.1) 75%, rgba(254, 215, 170, 0.1) 100%)",
            "linear-gradient(45deg, rgba(254, 215, 170, 0.1) 0%, rgba(251, 207, 232, 0.1) 25%, rgba(252, 165, 165, 0.1) 50%, rgba(254, 215, 170, 0.1) 75%, rgba(251, 207, 232, 0.1) 100%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Círculos flotantes */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-20"
          style={{
            width: `${60 + i * 20}px`,
            height: `${60 + i * 20}px`,
            left: `${(i * 12) % 100}%`,
            top: `${(i * 15) % 100}%`,
            background: i % 3 === 0 
              ? "radial-gradient(circle, rgba(244, 63, 94, 0.3) 0%, transparent 70%)"
              : i % 3 === 1
              ? "radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(251, 146, 60, 0.3) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -40, 40, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}

      {/* Ondas suaves */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(244, 63, 94, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)
          `,
          backgroundSize: "400% 400%",
        }}
      />
    </div>
  )
})

AnimatedBackground.displayName = "AnimatedBackground"

export default AnimatedBackground
