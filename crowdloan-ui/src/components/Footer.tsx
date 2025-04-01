'use client'

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">XOPT Protocol</h3>
            <p className="text-sm text-muted-foreground">
              Decentralized cross-chain options trading and collateral vaults.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/contribute" className="text-sm text-muted-foreground hover:text-primary">
                  Contribute
                </a>
              </li>
              <li>
                <a href="/learn-more" className="text-sm text-muted-foreground hover:text-primary">
                  Learn More
                </a>
              </li>
              <li>
                <a href="/docs" className="text-sm text-muted-foreground hover:text-primary">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://twitter.com/xoptprotocol" className="text-sm text-muted-foreground hover:text-primary">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://discord.gg/xopt" className="text-sm text-muted-foreground hover:text-primary">
                  Discord
                </a>
              </li>
              <li>
                <a href="https://github.com/xoptprotocol" className="text-sm text-muted-foreground hover:text-primary">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} XOPT Protocol. All rights reserved.
        </div>
      </div>
    </footer>
  )
} 