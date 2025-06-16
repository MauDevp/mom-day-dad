"use client"

import { motion } from "framer-motion"
import { memo, useEffect, useState } from "react"

interface CelebrationProps {
  trigger: boolean
  onComplete?: () => void
}

const CelebrationExplosion = memo(({ trigger, onComplete }: CelebrationProps) => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (trigger) {
      setIsActive(true)
      const timer = setTimeout(() => {
        setIsActive(false)
        onComplete?.()
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [trigger, onComplete])

  if (!isActive) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Explosión de confeti */}
      {Array.from({ length: 50 }).map((_, i) => {
        const isHeart = i % 3 === 0
        const isStars = i % 3 === 1
        const colors = [
          "bg-rose-400", "bg-pink-400", "bg-red-400", 
          "bg-orange-400", "bg-yellow-400", "bg-purple-400"
        ]
        
        return (
          <motion.div
            key={i}
            className={`absolute w-3 h-3 ${colors[i % colors.length]} rounded-full`}
            style={{
              left: "50%",
              top: "50%",
            }}
            initial={{
              scale: 0,
              opacity: 1,
              x: 0,
              y: 0,
              rotate: 0,
            }}
            animate={{
              scale: [0, 1, 0.5],
              opacity: [1, 1, 0],
              x: (Math.random() - 0.5) * 800,
              y: (Math.random() - 0.5) * 600 - 200,
              rotate: Math.random() * 720,
            }}
            transition={{
              duration: 2.5,
              ease: "easeOut",
              delay: i * 0.02,
            }}
          >
            {isHeart ? "💖" : isStars ? "⭐" : ""}
          </motion.div>
        )
      })}

      {/* Ondas de celebración */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute inset-0 border-4 border-rose-400/30 rounded-full"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          initial={{
            scale: 0,
            opacity: 0.8,
          }}
          animate={{
            scale: 4,
            opacity: 0,
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Mensaje de celebración */}
      <motion.div
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-2xl shadow-2xl text-2xl font-bold text-center"
        initial={{
          scale: 0,
          opacity: 0,
          rotate: -10,
        }}
        animate={{
          scale: [0, 1.2, 1],
          opacity: [0, 1, 1, 0],
          rotate: [10, 0, -5, 0],
        }}
        transition={{
          duration: 3,
          times: [0, 0.2, 0.8, 1],
          ease: "easeOut",
        }}
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 0.6,
            repeat: 3,
            ease: "easeInOut",
          }}
        >
          ¡Te amo, Mamá! 💖✨
        </motion.div>
      </motion.div>
    </div>
  )
})

CelebrationExplosion.displayName = "CelebrationExplosion"

export default CelebrationExplosion
