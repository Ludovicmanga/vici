import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import MainNavBar from "@/components/MainNavBar/MainNavBar";
import LoginForm from "@/components/LoginForm/LoginForm";

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
  const checkUserIsLoggedIn = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/check-auth`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
      }
    );
    const resData = await response.json();
    if (resData.user) {
      return resData.user;
    } else {
      return null;
    }
  };

  const loggedUser = await checkUserIsLoggedIn();
  return (
    <html lang="fr">
      <body className={inter.className}>
        {loggedUser ? (
          <>
            <MainNavBar />
            {children}
          </>
        ) : (
          <LoginForm />
        )}
      </body>
    </html>
  );
}
