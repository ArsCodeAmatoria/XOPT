import { motion } from 'framer-motion'

export default function TradePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <motion.div
        className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">Trade Options</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-card rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Select Asset</h2>
            <p className="text-muted-foreground">Coming soon...</p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Set Strike Price</h2>
            <p className="text-muted-foreground">Coming soon...</p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Choose Expiry</h2>
            <p className="text-muted-foreground">Coming soon...</p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Enter Amount</h2>
            <p className="text-muted-foreground">Coming soon...</p>
          </div>
        </div>
      </motion.div>
    </main>
  )
} 