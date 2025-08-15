// src/pages/Splash.tsx
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Splash = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Navigate after 3 seconds (adjust as needed)
    const timer = setTimeout(() => navigate('/home'), 3000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="w-screen h-screen bg-hooker flex items-center justify-center text-citrine">
      <motion.h1
        className="text-3xl font-regular"
        style={{ fontFamily: 'Lora, Sumana, Faustina' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 4, ease: 'easeInOut' }}
      >
        WHTLST
      </motion.h1>
    </div>
  )
}

export default Splash
