// src/pages/dashboard/UpdateAuth.tsx
import { useNavigate } from 'react-router-dom'

const UpdateAuth = () => {
  const navigate = useNavigate()

  return (
    <div className="px-4 pt-0 text-darkyellow" style={{ fontFamily: 'Lora, Sumana, Faustina' }}>
      {/* Title */}
      <h2 className="text-xl font-semibold text-center mb-8">
        Update Email/Password
      </h2>

      {/* Update Email Section */}
      <div className="mb-8">
        <h3 className="text-sm font-medium mb-2">New Email</h3>
        <input
          type="email"
          placeholder="New Email"
          className="w-full bg-white border border-gray-300 text-sm text-black rounded-full py-2 px-4 mb-2 focus:outline-none"
        />
        <h3 className="text-sm font-medium mb-2">Enter Password</h3>
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full bg-white border border-gray-300 text-sm text-black rounded-full py-2 px-4 mb-2 focus:outline-none"
        />
        <button className="w-full mt-3 bg-hooker text-white text-sm font-semibold rounded-full py-2 hover:opacity-90">
          Update Email
        </button>
      </div>

      {/* Update Password Section */}
      <div className="mb-8">
      <h3 className="text-sm font-medium mb-2">Current Password</h3>
        <input
          type="password"
          placeholder="Current password"
          required
          className="w-full bg-white border border-gray-300 text-sm text-black rounded-full py-2 px-4 mb-2 focus:outline-none"
        />
        <h3 className="text-sm font-medium mb-2">New Password</h3>
        <input
          type="password"
          placeholder="New password"
          className="w-full bg-white border border-gray-300 text-sm text-black rounded-full py-2 px-4 mb-2 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="w-full bg-white border border-gray-300 text-sm text-black rounded-full py-2 px-4 mb-2 focus:outline-none"
        />
        <button className="w-full mt-3 bg-hooker text-white text-sm font-semibold rounded-full py-2 hover:opacity-90">
          Update Password
        </button>
      </div>

      {/* Go Back Link at Bottom Right */}
      <div className="flex justify-end">
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-darkyellow underline bg-transparent"
        >
          &lt; Go Back
        </button>
      </div>
    </div>
  )
}

export default UpdateAuth
