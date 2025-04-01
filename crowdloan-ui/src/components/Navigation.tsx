'use client'

import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-card border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            XOPT Protocol
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/contribute" className="text-sm font-medium hover:text-primary">
              Contribute
            </Link>
            <Link href="/learn-more" className="text-sm font-medium hover:text-primary">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 