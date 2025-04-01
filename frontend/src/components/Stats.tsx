import { motion } from 'framer-motion'

const stats = [
  { id: 1, name: 'Total Value Locked', value: '$0' },
  { id: 2, name: 'Active Traders', value: '0' },
  { id: 3, name: 'Options Traded', value: '0' },
  { id: 4, name: 'Average Daily Volume', value: '$0' },
]

export function Stats() {
  return (
    <div className="bg-muted/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl lg:max-w-none"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <motion.h2
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Protocol Statistics
            </motion.h2>
            <motion.p
              className="mt-4 text-lg leading-8 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Track the growth of the XOPT Protocol ecosystem
            </motion.p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                className="flex flex-col bg-background p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <dt className="text-sm leading-6 text-muted-foreground">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-foreground">
                  {stat.value}
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  )
} 