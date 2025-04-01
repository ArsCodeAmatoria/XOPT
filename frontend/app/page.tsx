'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeToggle } from '../src/components/ThemeToggle';
import { Hero } from '../src/components/Hero';
import { Features } from '../src/components/Features';
import { ContributionForm } from '../src/components/ContributionForm';

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="min-h-screen bg-background">
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        <Hero />
        <div className="container mx-auto px-4 py-12">
          <Features />
          
          {/* Market Opportunity Section */}
          <section className="my-24">
            <h2 className="text-3xl font-bold mb-8 text-center">Market Opportunity</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4">Growing DeFi Market</h3>
                <p className="text-muted-foreground">
                  The DeFi options market is experiencing exponential growth, with increasing demand for sophisticated trading tools and risk management solutions.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4">Institutional Adoption</h3>
                <p className="text-muted-foreground">
                  Traditional financial institutions are increasingly looking to DeFi for efficient options trading, creating a significant market opportunity.
                </p>
              </div>
            </div>
          </section>

          {/* Tokenomics Section */}
          <section className="my-24">
            <h2 className="text-3xl font-bold mb-8 text-center">Tokenomics</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">100M</h3>
                <p className="text-muted-foreground">Total Supply</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">2%</h3>
                <p className="text-muted-foreground">Transaction Fee</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">40%</h3>
                <p className="text-muted-foreground">Platform Revenue Share</p>
              </div>
            </div>
          </section>

          {/* Roadmap Section */}
          <section className="my-24">
            <h2 className="text-3xl font-bold mb-8 text-center">Roadmap</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4 text-center">Phase 1: Foundation</h3>
                <ul className="text-muted-foreground space-y-2 text-center">
                  <li>Token Launch and Distribution</li>
                  <li>Core Protocol Development</li>
                  <li>Initial Platform Features</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4 text-center">Phase 2: Growth</h3>
                <ul className="text-muted-foreground space-y-2 text-center">
                  <li>Advanced Trading Features</li>
                  <li>Cross-chain Integration</li>
                  <li>Institutional Partnerships</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4 text-center">Phase 3: Expansion</h3>
                <ul className="text-muted-foreground space-y-2 text-center">
                  <li>Global Market Expansion</li>
                  <li>Advanced Analytics Tools</li>
                  <li>Mobile Application</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Community Section */}
          <section className="my-24">
            <h2 className="text-3xl font-bold mb-8 text-center">Join Our Community</h2>
            <div className="bg-card p-8 rounded-xl border border-border text-center">
              <p className="text-lg mb-6 text-muted-foreground">
                Be part of the future of decentralized options trading. Join our community and stay updated with the latest developments.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90">
                  Join Discord
                </a>
                <a href="#" className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90">
                  Follow Twitter
                </a>
              </div>
            </div>
          </section>

          <ContributionForm />
        </div>
      </main>
    </QueryClientProvider>
  );
} 