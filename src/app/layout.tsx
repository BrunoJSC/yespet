import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { MaxWrapper } from "@/components/max-wrapper";
import { Footer } from "@/components/footer";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YesPet",
  description: "YesPet  - Pet adoption platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          roboto.className
        )}
      >
        <MaxWrapper>
          <Header />
          {children}
          <Footer />
        </MaxWrapper>
      </body>
    </html>
  );
}
