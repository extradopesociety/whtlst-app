// src/pages/Explore.tsx
import MobileLayout from '../layouts/MobileLayout'

const Explore = () => {
  return (
    <MobileLayout>
      <div 
      className="flex flex-col items-center justify-center text-darkyellow px-4"
      style={{ fontFamily: 'Lora, Sumana, Faustina' }}>
        <h2 className="text-2xl font-semibold mb-2">Explore WHTLST</h2>
        <p className="text-center">This is where the news and marketing content will be</p>
      </div>
    </MobileLayout>
  )
}

export default Explore