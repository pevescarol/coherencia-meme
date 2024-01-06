import './globals.css'

export const metadata = {
  title: 'We🩷memes',
  description: 'Generador de Memes by Carol (@cpvss)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  )
}
