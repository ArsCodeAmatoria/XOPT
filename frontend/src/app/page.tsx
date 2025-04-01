export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">XOPT Protocol</h1>
        <p className="text-xl mb-4">Cross-chain options trading on Kusama</p>
        <div className="mt-8">
          <a
            href="/trade"
            className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Start Trading
          </a>
        </div>
      </div>
    </main>
  )
} 