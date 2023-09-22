import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import MainNavBar from '@/components/MainNavBar/MainNavBar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vici',
  description: 'Remember everything you learn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <MainNavBar />
        {children}</body>
    </html>
  )
}
