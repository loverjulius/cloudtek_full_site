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
  icons: {
    icon: [
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-64x64.png", sizes: "64x64", type: "image/png" },
    ],
    apple: [{ url: "/images/android-chrome-256x256.png" }],
  },
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
