'use client';

import { motion } from 'framer-motion'
import { Shield, Zap, Lock, BarChart } from 'lucide-react'

const features = [
  {
    name: 'Secure Infrastructure',
    description: 'Built on Polkadot for maximum security and reliability. Your assets are protected by advanced cryptographic security.',
    icon: Shield,
  },
  {
    name: 'Zero Slippage',
    description: 'Trade options with zero slippage and minimal fees. Get the best prices for your trades every time.',
    icon: Zap,
  },
  {
    name: 'Decentralized',
    description: 'Fully decentralized protocol with no central authority. Trade with confidence knowing you are in control.',
    icon: Lock,
  },
  {
    name: 'Advanced Analytics',
    description: 'Access real-time market data, advanced charts, and trading analytics to make informed decisions.',
    icon: BarChart,
  },
]

export function Features() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose XOPT Protocol?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the future of options trading with our cutting-edge platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 