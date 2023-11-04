import "@/ui/styles.css"

export const metadata = {
  title: "Pokedex App",
  description: "Made with Nextjs using PokeAPI",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
