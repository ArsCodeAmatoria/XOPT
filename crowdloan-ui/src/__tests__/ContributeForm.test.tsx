import { render, screen, fireEvent } from '@testing-library/react'
import ContributeForm from '@/app/contribute/ContributeForm'

describe('ContributeForm', () => {
  it('renders the form elements', () => {
    render(<ContributeForm />)
    
    // Check for form elements
    expect(screen.getByLabelText(/Amount/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Contribute/i })).toBeInTheDocument()
  })

  it('shows validation error for invalid amount', () => {
    render(<ContributeForm />)
    
    const amountInput = screen.getByLabelText(/Amount/i)
    const submitButton = screen.getByRole('button', { name: /Contribute/i })
    
    fireEvent.change(amountInput, { target: { value: '0' } })
    fireEvent.click(submitButton)
    
    expect(screen.getByText(/Amount must be greater than 0/i)).toBeInTheDocument()
  })
}) 