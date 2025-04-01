'use client';

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            The Future of Decentralized Options Trading
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Trade options with confidence on the XOPT Protocol platform. Advanced features, secure infrastructure, and seamless user experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Start Trading
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
            <Link href="https://crowdloan.xopt.io">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium hover:bg-secondary/90 transition-colors"
              >
                Join Crowdloan
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="text-2xl font-bold mb-2">$100M+</h3>
            <p className="text-muted-foreground">Total Value Locked</p>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="text-2xl font-bold mb-2">50K+</h3>
            <p className="text-muted-foreground">Active Traders</p>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="text-2xl font-bold mb-2">99.9%</h3>
            <p className="text-muted-foreground">Uptime</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 