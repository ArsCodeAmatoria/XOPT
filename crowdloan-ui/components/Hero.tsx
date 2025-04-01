import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Participate in XOPT Protocol
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Join the decentralized options trading revolution. Contribute to the XOPT Protocol and earn rewards while helping build the future of DeFi.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contribute"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Contribute Now
              <ArrowRight className="ml-2 h-4 w-4 inline-block" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#learn-more"
              className="text-sm font-semibold leading-6 text-foreground"
            >
              Learn more <span aria-hidden="true">→</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { label: 'Total Raised', value: '$0' },
            { label: 'Contributors', value: '0' },
            { label: 'Days Remaining', value: '30' },
            { label: 'Reward Rate', value: '10%' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="rounded-lg bg-card p-6 text-center shadow-sm"
            >
              <dt className="text-sm font-medium text-muted-foreground">{stat.label}</dt>
              <dd className="mt-2 text-3xl font-semibold text-foreground">{stat.value}</dd>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 