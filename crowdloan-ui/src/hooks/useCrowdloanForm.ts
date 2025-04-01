import { useState, useCallback } from 'react'
import { CrowdloanFormData } from '@/types'

export function useCrowdloanForm() {
  const [formData, setFormData] = useState<CrowdloanFormData>({
    amount: 0,
    address: '',
  })

  const handleAmountChange = useCallback((value: string) => {
    setFormData(prev => ({
      ...prev,
      amount: parseFloat(value) || 0,
    }))
  }, [])

  const handleAddressChange = useCallback((value: string) => {
    setFormData(prev => ({
      ...prev,
      address: value,
    }))
  }, [])

  const handleSubmit = useCallback(async () => {
    try {
      // TODO: Implement form submission logic
      // This will be implemented when we add the actual form submission functionality
      console.log('Submitting form:', formData)
    } catch (error) {
      console.error('Failed to submit form:', error)
    }
  }, [formData])

  return {
    formData,
    handleAmountChange,
    handleAddressChange,
    handleSubmit,
  }
} 