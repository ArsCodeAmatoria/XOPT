'use client'

import WalletConnect from '@/components/WalletConnect'
import { useCrowdloanForm } from '@/hooks/useCrowdloanForm'

export default function ContributeForm() {
  const { formData, handleAmountChange, handleAddressChange, handleSubmit } = useCrowdloanForm()

  return (
    <div className="bg-card rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Crowdloan Details</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-1">
            Contribution Amount (DOT)
          </label>
          <input
            type="number"
            value={formData.amount}
            onChange={(e) => handleAmountChange(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-background"
            placeholder="Enter amount"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-1">
            Wallet Address
          </label>
          <input
            type="text"
            value={formData.address}
            onChange={(e) => handleAddressChange(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-background"
            placeholder="Enter your Polkadot wallet address"
          />
        </div>
        <WalletConnect />
        <button
          onClick={handleSubmit}
          className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90"
        >
          Submit Contribution
        </button>
      </div>
    </div>
  )
} 