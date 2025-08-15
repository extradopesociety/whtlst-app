// src/pages/Signup.tsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import MobileLayout from '../layouts/MobileLayout'

const Signup = () => {
  return (
    <MobileLayout>
      <div
        className="flex flex-col justify-start items-center px-4 pt-12 text-hooker"
        style={{ fontFamily: 'Lora, Sumana, Faustina' }}
      >
        {/* Animated Heading */}
        <motion.h2
          className="text-2xl font-semibold mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Become a Member
        </motion.h2>

        {/* Animated Card Container */}
        <motion.div
          className="w-full max-w-sm bg-eggshell border border-gray-300 rounded-2xl p-6 shadow-sm"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 0.2 }}
        >
          {/* Email + Password Form */}
          <form className="flex flex-col gap-3 mb-6">
            <h3 className="text-2xl text-darkyellow font-semibold mb-2 text-center">Register</h3>

            <input
              type="email"
              placeholder="Email"
              required
              className="bg-white border border-gray-300 text-sm text-black rounded-full py-2.5 px-4 focus:outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              required
              className="bg-white border border-gray-300 text-sm text-black rounded-full py-2.5 px-4 focus:outline-none"
            />

            <input
              type="password"
              placeholder="Repeat Password"
              required
              className="bg-white border border-gray-300 text-sm text-black rounded-full py-2.5 px-4 focus:outline-none"
            />

            <button
              type="submit"
              className="bg-hooker text-white text-sm font-semibold rounded-full py-2.5 px-4 w-[85%] self-center hover:opacity-90"
            >
              Sign Up with Email
            </button>
          </form>

          {/* OR Divider */}
          <div className="flex items-center mb-6">
            <div className="flex-grow h-px bg-darkyellow"></div>
            <span className="px-3 text-xs text-darkyellow">OR</span>
            <div className="flex-grow h-px bg-darkyellow"></div>
          </div>

          {/* Social & Wallet Signups */}
          <div className="flex flex-col gap-3">
            <button className="bg-white text-black border border-gray-300 rounded-full py-2.5 px-4 text-sm font-medium w-[85%] self-center hover:opacity-90">
              Sign Up with Google
            </button>
            <button className="bg-black text-white rounded-full py-2.5 px-4 text-sm font-medium w-[85%] self-center hover:opacity-90">
              Sign Up with Apple
            </button>
            <button className="bg-citrine text-white rounded-full py-2.5 px-4 text-sm font-semibold w-[85%] self-center hover:opacity-90">
              Register with Xaman
            </button>
          </div>
          <div className="text-center mt-6 text-xs">
            Already a member?{' '}
            <Link to="/login" className="text-hooker font-medium hover:underline">
              Log in
            </Link>
          </div>
        </motion.div>
      </div>
    </MobileLayout>
  )
}

export default Signup
