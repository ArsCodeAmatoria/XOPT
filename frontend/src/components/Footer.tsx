import Link from 'next/link'
import { Github, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-xl font-bold text-primary">
              XOPT
            </Link>
            <p className="mt-4 text-muted-foreground">
              Decentralized options trading protocol built on Polkadot
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Resources</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/learn-more" className="text-muted-foreground hover:text-primary transition-colors">
                  Learn More
                </Link>
              </li>
              <li>
                <Link href="/trade" className="text-muted-foreground hover:text-primary transition-colors">
                  Trade
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Connect</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Twitter className="h-4 w-4" />
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} XOPT Protocol. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 