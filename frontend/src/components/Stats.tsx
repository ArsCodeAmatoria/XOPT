import { motion } from 'framer-motion'
import { useQuery } from '@tanstack/react-query'

const stats = [
  { name: 'Total Value Locked', value: '$0' },
  { name: 'Active Traders', value: '0' },
  { name: 'Total Volume', value: '$0' },
  { name: 'Success Rate', value: '0%' },
]

export function Stats() {
  const { data, isLoading } = useQuery({
    queryKey: ['stats'],
    queryFn: async () => {
      // TODO: Replace with actual API call
      return {
        tvl: '$0',
        traders: '0',
        volume: '$0',
        successRate: '0%',
      }
    },
  })

  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl lg:max-w-none"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Trusted by traders worldwide</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything you need to trade options
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Join thousands of traders who trust XOPT Protocol for their options trading needs.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.name}
                className="flex flex-col bg-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <dt className="text-sm leading-6 text-muted-foreground">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-foreground">
                  {isLoading ? '...' : stat.value}
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  )
} 