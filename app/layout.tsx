import './globals.css';
import Header from './components/Header';   // or './components/Header' if components/ is inside app/
import Footer from './components/Footer';   // adjust path to match your folder structure

export const metadata = {
  title: 'Cloud Tek Computing LLC',
  description: 'Modernize critical systems. Deliver mission results.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
