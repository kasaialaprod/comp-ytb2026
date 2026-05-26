import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(false)

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    document.documentElement.setAttribute(
      'data-theme',
      prefersDark ? 'dark' : 'light',
    )
    setIsDark(prefersDark)
  }, [])

  const toggleTheme = () => {
    const nextIsDark = !isDark
    setIsDark(nextIsDark)
    document.documentElement.setAttribute(
      'data-theme',
      nextIsDark ? 'dark' : 'light',
    )
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-cream text-ink dark:bg-plum dark:text-paper">
      <Header onToggleTheme={toggleTheme} isDark={isDark} />
      <main>
        <Hero />
      </main>
    </div>
  )
}