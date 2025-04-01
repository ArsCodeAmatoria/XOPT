import { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ContributionData {
  amount: string;
  address: string;
}

export function ContributionForm() {
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');

  // Query for crowdloan stats
  const { data: stats, isLoading: isLoadingStats } = useQuery({
    queryKey: ['crowdloan-stats'],
    queryFn: async () => {
      // TODO: Replace with actual API call
      return {
        totalRaised: '0',
        contributors: 0,
        daysRemaining: 30,
        rewardRate: '10%',
      };
    },
  });

  // Mutation for submitting contribution
  const { mutate: submitContribution, isLoading: isSubmitting } = useMutation({
    mutationFn: async (data: ContributionData) => {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { success: true };
    },
    onSuccess: () => {
      // Reset form
      setAmount('');
      setAddress('');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitContribution({ amount, address });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-2xl px-6 py-16 sm:py-24 lg:px-8"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Contribute to XOPT Protocol
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Join the community and earn rewards by contributing to the XOPT Protocol crowdloan.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-foreground">
              Contribution Amount (USD)
            </label>
            <div className="mt-1">
              <input
                type="number"
                name="amount"
                id="amount"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="0.00"
                min="0"
                step="0.01"
              />
            </div>
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-foreground">
              Wallet Address
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="address"
                id="address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="0x..."
              />
            </div>
          </div>
        </div>

        <div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              <span className="flex items-center">
                Contribute Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            )}
          </motion.button>
        </div>
      </form>

      {stats && (
        <div className="mt-8 grid grid-cols-2 gap-4 text-center">
          <div className="rounded-lg bg-card p-4">
            <dt className="text-sm font-medium text-muted-foreground">Total Raised</dt>
            <dd className="mt-1 text-2xl font-semibold text-foreground">${stats.totalRaised}</dd>
          </div>
          <div className="rounded-lg bg-card p-4">
            <dt className="text-sm font-medium text-muted-foreground">Contributors</dt>
            <dd className="mt-1 text-2xl font-semibold text-foreground">{stats.contributors}</dd>
          </div>
        </div>
      )}
    </motion.div>
  );
} 