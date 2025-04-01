import { motion } from 'framer-motion';
import { CheckCircle2, Info, AlertCircle, Coins, Users, Shield, Zap, Lock, LineChart, Wallet, Trophy } from 'lucide-react';

const benefits = [
  {
    title: 'Token Distribution',
    description: 'Early contributors will receive XOPT tokens at a preferential rate, with additional rewards for early participation. The token distribution is designed to ensure fair and equitable access to protocol governance.',
    icon: Coins,
  },
  {
    title: 'Voting Rights',
    description: 'Token holders will have governance rights to participate in protocol decisions, including fee structures, new feature proposals, and strategic direction. Your voice matters in shaping the future of decentralized options trading.',
    icon: Users,
  },
  {
    title: 'Protocol Benefits',
    description: 'Early supporters will receive reduced fees and exclusive access to new features as they are launched. This includes priority access to new trading pairs and advanced trading tools.',
    icon: Zap,
  },
  {
    title: 'Community Access',
    description: 'Join an exclusive community of early supporters and help shape the future of decentralized options trading. Get direct access to the development team and participate in community events.',
    icon: Shield,
  },
];

const tokenomics = [
  {
    title: 'Total Supply',
    value: '1,000,000,000 XOPT',
    description: 'Fixed total supply with no inflationary mechanism',
    icon: Lock,
  },
  {
    title: 'Initial Distribution',
    value: '40% Community',
    description: 'Fair launch with majority allocation to community',
    icon: LineChart,
  },
  {
    title: 'Vesting Period',
    value: '12 Months',
    description: 'Linear vesting to ensure long-term alignment',
    icon: Wallet,
  },
  {
    title: 'Early Rewards',
    value: 'Up to 25%',
    description: 'Additional rewards for early contributors',
    icon: Trophy,
  },
];

const risks = [
  'Cryptocurrency investments are highly volatile and speculative. The value of XOPT tokens may fluctuate significantly.',
  'The protocol is in early stages and may face technical challenges or require significant updates.',
  'Regulatory changes could impact the protocol\'s operations and token value.',
  'Market conditions may affect token value and rewards. Past performance does not guarantee future results.',
  'Smart contract risks exist despite thorough auditing. Users should only invest what they can afford to lose.',
  'The protocol may face competition from other DeFi projects in the options trading space.',
];

const roadmap = [
  {
    phase: 'Phase 1',
    title: 'Launch & Initial Distribution',
    items: [
      'Token generation event',
      'Community governance activation',
      'Initial liquidity pools',
      'Basic trading interface',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Protocol Expansion',
    items: [
      'Advanced trading features',
      'Additional asset support',
      'Cross-chain integration',
      'Mobile application',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Ecosystem Growth',
    items: [
      'Institutional partnerships',
      'Advanced analytics tools',
      'DeFi integrations',
      'Global expansion',
    ],
  },
];

export function LearnMore() {
  return (
    <div id="learn-more" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-base font-semibold leading-7 text-primary"
          >
            Learn More
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Everything you need to know
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-muted-foreground"
          >
            Understand the benefits, risks, and opportunities of participating in the XOPT Protocol crowdloan.
          </motion.p>
        </div>

        {/* Benefits Section */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <benefit.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {benefit.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{benefit.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>

        {/* Tokenomics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mt-24 max-w-7xl sm:mt-32 lg:mt-40"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold tracking-tight text-foreground">Tokenomics</h3>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
              Understanding the XOPT token distribution and economics
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {tokenomics.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-10 border border-border/50 hover:border-primary/50 transition-colors duration-300 h-full">
                  <div className="flex flex-col items-center text-center space-y-6">
                    <div className="rounded-full bg-primary/10 p-4">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-foreground">{item.title}</h4>
                      <p className="text-4xl font-bold text-primary">{item.value}</p>
                      <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Roadmap Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24"
        >
          <h3 className="text-2xl font-bold tracking-tight text-foreground mb-8">Development Roadmap</h3>
          <div className="space-y-8">
            {roadmap.map((phase, index) => (
              <div key={phase.phase} className="relative pl-8 border-l-2 border-primary">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />
                <h4 className="text-lg font-semibold text-foreground">{phase.phase}</h4>
                <h5 className="text-base font-medium text-primary mt-1">{phase.title}</h5>
                <ul className="mt-4 space-y-2">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-muted-foreground flex items-center">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Risks Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl rounded-lg bg-destructive/10 p-6 sm:mt-20 lg:mt-24"
        >
          <div className="flex items-center gap-x-3">
            <AlertCircle className="h-5 w-5 flex-none text-destructive" aria-hidden="true" />
            <h3 className="text-lg font-semibold leading-7 text-foreground">Important Risks</h3>
          </div>
          <ul className="mt-4 space-y-3 text-base leading-7 text-muted-foreground">
            {risks.map((risk, index) => (
              <li key={index} className="flex gap-x-3">
                <AlertCircle className="mt-1 h-5 w-5 flex-none text-destructive" aria-hidden="true" />
                {risk}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
} 