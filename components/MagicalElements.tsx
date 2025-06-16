"use client"

import { motion } from "framer-motion"
import { Star, Heart, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

interface MagicalElement {
  id: number
  x: number
  y: number
  type: 'star' | 'heart' | 'sparkle'
  size: number
  delay: number
}

export default function MagicalElements() {
  const [elements, setElements] = useState<MagicalElement[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Elementos mágicos que representan los momentos especiales con mamá
    const magicalMoments = [
      { x: 20, y: 15, type: 'heart' as const, size: 16, delay: 0 },
      { x: 80, y: 25, type: 'star' as const, size: 14, delay: 1 },
      { x: 40, y: 85, type: 'sparkle' as const, size: 12, delay: 2 },
      { x: 70, y: 60, type: 'heart' as const, size: 18, delay: 1.5 },
      { x: 15, y: 70, type: 'star' as const, size: 16, delay: 0.5 },
      { x: 90, y: 80, type: 'sparkle' as const, size: 14, delay: 2.5 },
      { x: 60, y: 20, type: 'heart' as const, size: 15, delay: 3 },
      { x: 30, y: 50, type: 'star' as const, size: 17, delay: 1.8 },
    ]

    const newElements: MagicalElement[] = magicalMoments.map((moment, i) => ({
      id: i,
      x: moment.x,
      y: moment.y,
      type: moment.type,
      size: moment.size,
      delay: moment.delay,
    }))
    
    setElements(newElements)
  }, [])

  if (!isClient) return null

  const getIcon = (type: MagicalElement['type'], size: number) => {
    const iconProps = { size, className: "fill-current" }
    switch (type) {
      case 'heart':
        return <Heart {...iconProps} />
      case 'star':
        return <Star {...iconProps} />
      case 'sparkle':
        return <Sparkles {...iconProps} />
    }
  }

  const getColor = (type: MagicalElement['type']) => {
    switch (type) {
      case 'heart':
        return 'text-rose-300/40'
      case 'star':
        return 'text-yellow-300/40'
      case 'sparkle':
        return 'text-pink-300/40'
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute ${getColor(element.type)}`}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            filter: "drop-shadow(0 0 8px rgba(251, 113, 133, 0.3))",
          }}
          animate={{
            scale: [0.8, 1.4, 0.8],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8 + (element.id % 3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.delay,
          }}
        >
          {getIcon(element.type, element.size)}
        </motion.div>
      ))}
    </div>
  )
}
