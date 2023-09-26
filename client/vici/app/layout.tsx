import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import MainNavBar from "@/components/MainNavBar/MainNavBar";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/SessionProvider/SessionProvider";
import { redirect } from 'next/navigation'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vici",
  description: "Remember everything you learn",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (session?.user) {
    return (
      <html lang="fr">
        <body className={inter.className}>
          <SessionProvider session={session}>
            <MainNavBar />
            {children}
          </SessionProvider>
        </body>
      </html>
    );
  } else {
    redirect('/api/auth/signin');
  }
  
}
