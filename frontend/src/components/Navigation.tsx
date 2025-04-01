import Link from 'next/link'
import { motion } from 'framer-motion'

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-primary">XOPT</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link href="/trade" className="text-foreground hover:text-primary transition-colors">
              Trade
            </Link>
            <Link href="/learn-more" className="text-foreground hover:text-primary transition-colors">
              Learn More
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Connect Wallet
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  )
} 