"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  speed: number
  opacity: number
}

export default function ParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const colors = [
      "#fda4af", // Rosa suave como su sonrisa
      "#fb7185", // Rosa cálido como sus abrazos
      "#f43f5e", // Rosa intenso como su amor
      "#fbbf24", // Dorado como su corazón
      "#f59e0b", // Amarillo como la luz que irradia
      "#fcd34d", // Oro suave como sus consejos
    ]
      // Partículas optimizadas que representan el amor de mamá (reducidas para mejor rendimiento)
    const loveParticles = [
      { x: 15, y: 25, size: 3, speed: 1.8, opacity: 0.5 },
      { x: 85, y: 70, size: 4, speed: 2.2, opacity: 0.3 },
      { x: 45, y: 15, size: 2, speed: 1.5, opacity: 0.6 },
      { x: 75, y: 90, size: 3, speed: 1.9, opacity: 0.4 },
      { x: 25, y: 60, size: 2, speed: 2.1, opacity: 0.5 },
      { x: 65, y: 35, size: 3, speed: 1.7, opacity: 0.3 },
    ]

    const newParticles: Particle[] = loveParticles.map((particle, i) => ({
      id: i,
      x: particle.x,
      y: particle.y,
      size: particle.size,
      color: colors[i % colors.length],
      speed: particle.speed,
      opacity: particle.opacity,
    }))
    
    setParticles(newParticles)
  }, [])

  if (!isClient) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            backgroundColor: particle.color,
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
            filter: "blur(0.5px)",
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}40`,
          }}          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
            opacity: [particle.opacity * 0.8, particle.opacity, particle.opacity * 0.8],
          }}
          transition={{
            duration: particle.speed * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.id * 0.3,
          }}
        />
      ))}
    </div>
  )
}
