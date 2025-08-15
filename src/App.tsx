// src/App.tsx
import { Routes, Route, Navigate } from 'react-router-dom'
import Splash from './pages/Splash'
// Main app pages
import Home from './pages/Home'
import Shop from './pages/Shop'
import Explore from './pages/Explore'
import About from './pages/About'
import Signup from './pages/Signup'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
// Membership dashboard & pages
import MemberDashboardLayout from './layouts/MemberDashboardLayout'
import Membership from './pages/dashboard/Membership'
import Certificates from './pages/dashboard/Certificates'
import Rewards from './pages/dashboard/Rewards'
import MyAccount from './pages/dashboard/MyAccount'
import AccountInfo from './pages/dashboard/account/AccountInfo'
import Notification from './pages/dashboard/account/Notification'
import Deactivate from './pages/dashboard/account/Deactivate'
import UpdateAuth from './pages/dashboard/account/UpdateAuth'
// Admin layout & pages
import AdminLayout from './admin/layout/AdminLayout'
import InventoryPage from './admin/pages/InventoryPage'
import RewardsPage from './admin/pages/RewardsPage'

function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Splash />} />
      <Route path="/home" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Dashboard layout with nested tab routes */}
      <Route path="/dashboard/*" element={<MemberDashboardLayout />}>
        {/* Default: /dashboard -> Membership */}
        <Route index element={<Membership />} />
        <Route path="membership" element={<Membership />} />
        <Route path="certificates" element={<Certificates />} />
        <Route path="rewards" element={<Rewards />} />
        <Route path="account" element={<MyAccount />} />
        <Route path="account/info" element={<AccountInfo />} />
        <Route path="account/notification" element={<Notification />} />
        <Route path="account/deactivate" element={<Deactivate />} />
        <Route path="account/update-auth" element={<UpdateAuth />} />
        {/* Catch-all within dashboard */}
        <Route path="*" element={<Navigate to="/dashboard/membership" replace />} />
      </Route>

      {/* Admin layout with nested tools */}
      <Route path="/admin/*" element={<AdminLayout />}>
        {/* Optional default: /admin -> inventory */}
        <Route index element={<InventoryPage />} />
        <Route path="inventory" element={<InventoryPage />} />
        <Route path="rewards" element={<RewardsPage />} />
        {/* Catch-all within admin */}
        <Route path="*" element={<Navigate to="/admin/inventory" replace />} />
      </Route>

      {/* Global catch-all */}
      <Route path="*" element={<Navigate to="/dashboard/membership" replace />} />
    </Routes>
  )
}

export default App
