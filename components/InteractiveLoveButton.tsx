"use client"

import { motion } from "framer-motion"
import { memo, useState, useCallback, useRef, useEffect } from "react"

const InteractiveLoveButton = memo(() => {
  const [clickCount, setClickCount] = useState(0)
  const [showMessage, setShowMessage] = useState(false)
  const [currentMessage, setCurrentMessage] = useState("")
  const [availableMessages, setAvailableMessages] = useState<string[]>([])
  const messageTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const messageCounterRef = useRef(0) // Contador para manejar múltiples clics

  const loveMessages = [
    "¡Eres la mejor mamá del mundo! 💖",
    "¡Te amo hasta el infinito y más allá! 🌟",
    "¡Gracias por ser mi superheroína! 🦸‍♀️",
    "¡Eres mi persona favorita! 🥰",
    "¡Tu amor es mi superpoder! ✨",
    "¡Eres pura magia, Mamá! 🎭",
    "¡Mi corazón es tuyo para siempre! 💝",
    "¡Eres mi sol en días grises! ☀️",
    "Mamá, eres mi mayor inspiración, la fuerza que me impulsa cada día.",
    "Tu amor es mi motor y tu sabiduría, mi guía. Gracias por tanto, mamá.",
    "Cada paso que doy es más firme sabiendo que cuento contigo. Eres mi ejemplo a seguir.",
    "Contigo aprendí a soñar en grande. Eres mi motivación más hermosa.",
    "Eres mi luz en cualquier oscuridad, mi recordatorio de que todo es posible. ¡Te adoro, mamá!",
    "Gracias por enseñarme la fuerza del amor incondicional. Eres mi heroína y mi refugio.",
    "Tu fe en mí es el regalo más grande. Me das alas para volar alto, mamá.",
    "Eres la razón por la que siempre busco ser mi mejor versión. Mi admiración por ti no tiene fin.",
  ]

  // Inicializar mensajes disponibles al montar el componente
  useEffect(() => {
    setAvailableMessages([...loveMessages])
  }, [])
  // Función para obtener un mensaje aleatorio sin repetir
  const getRandomMessage = useCallback(() => {
    // Si se agotaron todos los mensajes, reiniciar la lista
    if (availableMessages.length === 0) {
      const newAvailableMessages = [...loveMessages]
      const randomIndex = Math.floor(Math.random() * newAvailableMessages.length)
      const selectedMessage = newAvailableMessages[randomIndex]
      
      setAvailableMessages(newAvailableMessages.filter((_, index) => index !== randomIndex))
      return selectedMessage
    }
    
    // Seleccionar un mensaje aleatorio de los disponibles
    const randomIndex = Math.floor(Math.random() * availableMessages.length)
    const selectedMessage = availableMessages[randomIndex]
    
    // Remover el mensaje seleccionado de los disponibles
    setAvailableMessages(prev => prev.filter((_, index) => index !== randomIndex))
    return selectedMessage
  }, [availableMessages])
  const handleClick = useCallback(() => {
    setClickCount(prev => prev + 1)
    
    // Incrementar contador de mensajes para manejar múltiples clics
    messageCounterRef.current += 1
    const currentCounter = messageCounterRef.current
    
    // Obtener nuevo mensaje aleatorio
    const newMessage = getRandomMessage()
    setCurrentMessage(newMessage)
    setShowMessage(true)
    
    // Limpiar timeout anterior si existe
    if (messageTimeoutRef.current) {
      clearTimeout(messageTimeoutRef.current)
    }
    
    // Crear menos elementos de corazones voladores para mejor rendimiento
    for (let i = 0; i < 3; i++) {
      const heart = document.createElement("div")
      heart.innerHTML = "💖"
      heart.className = "fixed text-xl pointer-events-none z-50"
      heart.style.left = `${50 + (Math.random() - 0.5) * 15}%`
      heart.style.top = `${80 + (Math.random() - 0.5) * 8}%`
      heart.style.transform = "translate(-50%, -50%)"
      
      document.body.appendChild(heart)
      
      // Animación manual optimizada
      const animation = heart.animate([
        { 
          transform: "translate(-50%, -50%) scale(0) rotate(0deg)", 
          opacity: 0 
        },
        { 
          transform: "translate(-50%, -50%) scale(1) rotate(180deg)", 
          opacity: 1,
          offset: 0.3
        },
        { 
          transform: `translate(-50%, -${200 + i * 30}%) scale(0.3) rotate(360deg)`, 
          opacity: 0 
        }
      ], {
        duration: 1000 + i * 150,
        easing: "ease-out"
      })
      
      animation.onfinish = () => {
        if (document.body.contains(heart)) {
          document.body.removeChild(heart)
        }
      }
    }
    
    // Establecer nuevo timeout solo si no hay clics más recientes
    messageTimeoutRef.current = setTimeout(() => {
      // Solo ocultar el mensaje si este timeout corresponde al último clic
      if (currentCounter === messageCounterRef.current) {
        setShowMessage(false)
        messageTimeoutRef.current = null
      }
    }, 5000) // Aumenté el tiempo a 5 segundos para mejor lectura
  }, [getRandomMessage])
  // Limpiar timeout al desmontar el componente
  useEffect(() => {
    return () => {
      if (messageTimeoutRef.current) {
        clearTimeout(messageTimeoutRef.current)
      }
      // Limpiar cualquier corazón flotante que pueda quedar
      const hearts = document.querySelectorAll('[class*="fixed text-xl pointer-events-none z-50"]')
      hearts.forEach(heart => {
        if (document.body.contains(heart)) {
          document.body.removeChild(heart)
        }
      })
    }
  }, [])

  return (
    <>      <motion.button
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-rose-400 via-pink-500 to-red-500 rounded-full shadow-2xl z-40 flex items-center justify-center text-white text-xl sm:text-2xl font-bold cursor-pointer select-none"
        whileHover={{ 
          scale: 1.1,
          rotate: [0, -10, 10, 0],
          boxShadow: "0 0 40px rgba(244, 63, 94, 0.6)"
        }}
        whileTap={{ scale: 0.85 }}
        onClick={handleClick}
        animate={{
          boxShadow: [
            "0 0 20px rgba(244, 63, 94, 0.4)",
            "0 0 40px rgba(244, 63, 94, 0.7)",
            "0 0 20px rgba(244, 63, 94, 0.4)",
          ],
          y: [0, -5, 0],
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }
        }}
      >
        <motion.span
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          💖
        </motion.span>
      </motion.button>      {/* Mensaje flotante */}
      {showMessage && currentMessage && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: -30 }}
          className="fixed bottom-24 sm:bottom-28 right-4 sm:right-6 bg-gradient-to-br from-white via-rose-50 to-pink-50 text-rose-700 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-2xl border-2 border-rose-200 z-50 max-w-xs sm:max-w-sm text-center font-medium text-sm sm:text-base backdrop-blur-md"
          key={`${currentMessage}-${clickCount}`} // Mejor key para forzar re-render
          style={{
            filter: 'drop-shadow(0 10px 20px rgba(244, 63, 94, 0.2))'
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative"
          >
            <span className="text-lg sm:text-xl mr-2">💕</span>
            {currentMessage}
            <span className="text-lg sm:text-xl ml-2">💕</span>
          </motion.div>
          
          {/* Triángulo del globo de diálogo */}
          <div className="absolute -bottom-2 right-6 sm:right-8 w-4 h-4 bg-gradient-to-br from-white via-rose-50 to-pink-50 rotate-45 border-r-2 border-b-2 border-rose-200 shadow-lg"></div>
          
          {/* Efecto de brillo sutil */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      )}      {/* Contador de amor */}
      {clickCount > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="fixed bottom-16 sm:bottom-20 right-6 sm:right-8 bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 text-white text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full z-40 font-bold shadow-lg border-2 border-white/20"
          style={{
            filter: 'drop-shadow(0 4px 8px rgba(244, 63, 94, 0.3))'
          }}
        >
          <motion.span
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ❤️
          </motion.span>
          <span className="ml-1">{clickCount}</span>
        </motion.div>
      )}
    </>
  )
})

InteractiveLoveButton.displayName = "InteractiveLoveButton"

export default InteractiveLoveButton
