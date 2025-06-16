"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useInView } from "@/hooks/use-in-view"

interface Hobby {
  title: string
  description: string
  icon: React.ReactNode
  image?: string
}

interface HobbyCardProps {
  hobby: Hobby
  index: number
}

export default function HobbyCard({ hobby, index }: HobbyCardProps) {
  const { ref, isCentered } = useInView()

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut" as const
      }
    }
  }

  return (
    <motion.div
      ref={ref as any}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      animate={isCentered ? {
        scale: 1.05,
        y: -10,
        transition: { duration: 0.3 }
      } : {}}
      className="h-full"
    >
      <Card className={`text-center border-rose-200 transition-all duration-300 bg-white/90 h-full relative group overflow-hidden ${
        isCentered ? 'shadow-xl' : 'hover:shadow-xl'
      }`}>
        {/* Efecto de ondas optimizado para mobile */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-rose-100/50 to-pink-100/50"
          initial={{ scale: 0, borderRadius: "50%", opacity: 0 }}
          animate={isCentered ? { 
            scale: 2,
            borderRadius: "0%",
            opacity: 1,
            transition: { duration: 0.5 }
          } : { opacity: 0 }}
        />
        
        <CardContent className="p-3 sm:p-6 relative z-10">
          <motion.div 
            className="aspect-video mb-2 sm:mb-4 overflow-hidden rounded-lg"
            animate={isCentered ? { scale: 1.05 } : {}}
            transition={{ duration: 0.3 }}
          >
            <img
              src={hobby.image || "/placeholder.svg"}
              alt={hobby.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div 
            className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-4 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full flex items-center justify-center text-white shadow-lg"
            animate={isCentered ? {
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            } : {}}
            transition={{ duration: 0.6 }}
          >
            {hobby.icon}
          </motion.div>

          <motion.h3 
            className="font-bold text-base sm:text-lg text-gray-800 mb-2 sm:mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {hobby.title}
          </motion.h3>

          <motion.p 
            className="text-gray-600 leading-relaxed text-sm sm:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {hobby.description}
          </motion.p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
