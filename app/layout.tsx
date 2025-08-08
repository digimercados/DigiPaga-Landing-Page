import "./globals.css"
import { Inter } from 'next/font/google'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "DigiPaga - Control your Finances with Stablecoins",
  description: "Manage your finances, pay utility bills, convert crypto, and access cash globally with DigiPaga.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
