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
      <main className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background/90 relative overflow-hidden">
        {/* Background Elements */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>

        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>

        <Hero />
        
        <div className="container mx-auto px-4 py-12 relative">
          {/* Features Section with Glass Effect */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl blur-3xl"></div>
            <Features />
          </div>
          
          {/* Market Opportunity Section */}
          <section className="my-24 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60 mb-4">Market Opportunity</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The future of decentralized options trading is here. Join the revolution.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="group bg-card/40 backdrop-blur-xl p-8 rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/10 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                className="group bg-card/40 backdrop-blur-xl p-8 rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/10 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">Institutional Adoption</h3>
                <p className="text-muted-foreground">
                  Traditional financial institutions are increasingly looking to DeFi for efficient options trading, creating a significant market opportunity.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Tokenomics Section */}
          <section className="my-24 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60 mb-4">Tokenomics</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fair and transparent token distribution for sustainable growth
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="group bg-card/40 backdrop-blur-xl p-8 rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/10 text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-4xl font-bold text-primary mb-2">100M</h3>
                <p className="text-muted-foreground">Total Supply</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="group bg-card/40 backdrop-blur-xl p-8 rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/10 text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-4xl font-bold text-primary mb-2">2%</h3>
                <p className="text-muted-foreground">Transaction Fee</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="group bg-card/40 backdrop-blur-xl p-8 rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/10 text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-4xl font-bold text-primary mb-2">40%</h3>
                <p className="text-muted-foreground">Platform Revenue Share</p>
              </motion.div>
            </div>
          </section>

          {/* Roadmap Section */}
          <section className="my-24 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60 mb-4">Roadmap</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our journey to revolutionize options trading
              </p>
            </motion.div>
            <div className="max-w-3xl mx-auto space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="group bg-card/40 backdrop-blur-xl p-8 rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/10 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                className="group bg-card/40 backdrop-blur-xl p-8 rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/10 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                className="group bg-card/40 backdrop-blur-xl p-8 rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/10 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
          <section className="my-24 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60 mb-4">Join Our Community</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Be part of the future of decentralized options trading
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group bg-card/40 backdrop-blur-xl p-12 rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/10 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <p className="text-xl mb-8 text-muted-foreground">
                Be part of the future of decentralized options trading. Join our community and stay updated with the latest developments.
              </p>
              <div className="flex justify-center space-x-6">
                <a href="#" className="group/btn bg-primary text-primary-foreground px-8 py-3 rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  Join Discord
                </a>
                <a href="#" className="group/btn bg-primary text-primary-foreground px-8 py-3 rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  Follow Twitter
                </a>
              </div>
            </motion.div>
          </section>

          {/* XOPT Protocol Section */}
          <section className="my-24 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60 mb-4">XOPT Protocol</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Understanding our unique approach to decentralized options trading
              </p>
            </motion.div>

            {/* Protocol Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group bg-card/40 backdrop-blur-xl p-8 rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/10 mb-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">Protocol Overview</h3>
              <p className="text-muted-foreground">
                XOPT is a decentralized options protocol built on Polkadot, offering secure and efficient options trading with zero slippage and advanced risk management tools.
              </p>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6 mb-8"
            >
              <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group bg-card/40 backdrop-blur-xl p-8 rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h4 className="text-xl font-semibold mb-4">Zero Slippage</h4>
                  <p className="text-muted-foreground">
                    Our unique pricing mechanism ensures zero slippage for all trades, providing better execution prices.
                  </p>
                </div>
                <div className="group bg-card/40 backdrop-blur-xl p-8 rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h4 className="text-xl font-semibold mb-4">Cross-chain Support</h4>
                  <p className="text-muted-foreground">
                    Trade options across multiple chains through our Polkadot parachain architecture.
                  </p>
                </div>
                <div className="group bg-card/40 backdrop-blur-xl p-8 rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h4 className="text-xl font-semibold mb-4">Advanced Risk Management</h4>
                  <p className="text-muted-foreground">
                    Built-in risk management tools and position sizing recommendations.
                  </p>
                </div>
                <div className="group bg-card/40 backdrop-blur-xl p-8 rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h4 className="text-xl font-semibold mb-4">Governance</h4>
                  <p className="text-muted-foreground">
                    Community-driven governance with token holders controlling protocol parameters.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Supported Assets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="group bg-card/40 backdrop-blur-xl p-8 rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/10 mb-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">Supported Assets</h3>
              <p className="text-muted-foreground">
                Trade options on a wide range of assets including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-4">
                <li>DOT (Polkadot)</li>
                <li>KSM (Kusama)</li>
                <li>BTC (Bitcoin)</li>
                <li>ETH (Ethereum)</li>
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