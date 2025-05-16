import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ScrollToTop from '@/components/ScrollToTop';
import { ThemeProvider } from "next-themes";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const font = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PT Farming Nusantara",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  icons: "/images/logo/logo.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className}`}>
         <ThemeProvider
            attribute="class"
            enableSystem={true}
            defaultTheme="light"
         >
            <Header />
              {children}
            <Footer />
            <ScrollToTop />
         </ThemeProvider>
      </body>
    </html>
  );
}
