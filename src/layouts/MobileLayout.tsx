// src/layouts/MobileLayout.tsx
import Header from '../components/common/Header'
import FooterNav from '../components/common/FooterNav'

interface MobileLayoutProps {
  children: React.ReactNode
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
  return (
    <div className="relative w-full h-screen flex flex-col bg-alabaster text-white">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      {/* Scrollable Content */}
      <main className="flex-1 overflow-y-auto pt-[72px] pb-[56px]">
        {children}
      </main>

      {/* Fixed Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <FooterNav />
      </div>
    </div>
  )
}

export default MobileLayout
