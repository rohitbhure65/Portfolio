import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rohit Bhure',
  description: 'Passionate Btech student with a keen interest in web development, eager to build engaging user experiences and create visually appealing websites.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="ROPijUA4ZNBrZdH-FYm_xJoKl8eN9PjNgv8t021I7Ds" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
