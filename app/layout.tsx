import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Providers } from "./providers";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Axiom AI",
  description: "AI-powered learning platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <html lang="en">
    //   <body className={inter.className}>
    //     <Providers>
    //
    //       {children}
    //     </Providers>
    //   </body>
    // </html>
    <ClerkProvider>
      <Providers>
        <html lang="en">
          <body>
            <Navigation />
            {children}
          </body>
        </html>
      </Providers>
    </ClerkProvider>
  );
}
