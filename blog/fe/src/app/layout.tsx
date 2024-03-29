import { cn } from "@/libs/common/utils";
import { Providers } from "@/providers/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PRN231",
  description: "Blog for PRN231",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          "overflow-x-visible bg-white antialiased duration-200"
        )}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
