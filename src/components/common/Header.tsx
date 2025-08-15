// src/components/common/Header.tsx
import { useNavigate } from 'react-router-dom/dist/index.d.mts'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion/dist/types'
import { FaSearch, FaShoppingBag, FaUser, FaTimes } from 'react-icons/fa'

const Header = () => {
  const navigate = useNavigate()
  const [searchOpen, setSearchOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const title = 'WHTLST'

  return (
    <header className="w-full h-14 flex items-center justify-between px-4 py-4 bg-hooker text-white border-b border-gray-800 relative overflow-hidden">
      {/* Left: Search or Close */}
      <div className="z-20">
        <button
          className="p-0 m-0 bg-transparent focus:outline-none"
          onClick={() => {
            setSearchOpen(prev => !prev)
            setUserMenuOpen(false) // 👈 closes user menu if open
          }}          
        >
          {searchOpen ? (
            <FaTimes
              size={18}
              className="text-darkyellow translate-y-[1px]"
            />
          ) : (
            <FaSearch size={20} />
          )}
        </button>
      </div>

      {/* Center Title */}
      {!searchOpen && (
        <div
            className={`absolute left-1/2 transform -translate-x-1/2 text-base text-citrine font-header font-semibold transition-all duration-300 ${
            userMenuOpen ? 'backdrop-blur-sm opacity-60' : 'blur-0 opacity-100'
            }`}
        >
            {title}
        </div>
        )}


      {/* Right-side Icons */}
      <div className="flex items-center gap-4 z-30">
      {!userMenuOpen && (
        <button className="p-0 m-0 bg-transparent focus:outline-none">
            <FaShoppingBag size={20} />
        </button>
        )}
        <button
          className="p-0 m-0 bg-transparent focus:outline-none focus-visible:outline-none z-30"
          onClick={() => {
            setUserMenuOpen(prev => !prev)
            setSearchOpen(false) // 👈 closes search if open
          }}
          
        >
          <FaUser size={20} className={userMenuOpen ? 'text-citrine' : ''} />
        </button>
      </div>

      {/* Search Bar Animation */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            key="searchbar"
            className="absolute left-2 right-24 z-10"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 'calc(100% - 6rem)', opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-eggshell text-black placeholder-gray-600 rounded-full py-1.5 px-4 pl-10 text-sm font-header focus:outline-none"
              autoFocus
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* User Slide-Out Menu */}
      <AnimatePresence>
        {userMenuOpen && (
            <motion.div
            key="usermenu"
            className="absolute top-0 bottom-0 right-0 w-[calc(100%-11rem)] max-w-xs bg-eggshell/90 backdrop-blur-md text-black p-6 z-20 shadow-lg flex flex-col items-start justify-center rounded-l-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            >
            <button 
            onClick={() => navigate('/login')}
            className="text-sm font-semibold bg-darkyellow text-white px-4 py-2 rounded-full">
                Member Portal
            </button>
            </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
