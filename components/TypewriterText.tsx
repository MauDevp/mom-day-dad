"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface TypewriterProps {
  texts?: string[]
  text?: string
  className?: string
  delay?: number
  speed?: number
}

export default function TypewriterText({ 
  texts = [],
  text = "",
  className = "",
  delay = 0,
  speed = 15
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  // Si solo hay un texto, usarlo directamente
  const textArray = texts.length > 0 ? texts : (text ? [text] : [""])

  useEffect(() => {
    if (textArray.length === 0) return

    const timeout = setTimeout(() => {
      const currentText = textArray[textIndex]
      
      if (!isDeleting) {
        // Escribiendo
        if (currentIndex < currentText.length) {
          setDisplayText(currentText.slice(0, currentIndex + 1))
          setCurrentIndex(currentIndex + 1)        } else {          // Texto completo, esperar antes de borrar (solo si hay múltiples textos)
          if (textArray.length > 1) {
            setTimeout(() => setIsDeleting(true), 800)
          }
        }
      } else {
        // Borrando
        if (currentIndex > 0) {
          setDisplayText(currentText.slice(0, currentIndex - 1))
          setCurrentIndex(currentIndex - 1)
        } else {
          // Texto borrado, cambiar al siguiente
          setIsDeleting(false)
          setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length)
        }
      }
    }, delay > 0 ? delay : (isDeleting ? speed / 3 : speed))

    // Limpiar delay después del primer uso
    if (delay > 0) {
      delay = 0
    }

    return () => clearTimeout(timeout)
  }, [currentIndex, textIndex, isDeleting, textArray, delay, speed])

  return (
    <motion.span 
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block text-yellow-200 font-bold"
      >
        |
      </motion.span>
    </motion.span>
  )
}
