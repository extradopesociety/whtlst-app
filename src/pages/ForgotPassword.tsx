// src/pages/ForgotPassword.tsx
import { motion } from 'framer-motion'
import MobileLayout from '../layouts/MobileLayout'

const ForgotPassword = () => {
  return (
    <MobileLayout>
      <div className="flex flex-col justify-start items-center px-4 pt-12 text-hooker" style={{ fontFamily: 'Lora, Sumana, Faustina' }}>
        <motion.h2
          className="text-2xl font-semibold mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Forgot Password
        </motion.h2>

        <motion.div
          className="w-full max-w-sm bg-eggshell border border-gray-300 rounded-2xl p-6 shadow-sm"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 0.2 }}
        >
          <form className="flex flex-col gap-4">
            <p className="text-sm text-gray-600 text-center mb-2">
              Enter your email and we’ll send you a link to reset your password.
            </p>
            <input
              type="email"
              placeholder="Email"
              required
              className="bg-white border border-gray-300 text-sm text-black rounded-full py-2.5 px-4 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-hooker text-white text-sm font-semibold rounded-full py-2.5 px-4 hover:opacity-90 w-[85%] self-center"
            >
              Send Reset Link
            </button>
          </form>
        </motion.div>
      </div>
    </MobileLayout>
  )
}

export default ForgotPassword
