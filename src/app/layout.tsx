"use client";

import { ThemeProvider } from "@material-tailwind/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

// import type {Metadata} from 'next';
import { Inter } from "next/font/google";
import "./globals.css";
import store from "../store/store";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <ThemeProvider>
        <html lang="en">
          <body className={inter.className}>
            <div className="hidden">
              <a>
                <img
                  src="https://www.easycounter.com/counter.php?onlyfilms"
                  alt="Web Site Hit Counter"
                />
              </a>
              <br />
              <a href="https://www.easycounter.com/">Free Web Counters</a>
            </div>

            {children}
          </body>
        </html>
      </ThemeProvider>
    </Provider>
  );
}
