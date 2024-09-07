import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BarMenu from "./components/BarMenu";
import { ThemeProvider } from "@/components/ui/ThemeProvidor";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Invoice app<",
  description: "Invoice app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-32x32.png"
          />
      </head>
      <body className={inter.className}>
          <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
             <BarMenu dark={true}/>
            {children}
         </ThemeProvider>
        </body>
    </html>
  );
}
