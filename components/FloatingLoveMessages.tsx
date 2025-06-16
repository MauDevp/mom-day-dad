"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Heart } from "lucide-react"

const loveMessages = [
  "¡Te amo, Mamá! 💕",
  "Eres la mejor mamá del mundo 🌟",
  "Gracias por todo tu amor ❤️",
  "Mi heroína favorita 💪",
  "Tu amor me da fuerza 🌈",
  "Eres mi inspiración 🌸",
  "Mi mamá hermosa 💝",
  "Tu sonrisa ilumina mi día ☀️",
  "¡Eres increíble! ✨",
  "Te quiero infinito 🥰"
]

export default function FloatingLoveMessages() {
  const [currentMessage, setCurrentMessage] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    const showMessage = () => {
      if (!isVisible) {
        const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)]
        setCurrentMessage(randomMessage)
        setIsVisible(true)
        
        // Ocultar después de 3 segundos
        setTimeout(() => {
          setIsVisible(false)
        }, 3000)
      }
    }

    // Mostrar mensaje cada 15-25 segundos
    const interval = setInterval(showMessage, 15000 + Math.random() * 10000)
    
    return () => clearInterval(interval)
  }, [isVisible])

  if (!isClient) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ 
            scale: 0, 
            opacity: 0, 
            x: "-50%", 
            y: "-50%",
            rotate: -10 
          }}
          animate={{ 
            scale: 1, 
            opacity: 1, 
            x: "-50%", 
            y: "-50%",
            rotate: 0 
          }}
          exit={{ 
            scale: 0, 
            opacity: 0, 
            x: "-50%", 
            y: "-50%",
            rotate: 10 
          }}
          transition={{
            type: "spring",
            damping: 15,
            stiffness: 300
          }}
          className="fixed top-1/3 left-1/2 z-40 pointer-events-none"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="bg-gradient-to-r from-rose-400 to-pink-400 text-white px-6 py-3 rounded-full shadow-lg relative"
            style={{
              boxShadow: "0 10px 30px rgba(244, 63, 94, 0.4), 0 0 20px rgba(244, 63, 94, 0.3)"
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-2 -left-2"
            >
              <Heart className="h-4 w-4 text-white fill-current" />
            </motion.div>
            
            <span className="font-bold text-lg whitespace-nowrap">
              {currentMessage}
            </span>
            
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 15, -15, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute -bottom-2 -right-2"
            >
              <Heart className="h-4 w-4 text-white fill-current" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
