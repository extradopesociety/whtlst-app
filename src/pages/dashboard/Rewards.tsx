// src/pages/dashboard/Rewards.tsx
const Rewards = () => {
  return (
    <div
      className="text-darkyellow"
      style={{ fontFamily: 'Lora, Sumana, Faustina' }}
    >
      {/* Scrollable Intro Section */}
      <div className="px-4 pt-3 pb-8">
        <p className="text-sm leading-snug">
          Earn Reward (RWD) tokens with every purchase.
          <br />
          Collect tokens and redeem them for limited merchandise.
        </p>
      </div>

      {/* Sticky Balance Section */}
      <div className="sticky top-[114px] bg-alabaster z-10 px-4 pt-1 pb-3">
        <div className="flex justify-end">
          <h2 className="text-lg font-medium">
            Balance: <span className="font-bold">("Token quantity") RWD</span>
          </h2>
        </div>
        <div className="h-[1px] bg-darkyellow w-full mt-3" />
      </div>

      {/* Scrollable Content Below */}
      <div className="px-4 pt-6 pb-24">
        <div className="text-center text-sm opacity-70">Redemption section coming soon...</div>
      </div>
    </div>
  )
}

export default Rewards
