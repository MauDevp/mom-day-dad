"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

interface Quality {
  text: string
  color: string
}

interface QualityBadgeProps {
  quality: Quality
  index: number
}

export default function QualityBadge({ quality, index }: QualityBadgeProps) {
  const { ref, isCentered } = useInView()

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        delay: index * 0.05,
        ease: "easeOut" as const
      }
    }
  }

  return (
    <motion.div
      ref={ref as any}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      animate={isCentered ? {
        scale: 1.1,
        rotate: Math.random() * 10 - 5,
        zIndex: 10,
      } : {}}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <Badge
        variant="secondary"
        className={`${quality.color} px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium border border-rose-200 shadow-sm cursor-pointer relative overflow-hidden ${
          isCentered ? 'bg-rose-50' : 'hover:bg-rose-50'
        }`}
      >
        {/* Efecto de brillo optimizado para mobile */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-200/50 to-transparent -translate-x-full"
          animate={isCentered ? {
            x: "200%",
            transition: { duration: 0.5 }
          } : {}}
        />
        
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: isCentered ? [1, 1.3, 1] : [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.1,
          }}
        >
          <Star className="h-2 w-2 sm:h-3 sm:w-3 mr-1 sm:mr-2 fill-current" />
        </motion.div>
        <span className="relative z-10">{quality.text}</span>
      </Badge>
    </motion.div>
  )
}
