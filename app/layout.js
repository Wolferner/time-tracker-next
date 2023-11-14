import { Inter } from 'next/font/google'
import './globals.css'
import 'materialize-css/dist/css/materialize.min.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: '%s | TimeTracker',
    default: 'TimeTracker'
  },
  description: 'We helps you manage your life',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
