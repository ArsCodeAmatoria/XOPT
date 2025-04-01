import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { ThemeToggle } from '../components/ThemeToggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'XOPT Protocol - Crowdloan',
  description: 'Participate in the XOPT Protocol crowdloan and earn rewards while helping build the future of decentralized options trading.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
} 