import MainLayout from "@/components/layouts/main-layout"
import { Providers } from "@/redux/provider"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import "./globals.css"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Next Basket Assessment",
  description: "Generated Agbaje Olayiwolap",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <MainLayout>{children}</MainLayout>
        </body>
      </html>
    </Providers>
  )
}
