'use client'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          XOPT Protocol Crowdloan
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Join the future of cross-chain options trading and collateral vaults. Participate in the XOPT Protocol crowdloan to support the development of decentralized financial infrastructure.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/contribute"
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Contribute Now
          </a>
          <a href="/learn-more" className="text-sm font-semibold leading-6 text-foreground">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  )
} 