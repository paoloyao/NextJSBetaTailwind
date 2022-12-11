import '../styles/globals.css'
import Header from './Header'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
        <title>NextJS Excercise Homepage</title>
      </head>
      <body>
        <Header />
        {children}
        </body>
    </html>
  )
}