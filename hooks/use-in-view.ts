"use client"

import { useState, useEffect, useRef } from 'react'

export function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false)
  const [isCentered, setIsCentered] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
        
        // Calcular si está centrado en la pantalla
        if (entry.isIntersecting) {
          const rect = element.getBoundingClientRect()
          const windowHeight = window.innerHeight
          const elementCenter = rect.top + rect.height / 2
          const screenCenter = windowHeight / 2
          
          // Considerar centrado si está dentro del 30% del centro de la pantalla
          const threshold = windowHeight * 0.15
          const centered = Math.abs(elementCenter - screenCenter) < threshold
          setIsCentered(centered)
        } else {
          setIsCentered(false)
        }
      },
      {
        threshold: 0.1,
        ...options
      }
    )

    observer.observe(element)

    // Para mobile, también escuchar el scroll para actualizar el estado centrado
    const handleScroll = () => {
      if (!element) return
      
      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementCenter = rect.top + rect.height / 2
      const screenCenter = windowHeight / 2
      
      const threshold = windowHeight * 0.15
      const centered = Math.abs(elementCenter - screenCenter) < threshold && rect.top < windowHeight && rect.bottom > 0
      setIsCentered(centered)
    }

    // Throttle del scroll para mejor rendimiento
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', throttledScroll)
    }
  }, [])

  return { ref, isInView, isCentered }
}
