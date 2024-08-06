import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gigsdev Nextjs",
  description: "This is my first Next.js app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}</body>
    </html>
  );
}
