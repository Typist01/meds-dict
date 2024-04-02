import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "./QueryProvider";
import NavBar from "@/components/NavBar";
import { Suspense } from "react";
import Spinner from "@/components/Spinner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " min-h-[100vh]"}>
        <ReactQueryProvider>
          <Suspense
            fallback={
              <div className="h-screen flex items-center justify-center">
                <Spinner />
              </div>
            }
          >
            <NavBar />
            {children}
          </Suspense>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
