import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hashash CTF Team",
  description: "we pwn the planet :p",
  icons: {
    icon: "/logo.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                try {
                  if (localStorage.theme === 'light') {
                    document.documentElement.classList.remove('dark')
                  } else if (localStorage.theme === 'system') {
                    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                      document.documentElement.classList.add('dark')
                    } else {
                      document.documentElement.classList.remove('dark')
                    }
                  } else {
                    // Default to dark theme
                    document.documentElement.classList.add('dark')
                  }
                } catch (_) {
                  // Default to dark theme on error
                  document.documentElement.classList.add('dark')
                }
              `,
            }}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
