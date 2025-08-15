// src components/common/FooterNav.tsx
import { FaHome, FaShoppingBag, FaUser, FaGlobe } from 'react-icons/fa'
import { useNavigate, useLocation } from 'react-router-dom/dist/index.d.mts'
import { motion } from 'framer-motion/dist/types'

const FooterNav = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { icon: <FaHome size={30} />, path: '/home' },
    { icon: <FaShoppingBag size={30} />, path: '/shop' },
    { icon: <FaGlobe size={30} />, path: '/explore' },
    { icon: <FaUser size={30} />, path: '/about' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-hooker text-white border-t border-gray-800 z-50">
      <ul className="flex justify-around items-center h-14">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path
          return (
            <li key={index}>
              <button
                onClick={() => navigate(item.path)}
                className={`p-0 m-0 bg-transparent focus:outline-none hover:opacity-80 ${
                  isActive ? 'text-citrine' : 'text-white'
                }`}
              >
                <motion.div
                  animate={{ scale: isActive ? 1.1 : 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {item.icon}
                </motion.div>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default FooterNav
