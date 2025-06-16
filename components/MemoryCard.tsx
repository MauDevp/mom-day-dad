"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { memo } from "react"

interface MemoryCardProps {
  memory: {
    title: string
    description: string
    image: string
    color: string
  }
  index: number
}

const MemoryCard = memo(({ memory, index }: MemoryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut" 
      }}
      whileHover={{ 
        scale: 1.03,
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="h-full"
    >
      <Card className={`group overflow-hidden border-2 border-rose-200 hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${memory.color} h-full relative`}>
        {/* Efecto de brillo en hover */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
          whileHover={{
            x: "200%",
            transition: { duration: 0.8 }
          }}
        />
        
        {/* Contenido */}
        <CardContent className="p-0 relative z-10">
          <motion.div 
            className="aspect-[4/3] overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={memory.image}
              alt={memory.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <div className="p-6">
            <motion.h3 
              className="font-bold text-xl text-gray-800 mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {memory.title}
            </motion.h3>
            
            <motion.p 
              className="text-gray-700 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {memory.description}
            </motion.p>
            
            {/* Decoración inferior */}
            <motion.div
              className="flex justify-center mt-6 gap-2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-rose-400 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
})

MemoryCard.displayName = "MemoryCard"

export default MemoryCard
