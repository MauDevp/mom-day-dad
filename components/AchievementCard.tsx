"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Star } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

interface Achievement {
  title: string
  years: string
  description: string
  icon: React.ReactNode
  emoji: string
  details: string[]
  bgColor: string
  borderColor: string
}

interface AchievementCardProps {
  achievement: Achievement
  index: number
}

export default function AchievementCard({ achievement, index }: AchievementCardProps) {
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
    },
    hover: { 
      y: -10,
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  }

  return (
    <motion.div
      ref={ref as any}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      animate={isCentered ? "hover" : "visible"}
      viewport={{ once: true, amount: 0.2 }}
      className="h-full"
    >
      <Card className={`border-2 ${achievement.borderColor} transition-all duration-500 bg-gradient-to-br ${achievement.bgColor} h-full relative overflow-hidden group ${
        isCentered ? 'shadow-2xl' : 'hover:shadow-2xl'
      }`}>
        {/* Efecto de brillo optimizado para mobile */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
          animate={isCentered ? {
            x: "200%",
            transition: { duration: 0.8 }
          } : {}}
        />
        
        {/* Emoji flotante en la esquina */}
        <motion.div
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-2xl sm:text-3xl"
          animate={{
            rotate: [0, 10, -10, 0],
            scale: isCentered ? [1, 1.2, 1] : [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5,
          }}
        >
          {achievement.emoji}
        </motion.div>
        
        <CardHeader className="text-center pb-2 sm:pb-4 relative z-10 px-3 sm:px-6 pt-3 sm:pt-6">
          <motion.div 
            className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2 sm:mb-4 bg-gradient-to-br from-rose-400 via-pink-400 to-red-400 rounded-full flex items-center justify-center text-white shadow-lg"
            animate={isCentered ? {
              rotate: 360,
              scale: 1.15,
              boxShadow: "0 10px 30px rgba(244, 63, 94, 0.4)",
            } : {}}
            transition={{ duration: 0.6 }}
          >
            {achievement.icon}
          </motion.div>
          
          <CardTitle className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mb-1 sm:mb-2">
            {achievement.title}
          </CardTitle>
          <CardDescription className="text-rose-600 font-semibold text-xs sm:text-sm">
            {achievement.years}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-3 sm:space-y-6 relative z-10 px-3 sm:px-6 pb-3 sm:pb-6">
          <p className="text-gray-700 text-center leading-relaxed font-medium text-sm sm:text-base">
            {achievement.description}
          </p>
          
          <div className="space-y-2 sm:space-y-3">
            <h4 className="font-bold text-gray-800 text-center flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-rose-500" />
              <span className="hidden sm:inline">Sus Especialidades Mágicas</span>
              <span className="sm:hidden">Especialidades</span>
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-rose-500" />
            </h4>
            <ul className="space-y-1 sm:space-y-2">
              {achievement.details.map((detail, idx) => (
                <motion.li 
                  key={idx} 
                  className="text-xs sm:text-sm text-gray-700 flex items-start gap-2 sm:gap-3 font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  animate={isCentered ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: idx * 0.1 }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: isCentered ? [1, 1.4, 1] : [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: idx * 0.3,
                    }}
                    className="mt-0.5"
                  >
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 text-rose-500 fill-current flex-shrink-0" />
                  </motion.div>
                  <span className="leading-relaxed">{detail}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
