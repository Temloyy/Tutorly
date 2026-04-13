import type { Metadata } from 'next'
import '../design-tokens.css'
import '../styles.css'

export const metadata: Metadata = {
  title: 'Tutorly | Find the Right Tutor. Faster.',
  description: 'Personalized one-on-one learning with trusted tutors across the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script src="https://unpkg.com/@phosphor-icons/web" defer></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
