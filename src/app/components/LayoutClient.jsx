'use client';

import Header from './Header';
import Footer from './Footer';
import ThemeToggle from './ThemeToggle';
import { ThemeProvider } from '../providers/ThemeProvider';

export default function LayoutClient({ children }) {
  return (
    <ThemeProvider>
      <Header />
      {children}
      <Footer />
      <ThemeToggle />
    </ThemeProvider>
  );
}
