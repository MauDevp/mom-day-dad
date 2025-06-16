"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { useState, useEffect } from "react"

interface FloatingHeart {
  id: number
  x: number
  delay: number
  duration: number
  size: number
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
      // Valores predeterminados optimizados para mejor rendimiento móvil
    const seedHearts = [
      { x: 20, delay: 0, duration: 15, size: 18 },
      { x: 40, delay: 1, duration: 18, size: 20 },
      { x: 60, delay: 2, duration: 14, size: 16 },
      { x: 80, delay: 1.5, duration: 16, size: 18 },
    ]

    const newHearts: FloatingHeart[] = seedHearts.map((seed, i) => ({
      id: i,
      x: seed.x,
      delay: seed.delay,
      duration: seed.duration,
      size: seed.size,
    }))
    
    setHearts(newHearts)
  }, [])

  if (!isClient) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-rose-300/30"
          style={{
            left: `${heart.x}%`,
            bottom: "-50px",
          }}
          animate={{
            y: [-50, typeof window !== 'undefined' ? -window.innerHeight - 50 : -800],
            rotate: [0, 360],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            ease: "linear",
            delay: heart.delay,
          }}
        >
          <Heart 
            size={heart.size} 
            className="fill-current"
            style={{
              filter: "drop-shadow(0 0 10px rgba(251, 113, 133, 0.3))"
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}
