import { motion } from 'framer-motion'

const sections = [
  {
    title: 'What is XOPT Protocol?',
    content: 'XOPT Protocol is a decentralized options trading platform built on Polkadot. It enables users to trade options on any asset with zero slippage and minimal fees, leveraging the security and interoperability of the Polkadot ecosystem.',
  },
  {
    title: 'How does it work?',
    content: 'The protocol uses a unique mechanism to ensure zero slippage by matching orders directly on-chain. This is achieved through a combination of smart contracts and Polkadot\'s cross-chain messaging capabilities.',
  },
  {
    title: 'Key Features',
    content: 'Zero slippage trading, minimal fees, cross-chain compatibility, and maximum security through Polkadot\'s shared security model. The protocol is designed to be accessible to both retail and institutional traders.',
  },
  {
    title: 'Getting Started',
    content: 'To start trading, connect your Polkadot wallet, select an asset, set your strike price and expiry date, and enter your trade amount. The protocol will match your order with the best available counterparty.',
  },
]

export default function LearnMorePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <motion.div
        className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">Learn More</h1>
        <div className="grid gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              className="p-6 bg-card rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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