import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto_Mono, Ubuntu } from 'next/font/google'

import Providers from './ThemeProvider'
import { ThemeSwitcher } from './components/ToogleDark'


const inter = Inter({ subsets: ['latin'] })
const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-opensans',

})
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})




export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body className={inter.className}>
        <Providers  >
          <ThemeSwitcher />
          {children}

        </Providers >
      </body>

    </html>
  )
}
