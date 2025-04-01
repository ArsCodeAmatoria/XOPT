import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Hero } from '../components/Hero';
import { ContributionForm } from '../components/ContributionForm';
import { Features } from '../components/Features';

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="min-h-screen bg-background">
        <Hero />
        <Features />
        <div id="contribute">
          <ContributionForm />
        </div>
      </main>
    </QueryClientProvider>
  );
} 