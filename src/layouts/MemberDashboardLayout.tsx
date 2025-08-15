// src/layouts/MemberDashboardLayout.tsx
import { useState, useRef, useEffect } from 'react'
import MobileLayout from './MobileLayout'
import { useNavigate, useLocation, Outlet } from 'react-router-dom/dist/index.d.mts'

const tabs = [
  { name: 'Membership', path: '/dashboard/membership' },
  { name: 'Certificates', path: '/dashboard/certificates' },
  { name: 'Rewards', path: '/dashboard/rewards' },
  { name: 'My Account', path: '/dashboard/account' },
]

const MemberDashboardLayout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const activeTab = tabs.findIndex(tab => location.pathname.includes(tab.path))
  const tabRowRef = useRef<HTMLDivElement | null>(null)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })

  useEffect(() => {
    if (tabRowRef.current) {
      const tabWidth = tabRowRef.current.offsetWidth / tabs.length
      setIndicatorStyle({
        left: tabWidth * activeTab,
        width: tabWidth,
      })
    }
  }, [activeTab])

  return (
    <MobileLayout>
      <div className="text-darkyellow">
        {/* Fixed Top Section */}
        <div className="px-4 pt-12 pb-6 bg-alabaster">
          <h2
            className="text-2xl font-regular text-left mb-4"
            style={{ fontFamily: 'Lora, Sumana, Faustina' }}
          >
            Stay Extraordinary, Willie!
          </h2>
        </div>

        {/* Sticky Tabs */}
        <div className="sticky top-[10px] bg-alabaster z-10 px-4"> {/* Top offset matches header height */}
          <div
            ref={tabRowRef}
            className="flex justify-between pb-2 text-sm font-medium mb-2 relative"
          >
            {tabs.map((tab, index) => (
              <span
                key={index}
                onClick={() => navigate(tab.path)}
                className={`w-1/4 text-center cursor-pointer transition-colors ${
                  index === activeTab ? 'text-hooker' : 'text-darkyellow'
                }`}
                style={{ fontFamily: 'Lora, Sumana, Faustina' }}
              >
                {tab.name}
              </span>
            ))}
            {/* Active indicator */}
            <div
              className="absolute bottom-0 h-[2px] bg-hooker transition-all duration-300"
              style={{
                left: `${indicatorStyle.left}px`,
                width: `${indicatorStyle.width}px`,
              }}
            />
          </div>
          {/* Bottom border under tabs */}
          <div className="h-[1px] bg-darkyellow w-full" />
        </div>

        {/* Scrollable Content */}
        <div className="px-4 pt-6 pb-24">
          <Outlet />
        </div>
      </div>
    </MobileLayout>
  )
}

export default MemberDashboardLayout
