// src/pages/About.tsx
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import MobileLayout from '../layouts/MobileLayout'

const About = () => {
  const navigate = useNavigate()

  return (
    <MobileLayout>
      <div className="flex flex-col h-full">
        {/* Scrollable Content */}
        <div
          className="flex-1 overflow-y-auto px-4 pt-10 pb-1 text-darkyellow"
          style={{ fontFamily: 'Lora, Sumana, Faustina' }}
        >
          {/* Animated Heading */}
          <motion.h2
            className="text-2xl font-semibold mb-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            The WHTLST
          </motion.h2>

          {/* Animated Paragraph */}
          <motion.p
            className="text-sm leading-relaxed text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.2 }}
          >
            <strong>WHTLST</strong> is an exclusive clothing brand where innovation meets elegance.
            Each seasonal collection is meticulously crafted, combining timeless design with modern edge
            to redefine sophistication.

            <br /><br />

            Beyond fashion, WHTLST bridges the physical and digital worlds by offering blockchain secured
            digital certificates of authenticity, ensuring every piece is as rare as its wearer.

            <br /><br />

            Rooted in the pursuit of individuality, WHTLST is more than a brand, it’s a community.
            Our members are connected by a shared appreciation for craftsmanship, creativity, and
            a commitment to standing apart.

            <br /><br />

            With access to exclusive drops, tailored experiences, and cutting edge digital integrations,
            becoming part of WHTLST means stepping into a world where fashion transcends trends and
            becomes a statement of purpose.

            <br /><br />

            <em>To wear WHTLST is to declare substance, individuality, and the extraordinary.</em>
          </motion.p>
        </div>

        {/* CTA Button Animation */}
        <motion.div
          className="flex justify-center mt-12 mb-6 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
        >
          <button
            onClick={() => navigate('/signup')}
            className="bg-hooker text-white font-semibold text-sm rounded-full py-3 px-6 w-50 max-w-sm shadow-md hover:opacity-90"
          >
            Become a Member
          </button>
        </motion.div>
      </div>
    </MobileLayout>
  )
}

export default About
