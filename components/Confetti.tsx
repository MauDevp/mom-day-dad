"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface ConfettiPiece {
  id: number
  x: number
  y: number
  color: string
  size: number
  rotation: number
  velocity: { x: number; y: number }
}

interface ConfettiProps {
  trigger: boolean
  onComplete: () => void
}

export default function Confetti({ trigger, onComplete }: ConfettiProps) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([])

  useEffect(() => {
    if (trigger && typeof window !== 'undefined') {
      const colors = ["#fb7185", "#f43f5e", "#e11d48", "#fbbf24", "#f59e0b", "#a855f7", "#8b5cf6"]
      
      // Valores predeterminados para mejor rendimiento
      const seedPieces = Array.from({ length: 30 }, (_, i) => ({
        x: (window.innerWidth / 30) * i + (i % 3) * 50,
        y: window.innerHeight + 50,
        colorIndex: i % colors.length,
        size: 4 + (i % 3) * 2,
        rotation: i * 45,
        velocity: {
          x: (i % 2 === 0 ? 1 : -1) * (2 + (i % 4)),
          y: -(8 + (i % 5)),
        },
      }))

      const newPieces: ConfettiPiece[] = seedPieces.map((seed, i) => ({
        id: i,
        x: seed.x,
        y: seed.y,
        color: colors[seed.colorIndex],
        size: seed.size,
        rotation: seed.rotation,
        velocity: seed.velocity,
      }))
      
      setPieces(newPieces)
      
      // Limpiar después de la animación
      setTimeout(() => {
        setPieces([])
        onComplete()
      }, 3000)
    }
  }, [trigger, onComplete])

  if (pieces.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute"
          style={{
            backgroundColor: piece.color,
            width: piece.size,
            height: piece.size,
            borderRadius: piece.id % 2 === 0 ? "50%" : "0%",
          }}
          initial={{
            x: piece.x,
            y: piece.y,
            rotate: piece.rotation,
            opacity: 1,
          }}
          animate={{
            x: piece.x + piece.velocity.x * 50,
            y: -100,
            rotate: piece.rotation + 720,
            opacity: 0,
          }}
          transition={{
            duration: 3,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
}
