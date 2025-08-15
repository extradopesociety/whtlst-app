// src/pages/dashboard/account/AccountInfo.tsx
import { useNavigate } from 'react-router-dom'

const AccountInfo = () => {
  const navigate = useNavigate()

  return (
    <div className="px-4 pt-3 text-darkyellow" style={{ fontFamily: 'Lora, Sumana, Faustina' }}>
      {/* Title */}
      <h2 className="text-center text-2xl font-semibold mb-6">
        Account Information
      </h2>

      {/* Name Row */}
      <div className="mb-5">
        <label className="block text-sm mb-1">Name</label>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="First"
            className="flex-1 bg-white border border-gray-300 text-sm text-black rounded-full py-2 px-1 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Last"
            className="flex-1 bg-white border border-gray-300 text-sm text-black rounded-full py-2 px-2 focus:outline-none"
          />
        </div>
      </div>

      {/* Username Row */}
      <div className="mb-5">
        <label className="block text-sm mb-1">Username</label>
        <input
          type="text"
          placeholder="Username"
          className="w-full bg-white border border-gray-300 text-sm text-black rounded-full py-2 px-4 focus:outline-none"
        />
      </div>

      {/* DOB Row */}
      <div className="mb-5">
        <label className="block text-sm mb-1">Date of Birth</label>
        <input
          type="date"
          className="bg-white border border-gray-300 text-sm text-black rounded-full py-2 px-4 focus:outline-none"
        />
      </div>

      {/* Update Email/Password Redirect */}
      <div
        onClick={() => navigate('/dashboard/account/update-auth')}
        className="flex justify-between items-center px-4 py-4 rounded-xl bg-alabaster cursor-pointer hover:bg-gray-100 transition"
      >
        <span>Update Email / Password</span>
        <span className="text-lg">{'>'}</span>
      </div>

      {/* Save Button */}
      <div className="flex justify-center mt-5">
      <button className="bg-hooker text-white text-sm font-semibold rounded-full py-2 px-8 hover:opacity-90">
           Save
      </button>
      </div>

      {/* Go Back Link at Bottom Right */}
      <div className="flex justify-end pt-7">
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

export default AccountInfo
