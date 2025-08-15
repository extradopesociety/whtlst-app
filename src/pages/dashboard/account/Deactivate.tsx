// src/pages/dashboard/account/Deactivate.tsx
import { useNavigate } from 'react-router-dom'

const Deactivate = () => {
  const navigate = useNavigate()
  const userEmail = 'user@example.com' // Replace with actual user email from context/state

  return (
    <div
      className="px-4 pt-3 text-darkyellow"
      style={{ fontFamily: 'Lora, Sumana, Faustina' }}
    >
      {/* Page Title */}
      <h2 className="text-center text-2xl font-semibold mb-6">
        Deactivate Account
      </h2>

      {/* Message */}
      <p className="text-left text-xl mb-6">
        We're sorry to see you go!
      </p>

      <h3 className="text-left text-lg font-bold mb-2">
        Delete my data & account based on local laws
      </h3>

      <p className="text-left text-sm mb-4">
        Your data and account will be deleted according to local laws.
      </p>

      <p className="text-left text-base mb-6 font-medium">
        {userEmail}
      </p>

      {/* Deactivate Button */}
      <div className="flex justify-center">
        <button className="bg-hooker text-white text-sm font-semibold rounded-full py-2 px-8 hover:opacity-90">
          Deactivate
        </button>
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

export default Deactivate
