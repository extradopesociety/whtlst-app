// src/pages/dashboard/account/Notification.tsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Notification = () => {
  const navigate = useNavigate()

  const [pushEnabled, setPushEnabled] = useState(false)
  const [newsletterEnabled, setNewsletterEnabled] = useState(false)

  return (
    <div
      className="px-4 pt-3 text-darkyellow"
      style={{ fontFamily: 'Lora, Sumana, Faustina' }}
    >
      <h2 className="text-center text-2xl font-semibold mb-6">
        Notification Settings
      </h2>

      {/* General Notifications */}
      <div className="flex justify-between items-start bg-alabaster rounded-xl px-4 py-4 mb-5 shadow-sm">
        <div>
          <h3 className="text-lg font-semibold mb-1">General Notifications</h3>
          <p className="text-xs leading-snug">
            Receive push notifications from the WHTLST app directly on your mobile device.
          </p>
        </div>
        <label className="inline-flex items-center ml-4">
          <input
            type="checkbox"
            checked={pushEnabled}
            onChange={() => setPushEnabled(!pushEnabled)}
            className="sr-only"
          />
          <div
            className={`w-10 h-5 flex items-center rounded-full p-1 transition duration-300 ${
              pushEnabled ? 'bg-hooker' : 'bg-gray-400'
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition duration-300 ${
                pushEnabled ? 'translate-x-5' : ''
              }`}
            />
          </div>
        </label>
      </div>

      {/* Newsletter */}
      <div className="flex justify-between items-start bg-alabaster rounded-xl px-4 py-4 mb-5 shadow-sm">
        <div>
          <h3 className="text-lg font-semibold mb-1">Newsletter</h3>
          <p className="text-xs leading-snug">
            Our email newsletter delivers exclusive content on everything WHTLST.
          </p>
        </div>
        <label className="inline-flex items-center ml-4">
          <input
            type="checkbox"
            checked={newsletterEnabled}
            onChange={() => setNewsletterEnabled(!newsletterEnabled)}
            className="sr-only"
          />
          <div
            className={`w-10 h-5 flex items-center rounded-full p-1 transition duration-300 ${
              newsletterEnabled ? 'bg-hooker' : 'bg-gray-400'
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition duration-300 ${
                newsletterEnabled ? 'translate-x-5' : ''
              }`}
            />
          </div>
        </label>
      </div>

      {/* Go Back */}
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

export default Notification
