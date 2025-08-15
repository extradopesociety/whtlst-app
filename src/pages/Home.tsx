// src/pages/Home.tsx
import MobileLayout from '../layouts/MobileLayout'

const Home = () => {
  return (
    <MobileLayout>
      <div 
      className="flex flex-col items-center justify-center text-darkyellow px-4"
      style={{ fontFamily: 'Lora, Sumana, Faustina' }}>
        <h2 className="text-2xl font-semibold mb-2">Welcome to the Whitelist</h2>
        <p className="text-center">This is where the featured products will go.</p>
      </div>
    </MobileLayout>
  )
}

export default Home
