// app/layout.tsx
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Cloud Tek Computing LLC',
  description: 'Modernize critical systems. Deliver mission results.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
