'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useQueryClient } from '@tanstack/react-query';

export function ContributionForm() {
  const [amount, setAmount] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const queryClient = useQueryClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Implement contribution logic
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      queryClient.invalidateQueries({ queryKey: ['contributions'] });
    } catch (error) {
      console.error('Contribution failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Contribute to XOPT Protocol</h2>
          <p className="text-muted-foreground mb-8 text-center">
            Join the future of decentralized options trading by contributing to the protocol.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="amount" className="block text-sm font-medium mb-2">
                Contribution Amount (DOT)
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter amount"
                required
                min="1"
                step="0.1"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Processing...' : 'Contribute Now'}
            </motion.button>
          </form>

          <div className="mt-8 p-4 rounded-lg bg-muted">
            <h3 className="font-medium mb-2">Contribution Benefits</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Early access to protocol features</li>
              <li>• Governance rights</li>
              <li>• Protocol fee sharing</li>
              <li>• Exclusive trading opportunities</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 