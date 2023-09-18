import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Abdul Ahad Khan',
  description: 'Ahad is a computer engineering graduate with significant interest in everything tech',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}˝
      bg-green-50 text-green-950`}>{children}</body>
    </html>
  )
}
