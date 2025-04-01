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

          {/* Options Trading Basics Section */}
          <section className="my-24">
            <h2 className="text-3xl font-bold mb-8 text-center">Understanding Options Trading</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4 text-center">What Are Options?</h3>
                <p className="text-muted-foreground text-center">
                  Options are financial derivatives that give you the right, but not the obligation, to buy (call) or sell (put) an asset at a predetermined price (strike price) before a specific date (expiration).
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4 text-center">Types of Options</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Call Options</h4>
                    <p className="text-muted-foreground text-sm">
                      Give you the right to buy an asset at the strike price. Profitable when the asset price rises above the strike price.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Put Options</h4>
                    <p className="text-muted-foreground text-sm">
                      Give you the right to sell an asset at the strike price. Profitable when the asset price falls below the strike price.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4 text-center">Trading on the Parachain</h3>
                <p className="text-muted-foreground text-center">
                  XOPT operates on a specialized parachain, providing fast, secure, and cost-effective options trading. The parachain architecture ensures:
                </p>
                <ul className="text-muted-foreground mt-4 space-y-2 text-center">
                  <li>• Instant trade execution</li>
                  <li>• Minimal transaction fees</li>
                  <li>• Cross-chain asset support</li>
                  <li>• Advanced order types</li>
                </ul>
              </div>

              {/* Supported Assets Section */}
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4 text-center">Supported Trading Pairs</h3>
                <p className="text-muted-foreground text-center mb-6">
                  Trade options on a wide range of assets across multiple chains
                </p>
                
                {/* Major Cryptocurrencies */}
                <div className="mb-8">
                  <h4 className="font-semibold mb-4 text-center">Major Cryptocurrencies</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <div className="font-semibold">Bitcoin (BTC)</div>
                      <p className="text-sm text-muted-foreground">Strike prices: $30K-$100K</p>
                      <p className="text-xs text-muted-foreground mt-1">Weekly, Monthly, Quarterly</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <div className="font-semibold">Ethereum (ETH)</div>
                      <p className="text-sm text-muted-foreground">Strike prices: $2K-$10K</p>
                      <p className="text-xs text-muted-foreground mt-1">Weekly, Monthly, Quarterly</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <div className="font-semibold">Solana (SOL)</div>
                      <p className="text-sm text-muted-foreground">Strike prices: $50-$500</p>
                      <p className="text-xs text-muted-foreground mt-1">Weekly, Monthly</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <div className="font-semibold">Cardano (ADA)</div>
                      <p className="text-sm text-muted-foreground">Strike prices: $0.5-$5</p>
                      <p className="text-xs text-muted-foreground mt-1">Weekly, Monthly</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <div className="font-semibold">Polkadot (DOT)</div>
                      <p className="text-sm text-muted-foreground">Strike prices: $5-$50</p>
                      <p className="text-xs text-muted-foreground mt-1">Weekly, Monthly</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <div className="font-semibold">Avalanche (AVAX)</div>
                      <p className="text-sm text-muted-foreground">Strike prices: $20-$200</p>
                      <p className="text-xs text-muted-foreground mt-1">Weekly, Monthly</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <div className="font-semibold">Polygon (MATIC)</div>
                      <p className="text-sm text-muted-foreground">Strike prices: $0.5-$5</p>
                      <p className="text-xs text-muted-foreground mt-1">Weekly, Monthly</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <div className="font-semibold">Cosmos (ATOM)</div>
                      <p className="text-sm text-muted-foreground">Strike prices: $5-$50</p>
                      <p className="text-xs text-muted-foreground mt-1">Weekly, Monthly</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <div className="font-semibold">Chainlink (LINK)</div>
                      <p className="text-sm text-muted-foreground">Strike prices: $5-$50</p>
                      <p className="text-xs text-muted-foreground mt-1">Weekly, Monthly</p>
                    </div>
                  </div>
                </div>

                {/* DeFi Tokens */}
                <div className="mb-8">
                  <h4 className="font-semibold mb-4 text-center">DeFi Tokens</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <div className="font-semibold">Uniswap (UNI)</div>
                      <p className="text-sm text-muted-foreground">Strike prices: $5-$50</p>
                      <p className="text-xs text-muted-foreground mt-1">Weekly, Monthly</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <div className="font-semibold">Aave (AAVE)</div>
                      <p className="text-sm text-muted-foreground">Strike prices: $50-$500</p>
                      <p className="text-xs text-muted-foreground mt-1">Weekly, Monthly</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <div className="font-semibold">Compound (COMP)</div>
                      <p className="text-sm text-muted-foreground">Strike prices: $20-$200</p>
                      <p className="text-xs text-muted-foreground mt-1">Weekly, Monthly</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <div className="font-semibold">SushiSwap (SUSHI)</div>
                      <p className="text-sm text-muted-foreground">Strike prices: $1-$10</p>
                      <p className="text-xs text-muted-foreground mt-1">Weekly</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <div className="font-semibold">Curve (CRV)</div>
                      <p className="text-sm text-muted-foreground">Strike prices: $0.5-$5</p>
                      <p className="text-xs text-muted-foreground mt-1">Weekly</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <div className="font-semibold">Yearn Finance (YFI)</div>
                      <p className="text-sm text-muted-foreground">Strike prices: $5K-$50K</p>
                      <p className="text-xs text-muted-foreground mt-1">Weekly, Monthly</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <div className="font-semibold">Maker (MKR)</div>
                      <p className="text-sm text-muted-foreground">Strike prices: $500-$5000</p>
                      <p className="text-xs text-muted-foreground mt-1">Weekly, Monthly</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <div className="font-semibold">Synthetix (SNX)</div>
                      <p className="text-sm text-muted-foreground">Strike prices: $2-$20</p>
                      <p className="text-xs text-muted-foreground mt-1">Weekly</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <div className="font-semibold">Balancer (BAL)</div>
                      <p className="text-sm text-muted-foreground">Strike prices: $5-$50</p>
                      <p className="text-xs text-muted-foreground mt-1">Weekly</p>
                    </div>
                  </div>
                </div>

                {/* Stablecoins */}
                <div className="mb-8">
                  <h4 className="font-semibold mb-4 text-center">Stablecoins</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <div className="font-semibold">USD Coin (USDC)</div>
                      <p className="text-sm text-muted-foreground">Strike prices: $0.95-$1.05</p>
                      <p className="text-xs text-muted-foreground mt-1">Weekly, Monthly</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <div className="font-semibold">Tether (USDT)</div>
                      <p className="text-sm text-muted-foreground">Strike prices: $0.95-$1.05</p>
                      <p className="text-xs text-muted-foreground mt-1">Weekly, Monthly</p>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    • All options are available with weekly, monthly, and quarterly expirations
                    <br />
                    • Strike prices are dynamically adjusted based on current market prices
                    <br />
                    • New trading pairs are regularly added based on market demand
                    <br />
                    • Minimum contract size varies by asset
                    <br />
                    • Liquidity requirements apply for market making
                  </p>
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4 text-center">Key Concepts</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Strike Price</h4>
                    <p className="text-muted-foreground text-sm">
                      The price at which you can buy (call) or sell (put) the asset.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Premium</h4>
                    <p className="text-muted-foreground text-sm">
                      The cost of buying an option, paid upfront.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Expiration</h4>
                    <p className="text-muted-foreground text-sm">
                      The date when the option contract expires.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Intrinsic Value</h4>
                    <p className="text-muted-foreground text-sm">
                      The difference between the current price and strike price.
                    </p>
                  </div>
                </div>
              </div>

              {/* Options Greeks Section */}
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4 text-center">Options Greeks</h3>
                <p className="text-muted-foreground text-center mb-6">
                  Greeks are mathematical measures that help traders understand how different factors affect option prices.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Delta (Δ)</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      Measures the rate of change in option price relative to the underlying asset price.
                    </p>
                    <div className="bg-muted p-3 rounded-lg text-sm font-mono">
                      Δ = ∂V/∂S
                    </div>
                    <p className="text-muted-foreground text-sm mt-2">
                      • Call options: 0 to 1
                      <br />
                      • Put options: -1 to 0
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Gamma (Γ)</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      Measures the rate of change in Delta relative to the underlying asset price.
                    </p>
                    <div className="bg-muted p-3 rounded-lg text-sm font-mono">
                      Γ = ∂²V/∂S²
                    </div>
                    <p className="text-muted-foreground text-sm mt-2">
                      • Highest for at-the-money options
                      <br />
                      • Decreases as options move in/out of money
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Theta (Θ)</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      Measures the rate of time decay in option value.
                    </p>
                    <div className="bg-muted p-3 rounded-lg text-sm font-mono">
                      Θ = ∂V/∂t
                    </div>
                    <p className="text-muted-foreground text-sm mt-2">
                      • Always negative for long options
                      <br />
                      • Accelerates as expiration approaches
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Vega (ν)</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      Measures sensitivity to volatility changes.
                    </p>
                    <div className="bg-muted p-3 rounded-lg text-sm font-mono">
                      ν = ∂V/∂σ
                    </div>
                    <p className="text-muted-foreground text-sm mt-2">
                      • Higher for longer-term options
                      <br />
                      • At-the-money options have highest vega
                    </p>
                  </div>
                </div>
              </div>

              {/* Greeks Mathematical Derivations Section */}
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4 text-center">Mathematical Derivations</h3>
                <div className="space-y-8">
                  {/* Black-Scholes Model */}
                  <div>
                    <h4 className="font-semibold mb-2">Black-Scholes Model</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      The foundation for options pricing and Greeks calculations:
                    </p>
                    <div className="bg-muted p-3 rounded-lg text-sm font-mono space-y-2">
                      <div>C = S₀N(d₁) - Ke⁻ʳᵗN(d₂)</div>
                      <div>P = Ke⁻ʳᵗN(-d₂) - S₀N(-d₁)</div>
                      <div>where:</div>
                      <div>d₁ = (ln(S₀/K) + (r + σ²/2)t) / (σ√t)</div>
                      <div>d₂ = d₁ - σ√t</div>
                    </div>
                  </div>

                  {/* Delta Derivations */}
                  <div>
                    <h4 className="font-semibold mb-2">Delta (Δ) Derivations</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      First derivative of option price with respect to underlying price:
                    </p>
                    <div className="bg-muted p-3 rounded-lg text-sm font-mono space-y-2">
                      <div>For calls: Δ = N(d₁)</div>
                      <div>For puts: Δ = N(d₁) - 1</div>
                      <div>where N(d₁) is the cumulative normal distribution</div>
                    </div>
                    <p className="text-muted-foreground text-sm mt-2">
                      • Delta represents the probability of option expiring ITM
                      <br />
                      • Changes from 0 to 1 for calls, -1 to 0 for puts
                    </p>
                  </div>

                  {/* Gamma Derivations */}
                  <div>
                    <h4 className="font-semibold mb-2">Gamma (Γ) Derivations</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      Second derivative of option price with respect to underlying price:
                    </p>
                    <div className="bg-muted p-3 rounded-lg text-sm font-mono space-y-2">
                      <div>Γ = N'(d₁) / (S₀σ√t)</div>
                      <div>where N'(d₁) = e⁻ᵈ¹²/² / √(2π)</div>
                    </div>
                    <p className="text-muted-foreground text-sm mt-2">
                      • Gamma is identical for calls and puts
                      <br />
                      • Maximum at-the-money
                      <br />
                      • Decreases as option moves in/out of money
                    </p>
                  </div>

                  {/* Theta Derivations */}
                  <div>
                    <h4 className="font-semibold mb-2">Theta (Θ) Derivations</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      First derivative of option price with respect to time:
                    </p>
                    <div className="bg-muted p-3 rounded-lg text-sm font-mono space-y-2">
                      <div>For calls: Θ = -S₀N'(d₁)σ/(2√t) - rKe⁻ʳᵗN(d₂)</div>
                      <div>For puts: Θ = -S₀N'(d₁)σ/(2√t) + rKe⁻ʳᵗN(-d₂)</div>
                    </div>
                    <p className="text-muted-foreground text-sm mt-2">
                      • Theta is always negative for long options
                      <br />
                      • Accelerates as expiration approaches
                      <br />
                      • Higher for at-the-money options
                    </p>
                  </div>

                  {/* Vega Derivations */}
                  <div>
                    <h4 className="font-semibold mb-2">Vega (ν) Derivations</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      First derivative of option price with respect to volatility:
                    </p>
                    <div className="bg-muted p-3 rounded-lg text-sm font-mono space-y-2">
                      <div>ν = S₀√t × N'(d₁)</div>
                    </div>
                    <p className="text-muted-foreground text-sm mt-2">
                      • Vega is identical for calls and puts
                      <br />
                      • Increases with time to expiration
                      <br />
                      • Maximum for at-the-money options
                    </p>
                  </div>

                  {/* Rho Derivations */}
                  <div>
                    <h4 className="font-semibold mb-2">Rho (ρ) Derivations</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      First derivative of option price with respect to interest rate:
                    </p>
                    <div className="bg-muted p-3 rounded-lg text-sm font-mono space-y-2">
                      <div>For calls: ρ = tKe⁻ʳᵗN(d₂)</div>
                      <div>For puts: ρ = -tKe⁻ʳᵗN(-d₂)</div>
                    </div>
                    <p className="text-muted-foreground text-sm mt-2">
                      • Positive for calls, negative for puts
                      <br />
                      • Increases with time to expiration
                      <br />
                      • More significant for longer-term options
                    </p>
                  </div>

                  {/* Greeks Relationships */}
                  <div>
                    <h4 className="font-semibold mb-2">Key Relationships</h4>
                    <div className="bg-muted p-3 rounded-lg text-sm font-mono space-y-2">
                      <div>Δ(call) - Δ(put) = 1</div>
                      <div>Γ(call) = Γ(put)</div>
                      <div>ν(call) = ν(put)</div>
                      <div>Θ(call) - Θ(put) = -rKe⁻ʳᵗ</div>
                      <div>ρ(call) - ρ(put) = tKe⁻ʳᵗ</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trading Strategies Section */}
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4 text-center">Common Trading Strategies</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Delta Hedging</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      A strategy to maintain a delta-neutral position by adjusting the hedge ratio.
                    </p>
                    <div className="bg-muted p-3 rounded-lg text-sm font-mono">
                      Hedge Ratio = -Δ
                    </div>
                    <p className="text-muted-foreground text-sm mt-2">
                      • Requires frequent rebalancing
                      <br />
                      • Effective for reducing directional risk
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Gamma Scalping</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      Profiting from gamma by rebalancing delta-neutral positions.
                    </p>
                    <div className="bg-muted p-3 rounded-lg text-sm font-mono">
                      P&L ≈ ½Γ(ΔS)² - ΘΔt
                    </div>
                    <p className="text-muted-foreground text-sm mt-2">
                      • Profitable in high volatility
                      <br />
                      • Requires precise timing
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Theta Decay</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      Selling options to profit from time decay.
                    </p>
                    <div className="bg-muted p-3 rounded-lg text-sm font-mono">
                      Daily Theta = -Θ/365
                    </div>
                    <p className="text-muted-foreground text-sm mt-2">
                      • Most effective near expiration
                      <br />
                      • Higher premium for ATM options
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Vega Trading</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      Trading based on volatility expectations.
                    </p>
                    <div className="bg-muted p-3 rounded-lg text-sm font-mono">
                      Volatility Impact = ν × Δσ
                    </div>
                    <p className="text-muted-foreground text-sm mt-2">
                      • Long vega: Buy options
                      <br />
                      • Short vega: Sell options
                    </p>
                  </div>
                </div>
              </div>

              {/* Complex Options Strategies Section */}
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4 text-center">Complex Options Strategies</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Straddle</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      Long call + Long put at same strike price. Profits from large price movements in either direction.
                    </p>
                    <div className="bg-muted p-3 rounded-lg text-sm font-mono">
                      P&L = max(S - K, 0) + max(K - S, 0) - (C + P)
                    </div>
                    <div className="mt-4">
                      <h5 className="font-semibold mb-2">Risk Management</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Maximum loss: Premium paid (C + P)</li>
                        <li>• Break-even points: K ± (C + P)</li>
                        <li>• Best for: High volatility events</li>
                        <li>• Time decay: High (long both options)</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Strangle</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      Long call + Long put at different strikes. Similar to straddle but cheaper.
                    </p>
                    <div className="bg-muted p-3 rounded-lg text-sm font-mono">
                      P&L = max(S - K₁, 0) + max(K₂ - S, 0) - (C + P)
                    </div>
                    <div className="mt-4">
                      <h5 className="font-semibold mb-2">Risk Management</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Maximum loss: Premium paid (C + P)</li>
                        <li>• Break-even points: K₁ + (C + P) and K₂ - (C + P)</li>
                        <li>• Best for: Expected large moves</li>
                        <li>• Time decay: High (long both options)</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Iron Condor</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      Bull put spread + Bear call spread. Limited profit, limited loss.
                    </p>
                    <div className="bg-muted p-3 rounded-lg text-sm font-mono">
                      P&L = min(K₁ - S, 0) - min(K₂ - S, 0) + min(S - K₃, 0) - min(S - K₄, 0) + (P₁ - P₂ + C₃ - C₄)
                    </div>
                    <div className="mt-4">
                      <h5 className="font-semibold mb-2">Risk Management</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Maximum loss: Width of wings - credit received</li>
                        <li>• Maximum profit: Credit received</li>
                        <li>• Best for: Range-bound markets</li>
                        <li>• Time decay: Beneficial (net short options)</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Butterfly Spread</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      Long call at K₁ + Short 2 calls at K₂ + Long call at K₃. Limited risk, limited profit.
                    </p>
                    <div className="bg-muted p-3 rounded-lg text-sm font-mono">
                      P&L = max(S - K₁, 0) - 2max(S - K₂, 0) + max(S - K₃, 0) + (2C₂ - C₁ - C₃)
                    </div>
                    <div className="mt-4">
                      <h5 className="font-semibold mb-2">Risk Management</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Maximum loss: Net premium paid</li>
                        <li>• Maximum profit: K₂ - K₁ - net premium</li>
                        <li>• Best for: Expected price stability</li>
                        <li>• Time decay: Beneficial near expiration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Risk Management Section */}
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4 text-center">Risk Management Guidelines</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Position Sizing</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      Calculate maximum position size based on account risk:
                    </p>
                    <div className="bg-muted p-3 rounded-lg text-sm font-mono">
                      Position Size = Account Risk × Account Value / Stop Loss
                    </div>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      <li>• Risk 1-2% per trade</li>
                      <li>• Maximum 5% per strategy</li>
                      <li>• Consider correlation between positions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Stop Loss Levels</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      Set stop losses based on strategy type:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Directional trades: 2-3x premium</li>
                      <li>• Spreads: Width of spread</li>
                      <li>• Time-based: 50% of premium</li>
                      <li>• Greeks-based: Delta threshold</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Portfolio Hedging</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      Maintain portfolio-level protection:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Long-term puts for downside protection</li>
                      <li>• Delta-neutral portfolio targets</li>
                      <li>• Correlation-based position limits</li>
                      <li>• Regular portfolio rebalancing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Volatility Management</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      Monitor and adjust for volatility:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Track implied vs. historical volatility</li>
                      <li>• Adjust position size in high volatility</li>
                      <li>• Use volatility-based stop losses</li>
                      <li>• Consider volatility term structure</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How to Use Section */}
          <section className="my-24">
            <h2 className="text-3xl font-bold mb-8 text-center">How to Use XOPT</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4 text-center">1. Connect Your Wallet</h3>
                <p className="text-muted-foreground text-center">
                  Start by connecting your Web3 wallet (MetaMask, WalletConnect, etc.) to access the XOPT platform.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4 text-center">2. Select Trading Pair</h3>
                <p className="text-muted-foreground text-center">
                  Choose from available trading pairs and select your preferred strike price and expiration date.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4 text-center">3. Choose Option Type</h3>
                <p className="text-muted-foreground text-center">
                  Select between call options (right to buy) or put options (right to sell) based on your market outlook.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4 text-center">4. Set Position Size</h3>
                <p className="text-muted-foreground text-center">
                  Enter the amount of options you want to trade and review the premium cost.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4 text-center">5. Execute Trade</h3>
                <p className="text-muted-foreground text-center">
                  Confirm the transaction in your wallet to execute the trade. Your options position will be immediately visible in your portfolio.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4 text-center">6. Manage Position</h3>
                <p className="text-muted-foreground text-center">
                  Monitor your position, set stop-loss orders, or close your position before expiration through the platform's interface.
                </p>
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