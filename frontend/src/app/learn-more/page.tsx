import { motion } from 'framer-motion'

const sections = [
  {
    title: 'What is XOPT Protocol?',
    content: 'XOPT Protocol is a decentralized options trading platform built on Polkadot. It enables users to trade options on any asset with zero slippage and minimal fees.',
  },
  {
    title: 'How does it work?',
    content: 'The protocol uses an automated market maker (AMM) to provide liquidity and ensure zero slippage. All trades are executed on-chain and secured by the Polkadot network.',
  },
  {
    title: 'Key Features',
    content: 'Zero slippage trading, minimal fees, maximum security through Polkadot, and self-custody of assets are just some of the key features that make XOPT Protocol unique.',
  },
  {
    title: 'Getting Started',
    content: 'To start trading, connect your Polkadot wallet, select an asset, and choose your strike price and expiry date. The protocol will handle the rest.',
  },
]

export default function LearnMorePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">Learn More</h1>
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
              <p className="text-muted-foreground">{section.content}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  )
} 