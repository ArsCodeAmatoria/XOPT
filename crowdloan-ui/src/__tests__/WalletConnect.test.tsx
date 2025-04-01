import { render, screen, fireEvent } from '@testing-library/react'
import WalletConnect from '@/components/WalletConnect'

describe('WalletConnect', () => {
  it('renders the connect button', () => {
    render(<WalletConnect />)
    expect(screen.getByRole('button', { name: /Connect Wallet/i })).toBeInTheDocument()
  })

  it('shows loading state when connecting', () => {
    render(<WalletConnect />)
    const connectButton = screen.getByRole('button', { name: /Connect Wallet/i })
    
    fireEvent.click(connectButton)
    expect(screen.getByText(/Connecting/i)).toBeInTheDocument()
  })
}) 