import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import LayoutClient from './components/LayoutClient';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper - Friend Connection Tracker",
  description: "Track your meaningful interactions with friends through calls, texts, and videos",
};

export default function RootLayout({ children }) {
  return (

    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased light`}
    >
      <body className="flex flex-col min-h-screen bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text transition-colors duration-300">

        <LayoutClient>
          <main className="flex-1 bg-light-secondary dark:bg-dark-secondary 
                       py-6 sm:py-10 lg:py-14 
                       px-4 sm:px-22 md:px-16 lg:px-50
                       space-y-4 sm:space-y-8 lg:space-y-10">

            <Suspense
              fallback={
                <div className='mx-auto flex gap-1 sm:gap-2'>
                  <span className="loading loading-bars loading-xs"></span>
                  <span className="loading loading-bars loading-sm"></span>
                  <span className="loading loading-bars loading-md"></span>
                </div>
              }
            >
              {children}
            </Suspense>

          </main>

          <ToastContainer />
        </LayoutClient>

      </body>
    </html>
  );
}
