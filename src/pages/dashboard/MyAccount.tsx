// src/pages/dashboard/MyAccount.tsx
import { useNavigate } from 'react-router-dom/dist/index.d.mts'

const MyAccount = () => {
  const navigate = useNavigate()

  const items = [
    { label: 'Account Information', path: 'info' },
    { label: 'Notification Settings', path: 'notification' },
    { label: 'Deactivate your account', path: 'deactivate' },
  ]

  return (
    <div className="flex flex-col gap-4 mt-4">
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => navigate(`/dashboard/account/${item.path}`)}
          className="flex justify-between items-center px-4 py-4 bg-alabaster text-xl text-hooker cursor-pointer transition"
          style={{ fontFamily: 'Lora, Sumana, Faustina' }}
        >
          <span>{item.label}</span>
          <span className="text-lg">{'>'}</span>
        </div>
      ))}
    </div>
  )
}

export default MyAccount
