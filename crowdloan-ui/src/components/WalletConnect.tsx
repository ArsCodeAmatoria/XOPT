import { useWallet } from '@/hooks/useWallet'

export default function WalletConnect() {
  const { accounts, isConnecting, connect } = useWallet()

  return (
    <div>
      {accounts.length === 0 ? (
        <button
          onClick={connect}
          disabled={isConnecting}
          className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 disabled:opacity-50"
        >
          {isConnecting ? 'Connecting...' : 'Connect Wallet'}
        </button>
      ) : (
        <div className="text-sm">
          Connected: {accounts[0].address.slice(0, 6)}...{accounts[0].address.slice(-4)}
        </div>
      )}
    </div>
  )
} 