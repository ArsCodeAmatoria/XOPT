import { motion } from 'framer-motion'

export default function TradePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">Trade Options</h1>
        <div className="bg-card rounded-lg shadow-lg p-6">
          <p className="text-muted-foreground mb-4">
            Trading interface coming soon. Connect your wallet to start trading options.
          </p>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Asset</h3>
                <p className="text-muted-foreground">Select the asset to trade</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Strike Price</h3>
                <p className="text-muted-foreground">Set your strike price</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Expiry</h3>
                <p className="text-muted-foreground">Choose expiry date</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Amount</h3>
                <p className="text-muted-foreground">Enter trade amount</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  )
} 