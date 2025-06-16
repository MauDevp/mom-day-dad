"use client"

import { motion } from "framer-motion"
import { memo } from "react"

interface OptimizedDecorativeElementProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  animationType?: "float" | "rotate" | "pulse" | "scale"
  duration?: number
  delay?: number
}

const OptimizedDecorativeElement = memo(function OptimizedDecorativeElement({
  children,
  className = "",
  style = {},
  animationType = "float",
  duration = 4,
  delay = 0,
}: OptimizedDecorativeElementProps) {  const getAnimation = () => {
    switch (animationType) {
      case "float":
        return {
          y: [0, -20, 0],
          transition: {
            duration,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay,
          },
        }
      case "rotate":
        return {
          rotate: [0, 360],
          transition: {
            duration,
            repeat: Infinity,
            ease: "linear" as const,
            delay,
          },
        }
      case "pulse":
        return {
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
          transition: {
            duration,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay,
          },
        }
      case "scale":
        return {
          scale: [0.8, 1.2, 0.8],
          transition: {
            duration,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay,
          },
        }
      default:
        return {}
    }
  }

  return (
    <motion.div
      className={`absolute ${className}`}
      style={style}
      animate={getAnimation()}
    >
      {children}
    </motion.div>
  )
})

export default OptimizedDecorativeElement
