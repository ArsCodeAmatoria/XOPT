'use client'

export default function LearnMorePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-8">
          About XOPT Protocol
        </h1>
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">What is XOPT Protocol?</h2>
            <p className="text-muted-foreground">
              XOPT Protocol is a decentralized platform for cross-chain options trading and collateral vaults. It enables users to trade options across different blockchain networks while maintaining security and efficiency.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Crowdloan Benefits</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Early access to platform features</li>
              <li>Governance rights in protocol decisions</li>
              <li>Potential rewards for early contributors</li>
              <li>Support for decentralized finance innovation</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">How to Participate</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Connect your Polkadot wallet</li>
              <li>Enter your contribution amount in DOT</li>
              <li>Confirm the transaction</li>
              <li>Receive your XOPT tokens after the crowdloan ends</li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  )
} 