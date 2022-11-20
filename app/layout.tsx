import '../styles/globals.css'
import Headers from './Header'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <Headers />
        {children}
        </body>
    </html>
  )
}
