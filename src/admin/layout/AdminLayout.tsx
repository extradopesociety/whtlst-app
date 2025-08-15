// src/admin/layout/AdminLayout.tsx
import { Outlet, NavLink } from 'react-router-dom'
import { Menu, Package, Users, Star, Coins } from 'lucide-react'
import { useState } from 'react'
import { TbMoneybag } from 'react-icons/tb'

const navItems = [
  { label: 'Inventory', path: '/admin/inventory', icon: Package },
  { label: 'Rewards', path: '/admin/rewards', icon: Coins },
  { label: 'Users', path: '/admin/users', icon: Users },
  // Add more as needed
]

const AdminLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Sidebar / Topbar */}
      <div className="bg-white shadow-md lg:w-64 w-full flex flex-col lg:h-screen z-10">
        <div className="flex items-center justify-between lg:justify-center px-4 py-4 border-b">
          <span className="text-xl font-bold text-gray-900">Admin 🛠️</span>
          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Nav */}
        <nav className={`flex flex-col lg:flex ${menuOpen ? 'block' : 'hidden'} lg:block`}>
          {navItems.map(({ label, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 text-sm font-medium hover:bg-slate-100 transition ${
                  isActive ? 'bg-slate-200 font-bold' : ''
                }`
              }
            >
              <Icon className="w-4 h-4" />
              {label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout
