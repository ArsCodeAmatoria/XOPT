'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { ContributionForm } from '../components/ContributionForm';
import { LearnMore } from '../components/LearnMore';

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="min-h-screen bg-background">
        <Hero />
        <Features />
        <LearnMore />
        <ContributionForm />
      </main>
    </QueryClientProvider>
  );
} 