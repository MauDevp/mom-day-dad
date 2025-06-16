"use client"

import { useState, useEffect, useMemo, useCallback, memo } from "react"
import { motion } from "framer-motion"
import {
  Heart,
  Star,
  Award,
  Coffee,
  BookOpen,
  Utensils,
  Home,
  Sparkles,
  Camera,
  Gift,
  Music,
  Palette,
  Menu,
  X,
  Crown,
  Smile,
  Sun,
  Rainbow,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import AnimatedBackground from "@/components/AnimatedBackground"
import LoveParticles from "@/components/LoveParticles"
import ParticleBackground from "@/components/ParticleBackground"
import InteractiveLoveButton from "@/components/InteractiveLoveButton"
import CelebrationExplosion from "@/components/CelebrationExplosion"
import TypewriterText from "@/components/TypewriterText"
import FloatingLoveMessages from "@/components/FloatingLoveMessages"
import MemoryCard from "@/components/MemoryCard"

export default function MamaPortfolio() {
  const [activeSection, setActiveSection] = useState("inicio")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detectar dispositivo móvil para optimizar rendimiento
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Textos más cálidos y emotivos
  const heroTexts = [
    "Mi mamá es pura magia y amor 💖",
    "La mujer más increíble que conozco ✨",
    "Mi superheroína favorita del universo 🦸‍♀️",
    "El corazón más grande del mundo 💝",
    "Mi ejemplo de fuerza y ternura 🌟",
  ]

  // Variantes de animación optimizadas
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }), [])

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  }), [])

  const cardVariants = useMemo(() => ({
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
    hover: {
      scale: 1.03,
      y: -5,
      transition: {
        duration: 0.2,
      },
    },
  }), [])

  const navItems = [
    { id: "inicio", label: "Mi Reina Hermosa", icon: <Crown className="h-4 w-4" /> },
    { id: "logros", label: "Sus Súper Poderes", icon: <Award className="h-4 w-4" /> },
    { id: "recuerdos", label: "Momentos de Oro", icon: <Camera className="h-4 w-4" /> },
    { id: "cualidades", label: "Por Qué Es Única", icon: <Star className="h-4 w-4" /> },
    { id: "hobbies", label: "Sus Pasiones", icon: <Palette className="h-4 w-4" /> },
    { id: "carta", label: "Mi Carta de Amor", icon: <Heart className="h-4 w-4" /> },
  ]

  const achievements = [
    {
      title: "🍳 La Chef Más Mágica del Universo",
      description:
        "Ay, Mamá... tus manitas son pura magia cuando cocinas. No sé cómo le haces, pero TODO lo que tocas se convierte en la cosa más deliciosa del mundo. Desde esas comidas que me hacen brincar de la cama como niño en Navidad, hasta esas cenitas especiales donde transformas ingredientes súper normales en banquetes dignos de reyes. Tu cocina es mi rinconcito favorito del universo entero porque ahí está tu corazón gigante haciendo maravillas.",
      icon: <Utensils className="h-6 w-6" />,
      years: "Desde que abrí los ojitos y para toda la eternidad",
      details: [
        "🌅 Esos desayunos mágicos que me hacían sentir el rey del castillo",
        "🍽️ Las cenas familiares donde tu comida abraza corazones",
        "🧙‍♀️ Tus remedios caseros que curan ABSOLUTAMENTE TODO (eres bruja buena, lo sé)",
        "✨ La forma en que creas obras maestras de literalmente NADA",
        "💖 Ese sazón especial que solo existe en tus manos benditas"
      ],
      emoji: "🍳",
      bgColor: "from-orange-100 to-yellow-100",
      borderColor: "border-orange-200",
    },
    {
      title: "🩺 La Doctora del Alma y Corazones Rotos",
      description:
        "Mamá, no existe universidad en este planeta que enseñe lo que tú sabes. Eres la experta mundial en curar heridas invisibles, en secar lagrimitas con un solo abrazo mágico, y en hacer que TODA la tristeza se evapore con tu simple presencia divina. Tus besitos realmente tienen súper poderes curativos (en serio), y tus abrazos son mi lugar más seguro y calentito en este mundo a veces muy loco.",
      icon: <Heart className="h-6 w-6" />,
      years: "24/7, los 365 días del año, desde que llegué a tu vida",
      details: [
        "🌙 Esas nochesitas en vela cuando estaba malito y tú eras mi ángel guardián",
        "🤗 Tus abrazos que pueden curar cualquier mal del alma y del corazón",
        "🗣️ La forma en que SIEMPRE sabes exactamente qué palabras decir",
        "🔮 Tu intuición maternal que nunca, pero NUNCA jamás falla",
        "✨ Ese poder especial tuyo de hacer que todo en el mundo esté bien"
      ],
      emoji: "💖",
      bgColor: "from-rose-100 to-pink-100",
      borderColor: "border-rose-200",
    },
    {
      title: "📚 La Maestra Más Sabia del Planeta Tierra",
      description:
        "Ay, mi Mamá... tú fuiste mi primera maestra y sigues siendo la MÁS INCREÍBLE de todas. Me enseñaste a dar mis primeros pasitos, a decir mis primeras palabritas, a ser una persona buena, y lo más importante de todo: me enseñaste a amar sin límites ni condiciones. Cada regaño venía con una lección de vida, cada consejo tuyo era como un diamante brillante que me hacía más fuerte y más sabio. Eres la razón por la que soy quien soy hoy, y no hay libro en el mundo que pueda enseñarme lo que tú me has enseñado con tu amor infinito.",
      icon: <BookOpen className="h-6 w-6" />,
      years: "En cada abrazo, en cada conversación desde siempre",
      details: [
        "🤝 Me enseñaste que la vida es mejor cuando se comparte con amor",
        "🎓 Tus lecciones de vida valen más que cualquier título universitario",
        "👥 La forma en que me mostraste cómo tratar a las personas con amor",
        "💭 Esas pláticas profundas que cambiaron mi forma de ver al mundo",
        "👑 Tu ejemplo silencioso que habla más fuerte que mil palabras"
      ],
      emoji: "📚",
      bgColor: "from-blue-100 to-indigo-100",
      borderColor: "border-blue-200",
    },
    {
      title: "🏠 La Arquitecta de Nuestro Hogar de Amor",
      description:
        "Mamá, tú no solo construiste una casita... construiste nuestro HOGAR. Cada rincón tiene tu toque de amor, cada espacio respira la calidez de tu corazón gigantesco. Hiciste de nuestra casa el lugar más hermoso, acogedor y mágico del mundo, no por las cositas materiales, sino por todo el amor que pusiste en cada detalle. Es nuestro refugio, nuestro santuario de felicidad pura.",
      icon: <Home className="h-6 w-6" />,
      years: "Desde el primer día y hasta el infinito y más allá",
      details: [
        "🎨 La decoración que refleja tu mente original y creativa",
        "🛋️ Esos espacios acogedores donde SIEMPRE quiero estar",
        "✨ La forma en que haces que cualquier lugar se sienta como hogar",
        "🏡 Tu toque mágico que convierte espacios en recuerdos preciosos",
        "💝 El amor que se respira y se siente en cada habitación"
      ],
      emoji: "🏠",
      bgColor: "from-green-100 to-emerald-100",
      borderColor: "border-green-200",
    },
    {
      title: "🦸‍♀️ La Superheroína Sin Capa (Pero Con Corazón Infinito)",
      description:
        "Mamá, eres mi Wonder Woman personal, mi superheroína favorita de todo el universo. Fuiste mamá Y papá cuando el mundo lo necesitó, doblaste tu fuerza sobrehumana, multiplicaste tu amor infinito, y NUNCA, pero nunca jamás te rendiste ante nada. Tienes la valentía de mil guerreros legendarios y la ternura de millones de angelitos. Eres mi ejemplo viviente de que NO existe nada imposible cuando se tiene un corazón gigante como el tuyo ❤️. ",
      icon: <Award className="h-6 w-6" />,
      years: "En cada desafío que enfrentamos juntos, mano a mano",
      details: [
        "💪 Tu fuerza sobrehumana que me protegió siempre de todo mal",
        "🦁 La valentía increíble con la que enfrentas cada obstáculo",
        "🎭 Tu capacidad mágica de ser todo lo que necesito cuando lo necesito",
        "💝 El amor que multiplicas justo cuando más falta hace en el mundo",
        "🌟 Esa determinación tuya que me enseña que TODO se puede lograr"
      ],
      emoji: "🦸‍♀️",
      bgColor: "from-purple-100 to-violet-100",
      borderColor: "border-purple-200",
    },
  ]

  const memories = [
    {
      title: "👶 Mis Primeros Pasitos Mágicos",
      description: "Esos momentos súper especiales cuando celebraste cada pequeño logrito mío como si fuera la cosa más grandiosa del universo entero. Tu emoción era mi combustible para seguir intentando.",
      image: "/foto12.jpg?height=300&width=400",
      color: "from-rose-200 to-pink-200",
    },
    {
      title: "🎂 Cumpleaños de Ensueño",
      description:
        "Cada cumpleaños se convertía en una celebración única y mágica, con decoraciones hechas con tanto amor y pastelitos que sabían a gloria pura. Eres nuestra hada madrina personal.",
      image: "/foto13.jpg?height=300&width=400",
      color: "from-purple-200 to-violet-200",
    },
    {
      title: "🚗 Aventuras Familiares Épicas",
      description: "Esos viajecitos y paseos que convertías en aventuras épicas súper emocionantes, sin importar si íbamos a la esquina o al fin del mundo. La magia estaba en estar juntos.",
      image: "/foto7_1.png?height=300&width=400",
      color: "from-blue-200 to-cyan-200",
    },
    {
      title: "☀️ Momentitos Cotidianos de Oro",
      description: "Las pequeñas cositas del día a día que hacías súper especiales con tu amor y tu dedicación absoluta. Cada momento contigo era un regalo precioso.",
      image: "/foto10.jpg?height=300&width=400",
      color: "from-yellow-200 to-orange-200",
    },
    {
      title: "🎈 Instantes de Alegría Eterna",
      description: "Este es uno de esos momentos, mamá, donde la alegría parece detenerse en el tiempo. Tu sonrisa ilumina la foto, tal como ilumina mi vida. Es un recuerdo preciado que guardo en esta galería como un recordatorio constante de la felicidad que me brindas.",
      image: "/foto6.jpg?height=300&width=400",
      color: "from-green-200 to-emerald-200",
    },
    {
      title: "😊 Un Hogar Lleno de Tu Amor",
      description: "Esta imagen, mamá, nos recuerda que donde estás tú, hay un hogar lleno de amor. Tu sonrisa es el reflejo de la alegría que nos das, y estos momentos juntos son el cimiento de nuestros recuerdos más preciosos. Gracias por ser el corazón que nos une.",
      image: "/foto11.jpg?height=300&width=400",
      color: "from-indigo-200 to-purple-200",
    },
  ]

  const hobbies = [
    {
      title: "🎵✨ Mi Mamá Cantante Favorita",
      description:
        "Mamá, cuando te escucho cantando mientras haces cualquier cosa, mi corazón se llena de felicidad 🥰. Tu voz convierte nuestra casa en el lugar más alegre del mundo. ¡Eres mi artista favorita! 🎤💖",
      icon: <Music className="h-6 w-6" />,
      gradient: "from-purple-100 to-pink-100",
    },
    {
      title: "🏠💕 La Decoradora Mágica",
      description:
        "¡No hay nadie como tú para hacer que cualquier rincón se vea hermoso! 🪄 Tienes ese don especial de transformar todo con tus manos mágicas. Nuestra casa es preciosa gracias a tu creatividad ✨🎨",
      icon: <Home className="h-6 w-6" />,
      gradient: "from-amber-100 to-orange-100",
    },
    {
      title: "📖🌟 Mi Guerrera Lectora",
      description: 
        "Me da tanto orgullo verte esforzándote por leer cada día 💪📖. Tu determinación me inspira mucho, Mamá. Cada pequeño paso que das es una victoria que celebro contigo. ¡Eres increíble! 🏆💝",
      icon: <BookOpen className="h-6 w-6" />,
      gradient: "from-blue-100 to-indigo-100",
    },
    {
      title: "🌱💚 La Mamá de las Plantitas",
      description:
        "Tus plantitas te aman tanto como nosotros 🌿💕. Las cuidas con una paciencia y amor que me derrite el corazón. Ver cómo florecen bajo tu cuidado es como verte florecer a ti también 🌸✨",
      icon: <Sparkles className="h-6 w-6" />,
      gradient: "from-green-100 to-emerald-100",
    },
    {
      title: "💪🧘‍♀️ Mi Mamá Fitness & Zen",
      description:
        "¡Qué orgullo me das en el gym y haciendo yoga! 🏋️‍♀️ Tu disciplina y ganas de cuidarte me motivan todos los días. Eres la prueba viviente de que se puede ser fuerte y serena a la vez 🙏💖",
      icon: <Star className="h-6 w-6" />,
      gradient: "from-teal-100 to-cyan-100",
    },
    {
      title: "🎬🍿 Compañera de Pelis Perfecta",
      description:
        "Las noches de películas son muy buenas 🥰🎭. Con tu preparación de botanas locas, siempre son las mejores pelis superando al cine. Lo mas importante es que tu compañía hace que cualquier película sea especial 💫🤗",
      icon: <Camera className="h-6 w-6" />,
      gradient: "from-rose-100 to-pink-100",
    },
    {
      title: "🧘‍♀️🕯️ Mi Maestra de Paz Interior",
      description:
        "Verte meditar me tranquiliza tanto, Mamá 🧘‍♀️✨. Tienes esa sabiduría para encontrar calma en cualquier momento. Me enseñas que la paz viene de adentro 🙏💜. Eres mi ejemplo de serenidad 🌸",
      icon: <Sun className="h-6 w-6" />,
      gradient: "from-violet-100 to-purple-100",
    },
    {
      title: "🚀💼 La Emprendedora Imparable",
      description:
        "¡No hay límites para ti, Mamá! 💪✨ Siempre tienes mil ideas y proyectos increíbles. Tu espíritu emprendedor me fascina y me inspira a perseguir mis sueños como tú persigues los tuyos 🌟💖",
      icon: <Sparkles className="h-6 w-6" />,
      gradient: "from-yellow-100 to-amber-100",
    },
    {
      title: "🔧🛠️ La Súper Reparadora",
      description:
        "Mamá, eres como una superheroína 🦸‍♀️✨. No hay nada que no sepas arreglar o resolver. Siempre encuentras la manera de solucionar todo con esas manos mágicas tuyas 🙌💫. ¡Eres mi heroína personal!",
      icon: <Award className="h-6 w-6" />,
      gradient: "from-emerald-100 to-teal-100",
    },
  ]

  const qualities = [
    { text: "💖 Amor incondicional e infinito", color: "bg-rose-100 text-rose-700" },
    { text: "⏰ Paciencia más grande que el universo", color: "bg-blue-100 text-blue-700" },
    { text: "💪 Fuerza sobrehumana increíble", color: "bg-purple-100 text-purple-700" },
    { text: "🧠 Sabiduría natural que asombra", color: "bg-green-100 text-green-700" },
    { text: "💝 Corazón más grande que el planeta", color: "bg-pink-100 text-pink-700" },
    { text: "🙌 Manos sanadoras mágicas", color: "bg-yellow-100 text-yellow-700" },
    { text: "😊 Sonrisa que ilumina todo", color: "bg-orange-100 text-orange-700" },
    { text: "🤗 Abrazos que reconfortan el alma", color: "bg-red-100 text-red-700" },
    { text: "🦁 Valentía que inspira y motiva", color: "bg-indigo-100 text-indigo-700" },
    { text: "🎁 Generosidad sin límites ni condiciones", color: "bg-teal-100 text-teal-700" },
    { text: "🔮 Intuición maternal súper poderosa", color: "bg-violet-100 text-violet-700" },
    { text: "✨ Creatividad que desborda belleza", color: "bg-emerald-100 text-emerald-700" },
    { text: "🏔️ Perseverancia inquebrantable", color: "bg-slate-100 text-slate-700" },
    { text: "😇 Bondad genuina y pura", color: "bg-sky-100 text-sky-700" },
    { text: "😂 Humor que alegra cualquier día", color: "bg-lime-100 text-lime-700" },
    { text: "🛡️ Protección eterna y amorosa", color: "bg-amber-100 text-amber-700" },
  ]

  const scrollToSection = useCallback((sectionId: string) => {
    setActiveSection(sectionId)
    
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }, [])

  const triggerCelebration = useCallback(() => {
    setShowCelebration(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id)
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection)
      }
    }

    // Throttle optimizado para mejor rendimiento
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledHandleScroll, { passive: true })
    return () => window.removeEventListener("scroll", throttledHandleScroll)
  }, [activeSection, navItems])

  // Componente de navegación memoizado
  const NavigationItem = memo(({ item, index, isActive }: { item: typeof navItems[0], index: number, isActive: boolean }) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 + 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant={isActive ? "default" : "ghost"}
        size="sm"
        onClick={() => scrollToSection(item.id)}
        className={`flex items-center gap-2 transition-all duration-300 ${
          isActive
            ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:from-rose-600 hover:to-pink-600 shadow-lg"
            : "text-gray-600 hover:text-rose-600 hover:bg-rose-50"
        }`}
      >
        {item.icon}
        {item.label}
      </Button>
    </motion.div>
  ))

  NavigationItem.displayName = "NavigationItem"

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 relative overflow-hidden">
      {/* Componentes de fondo optimizados para móvil */}
      <ParticleBackground />
      {!isMobile && <AnimatedBackground />}
      {!isMobile && <LoveParticles />}
      <CelebrationExplosion 
        trigger={showCelebration} 
        onComplete={() => setShowCelebration(false)} 
      />
      
      {/* Botón de amor interactivo */}
      <InteractiveLoveButton />
      
      {/* Mensajes flotantes de amor - reducidos en móvil */}
      {!isMobile && <FloatingLoveMessages />}
      
      {/* Navigation mejorada con diseño mobile-first */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-rose-200 shadow-sm"
      >
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <motion.div 
              className="flex items-center gap-1.5 sm:gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Crown className="h-5 w-5 sm:h-6 sm:w-6 text-rose-500 fill-current" />
              </motion.div>
              <span className="font-bold text-gray-800 text-sm sm:text-base">Mi Reina</span>
            </motion.div>

            {/* Desktop Navigation - oculto en mobile */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <NavigationItem 
                  key={item.id}
                  item={item}
                  index={index}
                  isActive={activeSection === item.id}
                />
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="ghost" 
                size="sm" 
                className="lg:hidden p-2" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? 
                    <X className="h-5 w-5" /> : 
                    <Menu className="h-5 w-5" />
                  }
                </motion.div>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Navigation - mejorado */}
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden py-3 border-t border-rose-200"
            >
              <div className="grid grid-cols-1 gap-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant={activeSection === item.id ? "default" : "ghost"}
                      size="sm"
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center gap-2 justify-start w-full h-12 text-sm ${
                        activeSection === item.id
                          ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg"
                          : "text-gray-600 hover:text-rose-600 hover:bg-rose-50"
                      }`}
                    >
                      {item.icon}
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Header Hero Section - Mobile-first y optimizado */}
      <section
        id="inicio"
        className="relative overflow-hidden bg-gradient-to-r from-rose-400 via-pink-400 to-orange-400 text-white pt-14 sm:pt-16 min-h-screen flex items-center"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Elementos decorativos optimizados para mobile */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${15 + (i * 12) % 70}%`,
                top: `${20 + (i * 15) % 60}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.3, 0.1],
                scale: [0.8, 1.2, 0.8],
                rotate: [0, 180, 0],
              }}
              transition={{
                duration: 8 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.6,
              }}
            >
              {i % 4 === 0 ? (
                <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-white/20 fill-current" />
              ) : i % 4 === 1 ? (
                <Star className="h-3 w-3 sm:h-4 sm:w-4 text-white/20 fill-current" />
              ) : i % 4 === 2 ? (
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-white/20" />
              ) : (
                <Sun className="h-3 w-3 sm:h-4 sm:w-4 text-white/20" />
              )}
            </motion.div>
          ))}
        </div>

        <div className="relative container mx-auto px-4 py-12 sm:py-20 text-center">
          <motion.div 
            className="mb-6 sm:mb-8"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              className="relative inline-block"
              animate={{
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.img
                src="/foto9.jpg?height=200&width=200"
                alt="Mi mamá hermosa, la reina de mi corazón"
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full mx-auto mb-4 sm:mb-6 border-3 sm:border-4 border-white/60 shadow-2xl object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            
            <motion.div
              className="flex justify-center items-center gap-2 sm:gap-4 mb-4 sm:mb-6"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Crown className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 text-yellow-300 fill-current" />
              <Rainbow className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 text-yellow-300" />
              <Crown className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 text-yellow-300 fill-current" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.h1 
              className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 font-serif leading-tight"
              animate={{
                textShadow: [
                  "0 0 20px rgba(255,255,255,0.5)",
                  "0 0 40px rgba(255,255,255,0.8)",
                  "0 0 20px rgba(255,255,255,0.5)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Para Mi
              </motion.span>
              <motion.span
                className="block text-yellow-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                Reina del Corazón
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mb-6 sm:mb-8"
          >
            <TypewriterText 
              texts={heroTexts}
              className="text-base sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 opacity-95 font-medium"
              delay={50}
              speed={10}
            />
          </motion.div>

          <motion.div 
            className="flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-lg md:text-xl mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 15, -15, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 fill-current text-red-200" />
            </motion.div>
            <span className="font-medium text-center">
              La mujer que lo es TODO para mí
            </span>
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -15, 15, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <Heart className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 fill-current text-red-200" />
            </motion.div>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto space-y-3 sm:space-y-6 px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl opacity-95 leading-relaxed font-medium">
              Este rinconcito especial del internet es tu portafolio de amor, mamá hermosa. 
              Aquí celebramos TODOS tus súper poderes como la madre más increíble del universo entero.
            </p>
            <p className="text-xs sm:text-base md:text-lg lg:text-xl opacity-90 leading-relaxed">
              Cada sección está llena hasta el tope del amor gigantesco, la admiración profunda 
              y la gratitud infinita que siento por ti cada segundo de cada día. 
              ¡Eres mi sol, mi luna y todas mis estrellitas juntas! ✨
            </p>
          </motion.div>

          {/* Scroll indicator optimizado para mobile */}
          <motion.div
            className="mt-8 sm:mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="cursor-pointer inline-block"
              onClick={() => scrollToSection("logros")}
            >
              <div className="w-6 h-8 sm:w-8 sm:h-12 border-2 border-white/60 rounded-full flex justify-center p-1 sm:p-2 bg-white/10 backdrop-blur-sm">
                <motion.div
                  animate={{
                    y: [0, 8, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-1 h-2 sm:w-1.5 sm:h-4 bg-white/80 rounded-full"
                />
              </div>
              <p className="text-xs sm:text-sm mt-2 opacity-80">Descubre más amor aquí abajo</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section - Renovada completamente */}
      <section id="logros" className="container mx-auto px-4 py-20 relative overflow-hidden">
        {/* Fondo decorativo sutil */}
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${20 + (i * 15) % 60}%`,
                top: `${10 + (i * 20) % 80}%`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [0.8, 1.2, 0.8],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 12 + (i % 3) * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5,
              }}
            >
              <Heart className="h-8 w-8 text-rose-200" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block"
            >
              <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-full p-4 mb-6">
                <Crown className="h-12 w-12 text-rose-500 mx-auto" />
              </div>
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 font-serif">
              Los Súper Poderes de Mi
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">
                Reina del Corazón
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
              Porque ser mamá es la profesión más importante, hermosa y poderosa del universo entero, 
              y tú, mi amor, eres la MEJOR en tu campo. Aquí están todas las razones por las que eres mi heroína.
            </p>
            
            <motion.div
              className="flex justify-center items-center gap-2 text-rose-600"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="h-5 w-5 fill-current" />
              <span className="font-medium">Cada logro está lleno de amor infinito</span>
              <Heart className="h-5 w-5 fill-current" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto relative z-10 px-6 sm:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="h-full"
              whileHover="hover"
            >
              <Card className={`border-2 ${achievement.borderColor} hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${achievement.bgColor} h-full relative overflow-hidden group min-h-[400px] sm:min-h-[450px]`}>
                {/* Efecto de brillo en hover mejorado */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                  whileHover={{
                    x: "200%",
                    transition: { duration: 0.8 }
                  }}
                />
                
                {/* Emoji flotante en la esquina - responsive */}
                <motion.div
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 text-2xl sm:text-3xl"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
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
                    whileHover={{
                      rotate: 360,
                      scale: 1.15,
                      boxShadow: "0 10px 30px rgba(244, 63, 94, 0.4)",
                    }}
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
                          transition={{ delay: idx * 0.1 }}
                        >
                          <motion.div
                            animate={{
                              rotate: [0, 360],
                              scale: [1, 1.3, 1],
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
          ))}
        </motion.div>

        {/* Mensaje especial al final de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16 relative z-10"
        >
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-200 max-w-4xl mx-auto">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-4xl mb-4"
            >
              👑
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              ¡Y esto es solo el comienzo!
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Cada día descubro nuevas razones para admirarte más, mamá hermosa. 
              Eres mi inspiración, mi ejemplo a seguir, y la persona más extraordinaria que conozco. 
              ¡Gracias por ser la mamá más increíble del universo! 💖✨
            </p>
          </div>
        </motion.div>
      </section>

      {/* Memories Section */}
      <section id="recuerdos" className="bg-white/50 py-20 relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${15 + (i * 12) % 70}%`,
                top: `${20 + (i * 15) % 60}%`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [0.5, 1, 0.5],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 8 + (i % 4),
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.8,
              }}
            >
              <Camera className="h-6 w-6 text-rose-200/30" />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4 font-serif">
              Galería de Recuerdos Preciosos
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Cada foto cuenta una historia de amor, cada momento es un tesoro que guardamos en el corazón.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {memories.map((memory, index) => (
              <MemoryCard key={index} memory={memory} index={index} />
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.p 
              className="text-gray-500 italic text-lg"
              animate={{
                color: ["#6b7280", "#f43f5e", "#6b7280"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Qualities Section */}
      <section id="cualidades" className="container mx-auto px-4 py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4 font-serif">
            Sus Superpoderes Únicos
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Porque las mamás como tú tienen poderes especiales que hacen del mundo un lugar mejor.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Elementos decorativos */}
            <div className="absolute inset-0">
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${20 + (i * 15) % 60}%`,
                    top: `${10 + (i * 20) % 80}%`,
                  }}
                  animate={{
                    rotate: [0, 360],
                    scale: [0.5, 1.2, 0.5],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 6 + (i % 3),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.7,
                  }}
                >
                  <Sparkles className="h-4 w-4 text-rose-300/40" />
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="flex flex-wrap gap-3 sm:gap-4 justify-center relative z-10 px-6 sm:px-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {qualities.map((quality, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.1,
                    rotate: Math.random() * 10 - 5,
                    zIndex: 10,
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Badge
                    variant="secondary"
                    className={`${quality.color} hover:bg-rose-50 px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base font-medium border border-rose-200 shadow-sm cursor-pointer relative overflow-hidden`}
                  >
                    {/* Efecto de brillo en hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-200/50 to-transparent -translate-x-full"
                      whileHover={{
                        x: "200%",
                        transition: { duration: 0.5 }
                      }}
                    />
                    
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.1,
                      }}
                    >
                      <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-2 fill-current" />
                    </motion.div>
                    <span className="relative z-10">{quality.text}</span>
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="bg-white/50 py-20 relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${25 + (i * 12) % 50}%`,
                top: `${30 + (i * 16) % 40}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 7 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.9,
              }}
            >
              <Palette className="h-5 w-5 text-rose-200/30" />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4 font-serif">
              Sus Pasiones y Talentos
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Porque además de ser la mejor mamá, tienes tantos talentos que nos inspiran cada día.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto px-6 sm:px-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="h-full"
              >
                <Card className="text-center border-rose-200 hover:shadow-xl transition-all duration-300 bg-white/90 h-full relative group overflow-hidden min-h-[280px] sm:min-h-[320px]">
                  {/* Efecto de ondas en hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-rose-100/50 to-pink-100/50 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0, borderRadius: "50%" }}
                    whileHover={{ 
                      scale: 2,
                      borderRadius: "0%",
                      transition: { duration: 0.5 }
                    }}
                  />
                  
                  <CardContent className="p-4 sm:p-6 relative z-10 flex flex-col justify-center items-center text-center">
                    <motion.div 
                      className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full flex items-center justify-center text-white shadow-lg"
                      whileHover={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {hobby.icon}
                    </motion.div>

                    <motion.h3 
                      className="font-bold text-lg sm:text-xl text-gray-800 mb-3 sm:mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {hobby.title}
                    </motion.h3>

                    <motion.p 
                      className="text-gray-600 leading-relaxed text-sm sm:text-base flex-grow"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {hobby.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Love Letter Section */}
      <section id="carta" className="container mx-auto px-4 py-20 relative">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${10 + (i * 20) % 80}%`,
                top: `${15 + (i * 18) % 70}%`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [0.8, 1.5, 0.8],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 10 + (i % 4),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.2,
              }}
            >
              <Gift className="h-8 w-8 text-rose-200/20" />
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 font-serif">
              Una Carta Desde el Corazón
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: 45 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Card className="border-rose-200 bg-white/95 backdrop-blur-sm shadow-2xl relative overflow-hidden">
              {/* Bordes decorativos animados */}
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-orange-400"
                animate={{
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <CardContent className="p-8 md:p-12">
                <motion.div 
                  className="space-y-6 text-gray-700 leading-relaxed"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div 
                    className="text-center mb-8"
                    variants={itemVariants}
                  >
                    <motion.div
                      className="relative inline-block"
                      animate={{
                        rotate: [0, 3, -3, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <img
                        src="/foto4.jpg?height=150&width=150"
                        alt="Foto especial juntos"
                        className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-rose-200 object-cover"
                      />
                      <motion.div
                        className="absolute -inset-2 rounded-full border-2 border-rose-300/30"
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                  </motion.div>

                  <motion.p className="text-lg" variants={itemVariants}>
                    <span className="font-semibold text-rose-600">Mi querida y amada Mamá,</span>
                  </motion.p>

                  {[
                    "Hoy, en el Día del Padre, quiero celebrarte a ti, porque fuiste y sigues siendo tanto mamá como papá para mí. Esta página web es mi forma de crear un portafolio de todos tus logros, porque ser madre es la profesión más importante del mundo, y tú eres la mejor profesional que conozco.",
                    "No existen palabras suficientes para expresar todo lo que significas para mí. Has sido mi refugio en las tormentas, mi luz en la oscuridad y mi mayor ejemplo de fortaleza. Cada día me enseñas algo nuevo sobre el amor, la perseverancia y la bondad.",
                    "Cuando otros niños hablaban de sus papás, yo hablaba de ti con el mismo orgullo, porque fuiste ambos para mí. Tu amor multiplicado por dos, tu dedicación sin límites, tu capacidad de estar siempre ahí cuando más te necesitaba. Nunca me faltó nada porque tu amor llenaba todos los espacios.",
                    "Cada comida preparada con amor, cada desvelo cuando estaba enfermo/a, cada consejo sabio susurrado en el momento perfecto, cada abrazo que curaba cualquier dolor... todo eso construyó la persona que soy hoy. Tus manos no solo cuidaron mi cuerpo, sino que moldearon mi alma.",
                    "Admiro tu fuerza para enfrentar cada desafío, tu sabiduría para tomar las decisiones correctas, tu paciencia infinita conmigo y tu capacidad de encontrar alegría en las pequeñas cosas. Eres mi heroína sin capa, mi ejemplo a seguir, mi mayor inspiración.",
                    "Gracias por cada sacrificio silencioso, por cada noche sin dormir, por cada preocupación que cargaste sola para que yo pudiera ser feliz. Gracias por enseñarme que el amor verdadero no tiene condiciones ni límites.",
                  ].map((paragraph, index) => (
                    <motion.p key={index} variants={itemVariants}>
                      {paragraph}
                    </motion.p>
                  ))}

                  <motion.div 
                    className="text-lg font-medium text-rose-600 bg-rose-50 p-4 rounded-lg border-l-4 border-rose-400 relative overflow-hidden"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 25px -5px rgba(244, 63, 94, 0.2)",
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-rose-100/50 via-pink-100/50 to-rose-100/50"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <p className="relative z-10">
                      Gracias por ser la mejor mamá del mundo y el mejor papá que pude haber tenido. Eres mi todo, mi
                      ejemplo, mi mayor orgullo. Te amo más de lo que las palabras pueden expresar.
                    </p>
                  </motion.div>

                  <motion.div 
                    className="text-right italic text-lg"
                    variants={itemVariants}
                  >
                    Con todo mi amor y mi admiración eterna,
                    <br />
                    <span className="font-semibold">Tu Mau que te ama con todo el corazón</span>
                    <br />
                    <motion.span 
                      className="text-2xl"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      ❤️💕✨
                    </motion.span>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-rose-400 via-pink-400 to-orange-400 text-white py-16 relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${12 + (i * 11) % 76}%`,
                top: `${8 + (i * 13) % 84}%`,
              }}
              animate={{
                y: [0, -40, 0],
                rotate: [0, 360],
                scale: [0.5, 1.2, 0.5],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 12 + (i % 5),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5,
              }}
            >
              <Star className="h-4 w-4 text-white/20 fill-current" />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative">
          <motion.div 
            className="mb-8"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="h-12 w-12 mx-auto mb-6 fill-current" />
            </motion.div>
          </motion.div>

          <motion.h3 
            className="text-3xl font-bold mb-6 font-serif"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            animate={{
              textShadow: [
                "0 0 10px rgba(255,255,255,0.5)",
                "0 0 20px rgba(255,255,255,0.8)",
                "0 0 10px rgba(255,255,255,0.5)",
              ],
            }}
          >
            ¡Feliz Día del Padre, Mamá!
          </motion.h3>

          <motion.p 
            className="text-xl opacity-90 mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Eres y serás siempre mi mayor inspiración, mi ejemplo a seguir y la persona más importante de mi vida.
          </motion.p>

          <motion.div 
            className="flex items-center justify-center gap-2 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Star className="h-5 w-5 fill-current" />
            </motion.div>
            <span className="text-lg">Hecho con amor para la mejor mamá y papá del mundo</span>
            <motion.div
              animate={{
                rotate: [0, -360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <Star className="h-5 w-5 fill-current" />
            </motion.div>
          </motion.div>

          <motion.div 
            className="text-sm opacity-75"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            animate={{
              color: ["rgba(255,255,255,0.75)", "rgba(255,255,255,1)", "rgba(255,255,255,0.75)"],
            }}
          >
            💝 Esta página es tuya para siempre, como mi amor por ti 💝
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
