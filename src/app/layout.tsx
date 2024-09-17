import "~/styles/globals.css";
import "~/styles/custom.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export const metadata: Metadata = {
  title: "Job Platform",
  description: "Built by Danish",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} dark`}>
      <ClerkProvider
        appearance={{
          baseTheme: dark,
          signIn: { baseTheme: dark },
        }}
      >
        <body>
          <TRPCReactProvider>
            <div>
              <div className="grid-background"></div>
              <main className="min-h-screen">
                <Navbar />
                {children}
              </main>
              <Footer />
            </div>
          </TRPCReactProvider>
        </body>
      </ClerkProvider>
    </html>
  );
}
