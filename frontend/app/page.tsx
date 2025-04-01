'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeToggle } from '../src/components/ThemeToggle';
import { Hero } from '../src/components/Hero';
import { Features } from '../src/components/Features';
import { ContributionForm } from '../src/components/ContributionForm';
import { motion } from 'framer-motion';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background/90">
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        <Hero />
        <div className="container mx-auto px-4 py-12">
          <Features />
          
          {/* Market Opportunity Section */}
          <section className="my-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 mb-4">Market Opportunity</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The future of decentralized options trading is here. Join the revolution.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5"
              >
                <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">Growing DeFi Market</h3>
                <p className="text-muted-foreground">
                  The DeFi options market is experiencing exponential growth, with increasing demand for sophisticated trading tools and risk management solutions.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5"
              >
                <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">Institutional Adoption</h3>
                <p className="text-muted-foreground">
                  Traditional financial institutions are increasingly looking to DeFi for efficient options trading, creating a significant market opportunity.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Tokenomics Section */}
          <section className="my-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 mb-4">Tokenomics</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Fair and transparent token distribution for sustainable growth
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5 text-center"
              >
                <h3 className="text-3xl font-bold text-primary mb-2">100M</h3>
                <p className="text-muted-foreground">Total Supply</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5 text-center"
              >
                <h3 className="text-3xl font-bold text-primary mb-2">2%</h3>
                <p className="text-muted-foreground">Transaction Fee</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5 text-center"
              >
                <h3 className="text-3xl font-bold text-primary mb-2">40%</h3>
                <p className="text-muted-foreground">Platform Revenue Share</p>
              </motion.div>
            </div>
          </section>

          {/* Roadmap Section */}
          <section className="my-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 mb-4">Roadmap</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our journey to revolutionize options trading
              </p>
            </motion.div>
            <div className="max-w-3xl mx-auto space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5"
              >
                <h3 className="text-2xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">Phase 1: Foundation</h3>
                <ul className="text-muted-foreground space-y-3 text-center">
                  <li className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Token Launch and Distribution
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Core Protocol Development
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Initial Platform Features
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5"
              >
                <h3 className="text-2xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">Phase 2: Growth</h3>
                <ul className="text-muted-foreground space-y-3 text-center">
                  <li className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Advanced Trading Features
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Cross-chain Integration
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Institutional Partnerships
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5"
              >
                <h3 className="text-2xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">Phase 3: Expansion</h3>
                <ul className="text-muted-foreground space-y-3 text-center">
                  <li className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Global Market Expansion
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Advanced Analytics Tools
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Mobile Application
                  </li>
                </ul>
              </motion.div>
            </div>
          </section>

          {/* Community Section */}
          <section className="my-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 mb-4">Join Our Community</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Be part of the future of decentralized options trading
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm p-12 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5 text-center"
            >
              <p className="text-xl mb-8 text-muted-foreground">
                Be part of the future of decentralized options trading. Join our community and stay updated with the latest developments.
              </p>
              <div className="flex justify-center space-x-6">
                <a href="#" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-primary/20">
                  Join Discord
                </a>
                <a href="#" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-primary/20">
                  Follow Twitter
                </a>
              </div>
            </motion.div>
          </section>

          {/* Understanding Options Trading Section */}
          <section className="my-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 mb-4">Understanding Options Trading</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Master the fundamentals of options trading with our comprehensive guide
              </p>
            </motion.div>
            
            {/* What Are Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5 mb-8"
            >
              <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">What Are Options?</h3>
              <p className="text-muted-foreground">
                Options are financial derivatives that give you the right, but not the obligation, to buy (call) or sell (put) an asset at a predetermined price (strike price) before a specific date (expiration).
              </p>
            </motion.div>

            {/* Types of Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6 mb-8"
            >
              <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">Types of Options</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5">
                  <h4 className="text-xl font-semibold mb-4">Call Options</h4>
                  <p className="text-muted-foreground">
                    Give you the right to buy an asset at the strike price. Profitable when the asset price rises above the strike price.
                  </p>
                </div>
                <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5">
                  <h4 className="text-xl font-semibold mb-4">Put Options</h4>
                  <p className="text-muted-foreground">
                    Give you the right to sell an asset at the strike price. Profitable when the asset price falls below the strike price.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Trading on the Parachain */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5 mb-8"
            >
              <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">Trading on the Parachain</h3>
              <p className="text-muted-foreground mb-4">
                XOPT operates on a specialized parachain, providing fast, secure, and cost-effective options trading. The parachain architecture ensures:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Instant trade execution</li>
                <li>Minimal transaction fees</li>
                <li>Cross-chain asset support</li>
                <li>Advanced order types</li>
              </ul>
            </motion.div>

            {/* Key Concepts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6 mb-8"
            >
              <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">Key Concepts</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5">
                  <h4 className="text-xl font-semibold mb-4">Strike Price</h4>
                  <p className="text-muted-foreground">
                    The price at which you can buy (call) or sell (put) the asset.
                  </p>
                </div>
                <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5">
                  <h4 className="text-xl font-semibold mb-4">Premium</h4>
                  <p className="text-muted-foreground">
                    The cost of buying an option, paid upfront.
                  </p>
                </div>
                <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5">
                  <h4 className="text-xl font-semibold mb-4">Expiration</h4>
                  <p className="text-muted-foreground">
                    The date when the option contract expires.
                  </p>
                </div>
                <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5">
                  <h4 className="text-xl font-semibold mb-4">Intrinsic Value</h4>
                  <p className="text-muted-foreground">
                    The difference between the current price and strike price.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Options Greeks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 mb-8"
            >
              <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">Options Greeks</h3>
              <p className="text-muted-foreground mb-4">
                Greeks are mathematical measures that help traders understand how different factors affect option prices.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5">
                  <h4 className="text-xl font-semibold mb-4">Delta (Δ)</h4>
                  <p className="text-muted-foreground">
                    Measures the rate of change in option price relative to the underlying asset price.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2">
                    <li>Call options: 0 to 1</li>
                    <li>Put options: -1 to 0</li>
                  </ul>
                </div>
                <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5">
                  <h4 className="text-xl font-semibold mb-4">Gamma (Γ)</h4>
                  <p className="text-muted-foreground">
                    Measures the rate of change in Delta relative to the underlying asset price.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2">
                    <li>Highest for at-the-money options</li>
                    <li>Decreases as options move in/out of money</li>
                  </ul>
                </div>
                <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5">
                  <h4 className="text-xl font-semibold mb-4">Theta (Θ)</h4>
                  <p className="text-muted-foreground">
                    Measures the rate of time decay in option value.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2">
                    <li>Always negative for long options</li>
                    <li>Accelerates as expiration approaches</li>
                  </ul>
                </div>
                <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5">
                  <h4 className="text-xl font-semibold mb-4">Vega (ν)</h4>
                  <p className="text-muted-foreground">
                    Measures sensitivity to volatility changes.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2">
                    <li>Higher for longer-term options</li>
                    <li>At-the-money options have highest vega</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Mathematical Derivations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="space-y-6 mb-8"
            >
              <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">Mathematical Derivations</h3>
              <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5">
                <h4 className="text-xl font-semibold mb-4">Black-Scholes Model</h4>
                <p className="text-muted-foreground mb-4">
                  The foundation for options pricing and Greeks calculations:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <BlockMath math="C = S_0N(d_1) - Ke^{-rt}N(d_2)" />
                  <BlockMath math="P = Ke^{-rt}N(-d_2) - S_0N(-d_1)" />
                  <p>where:</p>
                  <BlockMath math="d_1 = \frac{\ln(S_0/K) + (r + \sigma^2/2)t}{\sigma\sqrt{t}}" />
                  <BlockMath math="d_2 = d_1 - \sigma\sqrt{t}" />
                </div>
              </div>
            </motion.div>

            {/* Common Trading Strategies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 mb-8"
            >
              <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">Common Trading Strategies</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5">
                  <h4 className="text-xl font-semibold mb-4">Delta Hedging</h4>
                  <p className="text-muted-foreground">
                    A strategy to maintain a delta-neutral position by adjusting the hedge ratio.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2">
                    <li>Hedge Ratio = -Δ</li>
                    <li>Requires frequent rebalancing</li>
                    <li>Effective for reducing directional risk</li>
                  </ul>
                </div>
                <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5">
                  <h4 className="text-xl font-semibold mb-4">Gamma Scalping</h4>
                  <p className="text-muted-foreground">
                    Profiting from gamma by rebalancing delta-neutral positions.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2">
                    <li>P&L = <span className="inline-block"><InlineMath math="\frac{1}{2}\Gamma(\Delta S)^2 - \Theta\Delta t" /></span></li>
                    <li>Profitable in high volatility</li>
                    <li>Requires precise timing</li>
                  </ul>
                </div>
                <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5">
                  <h4 className="text-xl font-semibold mb-4">Theta Decay</h4>
                  <p className="text-muted-foreground">
                    Selling options to profit from time decay.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2">
                    <li>Daily Theta = <span className="inline-block"><InlineMath math="-\frac{\Theta}{365}" /></span></li>
                    <li>Most effective near expiration</li>
                    <li>Higher premium for ATM options</li>
                  </ul>
                </div>
                <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5">
                  <h4 className="text-xl font-semibold mb-4">Vega Trading</h4>
                  <p className="text-muted-foreground">
                    Trading based on volatility expectations.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2">
                    <li>Volatility Impact = <span className="inline-block"><InlineMath math="\nu \times \Delta\sigma" /></span></li>
                    <li>Long vega: Buy options</li>
                    <li>Short vega: Sell options</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Complex Options Strategies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
              className="space-y-6 mb-8"
            >
              <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">Complex Options Strategies</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5">
                  <h4 className="text-xl font-semibold mb-4">Straddle</h4>
                  <p className="text-muted-foreground mb-2">
                    Long call + Long put at same strike price. Profits from large price movements in either direction.
                  </p>
                  <div className="text-muted-foreground mb-2">P&L = <BlockMath math="\max(S - K, 0) + \max(K - S, 0) - (C + P)" /></div>
                  <ul className="list-disc list-inside text-muted-foreground mt-2">
                    <li>Maximum loss: Premium paid (C + P)</li>
                    <li>Break-even points: K ± (C + P)</li>
                    <li>Best for: High volatility events</li>
                    <li>Time decay: High (long both options)</li>
                  </ul>
                </div>
                <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5">
                  <h4 className="text-xl font-semibold mb-4">Strangle</h4>
                  <p className="text-muted-foreground mb-2">
                    Long call + Long put at different strikes. Similar to straddle but cheaper.
                  </p>
                  <div className="text-muted-foreground mb-2">P&L = <BlockMath math="\max(S - K_1, 0) + \max(K_2 - S, 0) - (C + P)" /></div>
                  <ul className="list-disc list-inside text-muted-foreground mt-2">
                    <li>Maximum loss: Premium paid (C + P)</li>
                    <li>Break-even points: K₁ + (C + P) and K₂ - (C + P)</li>
                    <li>Best for: Expected large moves</li>
                    <li>Time decay: High (long both options)</li>
                  </ul>
                </div>
                <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5">
                  <h4 className="text-xl font-semibold mb-4">Iron Condor</h4>
                  <p className="text-muted-foreground mb-2">
                    Bull put spread + Bear call spread. Limited profit, limited loss.
                  </p>
                  <div className="text-muted-foreground mb-2">P&L = <BlockMath math="\min(K_1 - S, 0) - \min(K_2 - S, 0) + \min(S - K_3, 0) - \min(S - K_4, 0) + (P_1 - P_2 + C_3 - C_4)" /></div>
                  <ul className="list-disc list-inside text-muted-foreground mt-2">
                    <li>Maximum loss: Width of wings - credit received</li>
                    <li>Maximum profit: Credit received</li>
                    <li>Best for: Range-bound markets</li>
                    <li>Time decay: Beneficial (net short options)</li>
                  </ul>
                </div>
                <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5">
                  <h4 className="text-xl font-semibold mb-4">Butterfly Spread</h4>
                  <p className="text-muted-foreground mb-2">
                    Long call at K₁ + Short 2 calls at K₂ + Long call at K₃. Limited risk, limited profit.
                  </p>
                  <div className="text-muted-foreground mb-2">P&L = <BlockMath math="\max(S - K_1, 0) - 2\max(S - K_2, 0) + \max(S - K_3, 0) + (2C_2 - C_1 - C_3)" /></div>
                  <ul className="list-disc list-inside text-muted-foreground mt-2">
                    <li>Maximum loss: Net premium paid</li>
                    <li>Maximum profit: K₂ - K₁ - net premium</li>
                    <li>Best for: Expected price stability</li>
                    <li>Time decay: Beneficial near expiration</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Risk Management Guidelines */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              viewport={{ once: true }}
              className="space-y-6 mb-8"
            >
              <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">Risk Management Guidelines</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5">
                  <h4 className="text-xl font-semibold mb-4">Position Sizing</h4>
                  <p className="text-muted-foreground mb-2">
                    Calculate maximum position size based on account risk:
                  </p>
                  <div className="text-muted-foreground mb-2">Position Size = <BlockMath math="\text{Account Risk} \times \frac{\text{Account Value}}{\text{Stop Loss}}" /></div>
                  <ul className="list-disc list-inside text-muted-foreground mt-2">
                    <li>Risk 1-2% per trade</li>
                    <li>Maximum 5% per strategy</li>
                    <li>Consider correlation between positions</li>
                  </ul>
                </div>
                <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5">
                  <h4 className="text-xl font-semibold mb-4">Stop Loss Levels</h4>
                  <p className="text-muted-foreground mb-2">
                    Set stop losses based on strategy type:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2">
                    <li>Directional trades: 2-3x premium</li>
                    <li>Spreads: Width of spread</li>
                    <li>Time-based: 50% of premium</li>
                    <li>Greeks-based: Delta threshold</li>
                  </ul>
                </div>
                <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5">
                  <h4 className="text-xl font-semibold mb-4">Portfolio Hedging</h4>
                  <p className="text-muted-foreground mb-2">
                    Maintain portfolio-level protection:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2">
                    <li>Long-term puts for downside protection</li>
                    <li>Delta-neutral portfolio targets</li>
                    <li>Correlation-based position limits</li>
                    <li>Regular portfolio rebalancing</li>
                  </ul>
                </div>
                <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5">
                  <h4 className="text-xl font-semibold mb-4">Volatility Management</h4>
                  <p className="text-muted-foreground mb-2">
                    Monitor and adjust for volatility:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2">
                    <li>Track implied vs. historical volatility</li>
                    <li>Adjust position size in high volatility</li>
                    <li>Use volatility-based stop losses</li>
                    <li>Consider volatility term structure</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Supported Trading Pairs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/5 mb-8"
            >
              <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">Supported Trading Pairs</h3>
              <p className="text-muted-foreground">
                XOPT supports a wide range of trading pairs, allowing you to trade options on various assets.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>BTC/USD</li>
                <li>ETH/USD</li>
                <li>XOPT/USD</li>
                <li>And more...</li>
              </ul>
            </motion.div>
          </section>

          <ContributionForm />
        </div>
      </main>
    </QueryClientProvider>
  );
} 